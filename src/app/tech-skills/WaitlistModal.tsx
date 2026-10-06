"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Replace with your real API call (e.g. fetch("/api/waitlist", { method: "POST", ... }))
async function joinWaitlist(email: string): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
}

interface WaitlistModalProps {
  open: boolean;
  onClose: () => void;
}

export function WaitlistModal({ open, onClose }: WaitlistModalProps) {
  const reduce = useReducedMotion();
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  // Reset state each time the modal opens + focus the input
  useEffect(() => {
    if (open) {
      setEmail("");
      setError("");
      setStatus("idle");
      const t = setTimeout(() => inputRef.current?.focus(), 50);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll + close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "submitting") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, status, onClose]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    const value = email.trim();
    if (!EMAIL_REGEX.test(value)) {
      setError("Please enter a valid email address.");
      inputRef.current?.focus();
      return;
    }

    setError("");
    setStatus("submitting");
    try {
      await joinWaitlist(value);
      setStatus("success");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget && status !== "submitting") onClose();
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="waitlist-heading"
            aria-describedby="waitlist-subtext"
            className="relative w-full max-w-[440px] rounded-3xl bg-white px-6 pb-8 pt-10 shadow-xl md:px-8 md:pb-10"
            initial={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduce ? 0 : 12 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <button
              type="button"
              onClick={onClose}
              disabled={status === "submitting"}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 disabled:opacity-50"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
              </svg>
            </button>

            {status === "success" ? (
              <div className="flex flex-col items-center gap-6 text-center" role="status" aria-live="polite">
                <img
                  src="/assets/tech-skills/the-advantage/waitlist-icon.svg"
                  alt=""
                  width={60}
                  height={60}
                  className="h-[60px] w-[60px] -mb-4"
                />

                <div className="flex flex-col gap-1.5">
                  <h2 id="waitlist-heading" className="text-card font-semibold leading-tight text-gray-900">
                    You're now on the waitlist
                  </h2>
                  <p id="waitlist-subtext" className="text-body leading-snug text-gray-500">
                    We'll email you as soon as we launch.
                  </p>
                </div>

                <Button type="button" variant="primaryFill" onClick={onClose}>
                  Done
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5 text-center">
                  <h2 id="waitlist-heading" className="text-card text-gray-900">
                    Get Notified When It Launches
                  </h2>
                  <p id="waitlist-subtext" className="text-body leading-snug text-gray-500">
                    Join the waitlist and we'll email you as soon as we're live.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="waitlist-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    ref={inputRef}
                    id="waitlist-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Enter email"
                    value={email}
                    disabled={status === "submitting"}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    aria-invalid={!!error}
                    aria-describedby={error ? "waitlist-error" : undefined}
                    className={`h-[50px] w-full rounded-[10px] border px-4 text-body text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 disabled:bg-gray-50 ${error
                      ? "border-red-500 focus:ring-red-200"
                      : "border-gray-500 focus:border-gray-500 focus:ring-gray-200"
                      }`}
                  />
                  {error && (
                    <p id="waitlist-error" role="alert" className="px-1 text-body text-red-600">
                      {error}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="primaryFill"
                  disabled={status === "submitting"}
                  className="gap-2 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:opacity-70 disabled:active:translate-y-0 disabled:active:shadow-[inset_0_5px_5px_rgba(200,200,200,0.25),0_4px_0_rgba(17,24,39,1)]"
                >
                  {status === "submitting" ? (
                    <>
                      <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25" />
                        <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    "Join the waitlist"
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}