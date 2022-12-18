import { GetServerSideProps } from "next"
import { signOut, useSession, getSession } from "next-auth/react"


export default function Home( ){
    const {data: session} = useSession()
    if(session){
        return (
            <div>
                {session.user?.image && (
                    <img src={session.user.image} alt="" />
                )}
                <p>Hello {session?.user?.name}, this is your Home page...</p>   
                <button onClick={() => signOut()}>Sair</button>
            </div>
        )
    }
}

export const getServerSideProps: GetServerSideProps =async ({req}) => {
    const session = await getSession({req})
    if (!session) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      }
    }
    return {
      props: {

      }
    }
  }