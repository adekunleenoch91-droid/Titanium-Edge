"use client";

import * as React from "react";

/**
 * Last-resort boundary for errors thrown in the root layout itself.
 * Replaces the entire document, so styling is inline for reliability.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          textAlign: "center",
          padding: "24px",
        }}
      >
        <div style={{ maxWidth: "28rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 600, margin: 0 }}>
            Something went <span style={{ color: "#D4AF37" }}>wrong</span>
          </h1>
          <p style={{ marginTop: "1rem", color: "#C9CDD3", lineHeight: 1.6 }}>
            We hit an unexpected error. Please try again.
          </p>
          <button
            onClick={reset}
            style={{
              marginTop: "1.75rem",
              cursor: "pointer",
              border: "none",
              borderRadius: "999px",
              padding: "0.85rem 2rem",
              fontWeight: 600,
              color: "#0F172A",
              background: "linear-gradient(135deg,#f6ecc4,#d4af37 45%,#9a751d)",
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
