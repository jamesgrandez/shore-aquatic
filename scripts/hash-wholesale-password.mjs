#!/usr/bin/env node
/**
 * Hash a wholesale account password.
 *
 * Usage:
 *   node scripts/hash-wholesale-password.mjs <password>
 *
 * Copy the output hash into src/lib/wholesale-accounts.json.
 */
import bcrypt from 'bcryptjs';

const pw = process.argv[2];
if (!pw) {
  console.error('Usage: node scripts/hash-wholesale-password.mjs <password>');
  process.exit(1);
}

// Cost factor 12 — strong, ~250ms hash time
const hash = await bcrypt.hash(pw, 12);
console.log(hash);
