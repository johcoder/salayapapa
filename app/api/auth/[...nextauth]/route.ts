import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Admin Login",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // TEMP admin (we will move to DB later)
        if (
          credentials?.email === "admin@waraka.com" &&
          credentials?.password === "admin123"
        ) {
          return {
            id: "1",
            name: "Admin",
            email: "admin@waraka.com",
            role: "admin",
          }
        }

        return null
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role
      }
      return token
    },

    async session({ session, token }) {
      if (session.user) {
        ;(session.user as any).role = token.role
      }
      return session
    },
  },

  pages: {
    signIn: "/login",
  },
})

export { handler as GET, handler as POST }


