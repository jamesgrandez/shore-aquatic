import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";

const SECRET = process.env.SESSION_SECRET;
if (!SECRET) {
  throw new Error("SESSION_SECRET env var not set. Add it to .env.local and Vercel env.");
}
const encodedKey = new TextEncoder().encode(SECRET);

const COOKIE_NAME = "shore_wholesale_session";
const SESSION_DAYS = 7;

export interface WholesaleSession {
  username: string;
  company: string;
  expiresAt: number;  // unix seconds
}

export async function encryptSession(payload: WholesaleSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_DAYS}d`)
    .sign(encodedKey);
}

export async function decryptSession(token: string | undefined): Promise<WholesaleSession | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, encodedKey, { algorithms: ["HS256"] });
    return {
      username: payload.username as string,
      company: payload.company as string,
      expiresAt: payload.expiresAt as number,
    };
  } catch {
    return null;
  }
}

export async function setSessionCookie(payload: Omit<WholesaleSession, "expiresAt">) {
  const expiresAt = Math.floor(Date.now() / 1000) + SESSION_DAYS * 24 * 60 * 60;
  const token = await encryptSession({ ...payload, expiresAt });
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    expires: new Date(expiresAt * 1000),
  });
}

export async function clearSessionCookie() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getCurrentSession(): Promise<WholesaleSession | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  return decryptSession(token);
}
