"use client";

import { useActionState } from "react";
import { loginAction, type LoginFormState } from "@/app/actions/wholesale-auth";

const initialState: LoginFormState = {};

export default function WholesaleLoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, initialState);

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-1.5">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          autoComplete="username"
          required
          defaultValue={state.username ?? ""}
          className="w-full rounded-lg border border-white/10 bg-ocean-900/50 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-aqua-400/40 focus:outline-none focus:ring-2 focus:ring-aqua-400/20"
          placeholder="your-username"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-slate-400 mb-1.5">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-lg border border-white/10 bg-ocean-900/50 px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:border-aqua-400/40 focus:outline-none focus:ring-2 focus:ring-aqua-400/20"
          placeholder="••••••••"
        />
      </div>

      {state.error && (
        <div className="rounded-lg border border-red-500/30 bg-red-950/30 px-4 py-2.5 text-xs text-red-300">
          {state.error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-aqua-400 px-4 py-2.5 text-sm font-bold uppercase tracking-wide text-ocean-950 shadow-lg shadow-aqua-400/20 transition-all hover:bg-aqua-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {pending ? "Signing in…" : "Sign In"}
      </button>
    </form>
  );
}
