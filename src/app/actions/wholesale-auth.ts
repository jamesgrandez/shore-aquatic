"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import accountsData from "@/lib/wholesale-accounts.json";
import { setSessionCookie, clearSessionCookie } from "@/lib/wholesale-session";

interface Account {
  username: string;
  passwordHash: string;
  company: string;
  contactName: string;
  email: string;
  active: boolean;
}

export interface LoginFormState {
  error?: string;
  username?: string;  // echo back so we don't blank the field on error
}

export async function loginAction(_prev: LoginFormState, formData: FormData): Promise<LoginFormState> {
  const username = (formData.get("username") as string | null)?.trim().toLowerCase() ?? "";
  const password = (formData.get("password") as string | null) ?? "";

  if (!username || !password) {
    return { error: "Username and password are required.", username };
  }

  const accounts = (accountsData.users as Account[]).filter((a) => a.active);
  const account = accounts.find((a) => a.username.toLowerCase() === username);

  // Constant-time check — always compare bcrypt even if user doesn't exist,
  // to prevent timing attacks revealing valid usernames.
  const dummyHash = "$2b$12$0000000000000000000000000000000000000000000000000000";
  const hashToCheck = account?.passwordHash ?? dummyHash;
  const passwordValid = await bcrypt.compare(password, hashToCheck);

  if (!account || !passwordValid) {
    return { error: "Invalid username or password.", username };
  }

  // Issue session cookie
  await setSessionCookie({
    username: account.username,
    company: account.company,
  });

  redirect("/wholesale/portal");
}

export async function logoutAction() {
  await clearSessionCookie();
  redirect("/wholesale");
}
