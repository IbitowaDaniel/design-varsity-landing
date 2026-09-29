// src/components/shared/LegalSection.tsx
import { createElement, Fragment } from "react";
import { TermItem } from "@/data/terms-content";

// Capturing group makes split() keep the emails in the result array
const EMAIL_REGEX = /([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})/g;

function renderWithEmailLinks(text: string) {
  return text.split(EMAIL_REGEX).map((part, idx) => {
    // With a capturing group, matches always land on odd indexes
    if (idx % 2 === 1) {
      return createElement(
        "a",
        {
          key: idx,
          href: `mailto:${part}`,
          className:
            "text-primary transition-colors hover:text-amber-700 break-words",
        },
        part
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

export function TermsSection({ title, paragraphs, listItems, subsections }: TermItem) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-card text-gray-900">{title}</h2>

      {paragraphs?.map((p, idx) => (
        <p key={idx} className="text-body text-gray-500">
          {renderWithEmailLinks(p)}
        </p>
      ))}

      {listItems && listItems.length > 0 && (
        <ul className="list-disc pl-5 space-y-1 text-body text-gray-500">
          {listItems.map((item, idx) => (
            <li key={idx}>{renderWithEmailLinks(item)}</li>
          ))}
        </ul>
      )}

      {subsections?.map((sub, idx) => (
        <div key={idx} className="flex flex-col gap-2 mt-2">
          <h3 className="text-card text-gray-900">{sub.title}</h3>
          {sub.paragraphs?.map((sp, pIdx) => (
            <p key={pIdx} className="text-body text-gray-500">
              {renderWithEmailLinks(sp)}
            </p>
          ))}
          {sub.listItems && sub.listItems.length > 0 && (
            <ul className="list-disc pl-5 space-y-1 text-body text-gray-500">
              {sub.listItems.map((li, lIdx) => (
                <li key={lIdx}>{renderWithEmailLinks(li)}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}