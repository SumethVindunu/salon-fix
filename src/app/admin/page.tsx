"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Scissors, ShieldCheck, ArrowLeft } from "lucide-react";

const ADMIN_PIN = "00000";

export default function AdminLoginPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ADMIN_PIN) {
      sessionStorage.setItem("salon-fix-admin", "authenticated");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid PIN. Please try again.");
      setPin("");
    }
  };

  return (
    <main className="min-h-screen bg-stone-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-stone-600 hover:text-amber-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to website
        </Link>

        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <div className="mx-auto w-14 h-14 bg-amber-600 rounded-2xl flex items-center justify-center mb-2">
              <Scissors className="w-7 h-7 text-white" />
            </div>
            <CardTitle className="text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
              Admin Panel
            </CardTitle>
            <CardDescription className="flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4" />
              Enter the admin PIN to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="password"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={5}
                placeholder="Enter 5-digit PIN"
                value={pin}
                onChange={(e) => {
                  setPin(e.target.value.replace(/\D/g, ""));
                  setError("");
                }}
                className="h-12 text-center text-2xl tracking-[0.5em]"
                autoFocus
              />
              {error && (
                <p className="text-sm text-red-600 text-center">{error}</p>
              )}
              <Button type="submit" size="lg" className="w-full rounded-full">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
