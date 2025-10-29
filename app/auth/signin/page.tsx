"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const callbackUrl = "/admin";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await signIn("credentials", { redirect: false, callbackUrl, email, password });
      if (res?.error) {
        setError("Invalid credentials");
        return;
      }
      const url = res?.url || callbackUrl;
      router.replace(url);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-display font-bold text-walnut mb-6 text-center">Admin Sign In</h1>
        <form onSubmit={handleSubmit} className="space-y-4 bg-card p-6 rounded-xl border">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm mb-2">Password</label>
            <Input type="password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
          </div>
          {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" variant="golden" disabled={loading} className="w-full">{loading ? "Signing in..." : "Sign In"}</Button>
        </form>
      </div>
    </div>
  );
}


