import { GetServerSideProps } from "next"
import { signOut, useSession, getSession } from "next-auth/react"
import Navbar from "../../components/Navbar"
import {TbDoorExit} from "react-icons/tb"


export default function Home( ){
    const {data: session} = useSession()
    
    if(session){
        return (
            <div>
                {session.user?.image && session.user.name &&(
                  <Navbar imagem={session.user.image} name={session.user.name}/>
                )}   
                <button type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 m-2" onClick={() => signOut()}>
                  <TbDoorExit size={20}/>
                  Sair
                </button>
            </div>
        )
    }
}

export const getServerSideProps: GetServerSideProps =async ({req}) => {
    const session = await getSession({req})
    if (!session) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      }
    }
    return {
      props: {

      }
    }
  }