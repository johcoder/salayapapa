"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function SubscribePage() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Later: send email to backend / database
    console.log("Subscribed email:", email);

    alert("Asante! Umefanikiwa kujiunga 🙏");
    setEmail("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-amber-600/40 bg-white p-8 shadow-lg">
        <h1 className="text-2xl font-bold text-black mb-4 text-center">
          Jiunge Kupokea Taarifa
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Ingiza barua pepe yako ili upokee taarifa mpya, Sala, na matukio.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            required
            placeholder="example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-600"
          />

          <Button
            type="submit"
            className="w-full bg-amber-600 text-white hover:bg-black transition-colors"
          >
            Jiunge Sasa
          </Button>
        </form>
      </div>
    </div>
  );
}
