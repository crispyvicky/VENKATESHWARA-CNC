import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL as string;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD as string | undefined; // optional plain password
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH as string | undefined; // optional bcrypt hash

if (!ADMIN_EMAIL || (!ADMIN_PASSWORD && !ADMIN_PASSWORD_HASH)) {
  throw new Error("Admin credentials env vars are missing (set ADMIN_EMAIL and ADMIN_PASSWORD or ADMIN_PASSWORD_HASH)");
}

export const authOptions: NextAuthOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      name: "Admin",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        if (credentials.email !== ADMIN_EMAIL) return null;
        let ok = false;
        if (ADMIN_PASSWORD) {
          ok = credentials.password === ADMIN_PASSWORD;
        } else if (ADMIN_PASSWORD_HASH) {
          ok = await bcrypt.compare(credentials.password, ADMIN_PASSWORD_HASH);
        }
        if (!ok) return null;
        return { id: "admin", name: "Admin", email: ADMIN_EMAIL, role: "admin" as const };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = "admin";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
};

export const { auth } = NextAuth(authOptions);


