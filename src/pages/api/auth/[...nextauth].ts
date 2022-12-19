import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID!,
            clientSecret: process.env.GITHUB_SECRET!
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        }),
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials, req){
                const {email, password} = credentials as {
                    email: string
                    password: string
                }
                if(email === "aguiarmiguel65@gmail.com" && password === "123"){
                    return {
                        id: 1, name: "Miguel Aguiar", email: "aguiarmiguel65@gmail.com"
                    } as any
                } else {
                    return null
                }
                
            }
        })

    ],
    pages: {
        signIn: '/auth/index'
    },
    secret: process.env.JWT_SECRET
}
export default NextAuth(authOptions)



