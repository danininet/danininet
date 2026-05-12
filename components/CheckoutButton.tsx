"use client";

import { useState } from "react";

export function CheckoutButton({
  locale,
  label,
  className
}: {
  locale: string;
  label: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function startCheckout() {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ locale })
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        throw new Error(data.error || "Checkout failed");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Checkout failed");
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={startCheckout}
        disabled={loading}
        className={className || "rounded-full bg-white px-6 py-4 text-sm font-black text-slate-950 hover:bg-slate-100 disabled:opacity-60"}
      >
        {loading ? "..." : label}
      </button>
      {error && (
        <p className="mt-3 max-w-md rounded-2xl bg-red-50 px-4 py-3 text-sm font-bold text-red-900">
          {error}
        </p>
      )}
    </div>
  );
}
