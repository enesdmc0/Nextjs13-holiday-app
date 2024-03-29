import NextAuth, {AuthOptions} from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter";
import prisma from "@/libs/prismadb";
import GoogleProvider from  "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions : AuthOptions = {
    adapter: PrismaAdapter(prisma) as any,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("You entered incomplete information")
                }

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                if (!user || !user.hashedPassword){
                    throw new Error("User not found!")
                }

                const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword)

                if (!comparePassword) {
                    throw new Error("Invalid password")
                }
                return user
            }
        })
    ],
    pages: {
        signIn: "/"
    },
    session: {
        strategy: "jwt"
    },
    debug: process.env.NODE_ENV === "development",
    secret: process.env.NEXTAUTH_URL
}

export default NextAuth(authOptions)