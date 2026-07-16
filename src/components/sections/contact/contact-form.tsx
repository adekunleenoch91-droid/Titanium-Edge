"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check, ShieldCheck, Clock, Lock } from "lucide-react";
import { projectTypes, budgetRanges, timelines } from "@/lib/site";
import { EASE, VIEWPORT } from "@/lib/motion";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

type Fields = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
};

const EMPTY: Fields = {
  fullName: "",
  company: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const inputBase =
  "peer w-full rounded-2xl border bg-surface/50 px-5 text-ink placeholder-transparent backdrop-blur-xl transition-all duration-400 ease-luxe-out focus:outline-none focus:border-gold focus:shadow-gold-glow";

function FloatingInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  required,
  textarea,
}: {
  id: keyof Fields;
  label: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const errId = `${id}-error`;
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={cn(inputBase, "min-h-[9.5rem] resize-y pb-3 pt-7", error ? "border-red-400/60" : "border-line")}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder=" "
          aria-invalid={!!error}
          aria-describedby={error ? errId : undefined}
          className={cn(inputBase, "h-14 pb-2 pt-6", error ? "border-red-400/60" : "border-line")}
        />
      )}
      <label
        htmlFor={id}
        className={cn(
          "pointer-events-none absolute left-5 font-numeric text-ink-dim transition-all duration-300 ease-luxe-out",
          textarea ? "top-5" : "top-1/2 -translate-y-1/2",
          // floated state
          "peer-focus:top-2.5 peer-focus:translate-y-0 peer-focus:text-xs peer-focus:text-gold",
          "peer-[:not(:placeholder-shown)]:top-2.5 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-xs"
        )}
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      {error && (
        <p id={errId} className="mt-1.5 px-1 font-numeric text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

function FloatingSelect({
  id,
  label,
  value,
  onChange,
  options,
  error,
  required,
}: {
  id: keyof Fields;
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  error?: string;
  required?: boolean;
}) {
  const errId = `${id}-error`;
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="mb-1.5 block px-1 font-numeric text-xs text-ink-dim"
      >
        {label}
        {required && <span className="text-gold"> *</span>}
      </label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={!!error}
        aria-describedby={error ? errId : undefined}
        className={cn(
          "h-14 w-full appearance-none rounded-2xl border bg-surface/50 px-5 text-ink backdrop-blur-xl transition-all duration-400 ease-luxe-out focus:border-gold focus:shadow-gold-glow focus:outline-none",
          value ? "text-ink" : "text-ink-faint",
          error ? "border-red-400/60" : "border-line"
        )}
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-surface text-ink">
            {o}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-5 top-[2.85rem] h-2 w-2 rotate-45 border-b border-r border-ink-dim" />
      {error && (
        <p id={errId} className="mt-1.5 px-1 font-numeric text-xs text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}

const trust = [
  { icon: Clock, label: "24-hour response" },
  { icon: Lock, label: "Strictly confidential" },
  { icon: ShieldCheck, label: "No obligation" },
];

export function ContactForm() {
  const [fields, setFields] = React.useState<Fields>(EMPTY);
  const [errors, setErrors] = React.useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = React.useState(false);

  const set = (key: keyof Fields) => (v: string) => {
    setFields((f) => ({ ...f, [key]: v }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (!fields.fullName.trim()) next.fullName = "Please enter your name.";
    if (!fields.email.trim()) next.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) next.email = "Please enter a valid email.";
    if (!fields.projectType) next.projectType = "Please choose a project type.";
    if (!fields.message.trim()) next.message = "Please tell us about your project.";
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      const first = document.getElementById(Object.keys(next)[0]);
      first?.focus();
      return;
    }
    // No backend in this demo — show the success state.
    setSubmitted(true);
  };

  const reset = () => {
    setFields(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  return (
    <section id="contact-form" className="relative overflow-hidden bg-background py-section">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-20" />

      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Aside */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE.out }}
                className="eyebrow"
              >
                Request a Consultation
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.8, ease: EASE.out, delay: 0.05 }}
                className="mt-6 font-display text-display-sm font-medium leading-tight text-ink"
              >
                Tell us about your project
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
                className="mt-5 max-w-sm text-ink-muted"
              >
                Share a few details and a senior member of our team will be in touch
                to arrange your complimentary consultation.
              </motion.p>

              <ul className="mt-8 flex flex-col gap-3">
                {trust.map((t) => (
                  <li key={t.label} className="flex items-center gap-3 font-numeric text-sm text-ink-muted">
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-line-gold text-gold">
                      <t.icon className="h-4 w-4" strokeWidth={1.6} />
                    </span>
                    {t.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form / success */}
          <div className="lg:col-span-8">
            <div className="glass-strong rounded-4xl p-6 shadow-elevated sm:p-9 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE.out }}
                    className="flex flex-col items-center py-14 text-center"
                    role="status"
                    aria-live="polite"
                  >
                    <motion.span
                      initial={{ scale: 0, rotate: -30 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.7, ease: EASE.out, delay: 0.1 }}
                      className="grid h-20 w-20 place-items-center rounded-full bg-gold-sheen text-primary shadow-gold-glow-lg"
                    >
                      <Check className="h-9 w-9" strokeWidth={2.4} />
                    </motion.span>
                    <h3 className="mt-8 font-display text-2xl font-medium text-ink sm:text-3xl">
                      Thank you — your enquiry is on its way
                    </h3>
                    <p className="mt-4 max-w-md text-body-lg text-ink-muted">
                      A senior member of the Titanium Edge team will respond within 24 hours
                      to arrange your consultation.
                    </p>
                    <button
                      onClick={reset}
                      className="mt-8 inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3 font-numeric text-sm text-ink transition-all duration-500 hover:border-gold hover:text-gold"
                    >
                      Send another enquiry
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    onSubmit={onSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FloatingInput id="fullName" label="Full Name" value={fields.fullName} onChange={set("fullName")} error={errors.fullName} required />
                      <FloatingInput id="company" label="Company" value={fields.company} onChange={set("company")} />
                      <FloatingInput id="email" label="Email" type="email" value={fields.email} onChange={set("email")} error={errors.email} required />
                      <FloatingInput id="phone" label="Phone" type="tel" value={fields.phone} onChange={set("phone")} />
                      <FloatingSelect id="projectType" label="Project Type" value={fields.projectType} onChange={set("projectType")} options={projectTypes} error={errors.projectType} required />
                      <FloatingSelect id="budget" label="Estimated Budget" value={fields.budget} onChange={set("budget")} options={budgetRanges} />
                    </div>

                    <FloatingSelect id="timeline" label="Preferred Timeline" value={fields.timeline} onChange={set("timeline")} options={timelines} />

                    <FloatingInput id="message" label="Tell us about your project" value={fields.message} onChange={set("message")} error={errors.message} required textarea />

                    <div className="mt-2 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <p className="font-numeric text-xs text-ink-faint">
                        Your details are kept strictly confidential.
                      </p>
                      <button
                        type="submit"
                        className="group/btn relative inline-flex h-14 w-full items-center justify-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-9 font-numeric text-base font-semibold text-primary shadow-soft transition-all duration-500 ease-luxe-out hover:-translate-y-0.5 hover:shadow-gold-glow-lg sm:w-auto"
                      >
                        <span
                          aria-hidden
                          className="pointer-events-none absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 ease-luxe-out group-hover/btn:translate-x-[150%]"
                        />
                        <span className="relative z-10">Request a Consultation</span>
                        <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
