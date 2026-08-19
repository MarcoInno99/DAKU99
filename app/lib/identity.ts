const emailToTeam: Record<string, string> = {
  "marcoizzo1999@hotmail.com": "ffi-leonardus",
};

export function teamForEmail(email?: string | null) {
  if (!email) return "ffi-leonardus";
  return emailToTeam[email.trim().toLowerCase()] ?? null;
}
