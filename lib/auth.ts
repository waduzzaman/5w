import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

// Authorized emails - only these emails can access the dashboard
const AUTHORIZED_EMAILS = [
  "info@5wcommunications.com",
  // Add more authorized emails here
]

// Extend the session user type to include isAuthorized
declare module "next-auth" {
  interface Session {
    user: {
      id: string
      isAuthorized?: boolean
    }
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    authorization: {
      params: {
        prompt: "consent",
        access_type: "offline",
        response_type: "code"
      }
    }
  })],
  callbacks: {
    async signIn({ profile }) {
      // Allow sign in for all Google users
      // Dashboard access will be restricted in the dashboard layout
      return true
    },
    async session({ session, token }) {
      // Add custom properties to the session
      if (session?.user && token.sub) {
        session.user.id = token.sub
      }
      // Check if user is authorized
      if (session?.user?.email) {
        session.user.isAuthorized = AUTHORIZED_EMAILS.includes(session.user.email.toLowerCase())
      }
      return session
    },
    async jwt({ token, user }) {
      // Add user id to token
      if (user) {
        token.sub = user.id
      }
      return token
    },
  },
  pages: {
    signIn: "/api/auth/signin",
    error: "/api/auth/signin",
  },
  session: {
    strategy: "jwt",
  },
})
