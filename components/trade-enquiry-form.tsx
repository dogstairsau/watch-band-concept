"use client";

import { useState } from "react";
import { CheckCircle, CircleNotch } from "@phosphor-icons/react";

type Status = "idle" | "submitting" | "success" | "error";

const fields = [
  { name: "contact", label: "Your name", type: "text", required: true },
  { name: "business", label: "Store or business", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", required: false },
  { name: "location", label: "Location", type: "text", required: false },
] as const;

export function TradeEnquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: Record<string, string> = {};

    fields.forEach((f) => {
      const value = String(data.get(f.name) ?? "").trim();
      if (f.required && !value) {
        nextErrors[f.name] = "This field is required.";
      }
      if (f.name === "email" && value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        nextErrors.email = "Enter a valid email address.";
      }
    });

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // TODO: wire to a real enquiry endpoint / CRM. No checkout, leads only.
    setTimeout(() => setStatus("success"), 900);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-2xl border border-ink/15 bg-ink/[0.03] p-10">
        <CheckCircle size={40} weight="light" className="text-accent" />
        <h3 className="display text-3xl text-ink">Enquiry received.</h3>
        <p className="max-w-md text-base leading-relaxed text-ink/65">
          Thank you. A member of the WATCH-MINDER team will be in touch within two
          business days to talk through trade terms.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        {fields.map((f) => (
          <div key={f.name} className="flex flex-col gap-2">
            <label htmlFor={f.name} className="text-sm font-medium text-ink">
              {f.label}
              {!f.required && <span className="text-ink/50"> (optional)</span>}
            </label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              aria-invalid={Boolean(errors[f.name])}
              className={`rounded-lg border bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent ${
                errors[f.name] ? "border-ink" : "border-ink/20"
              }`}
            />
            {errors[f.name] && (
              <p className="text-sm font-medium text-ink">{errors[f.name]}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-ink">
          Anything we should know <span className="text-ink/50">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="rounded-lg border border-ink/20 bg-paper px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-accent"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 self-start rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-fg transition-transform hover:-translate-y-px active:scale-[0.98] disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <CircleNotch size={18} weight="bold" className="animate-spin" />
            Sending
          </>
        ) : (
          "Send enquiry"
        )}
      </button>
    </form>
  );
}
