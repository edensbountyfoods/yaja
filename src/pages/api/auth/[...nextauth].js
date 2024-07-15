import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (
          email === process.env.NEXT_PUBLIC_P &&
          password === process.env.NEXT_PUBLIC_Q
          //   user.email === "karthik@skbeautyverse.com" &&
          //   user.password === "123"
        ) {
          return true;
        }
        return null;
      },
    }),
  ],
  //   secret: process.env.NEXTAUTH_SECRET,
  secret: "aepijfaie39rui3rqi",
};

export default NextAuth(authOptions);
