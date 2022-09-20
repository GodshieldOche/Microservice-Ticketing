import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { postSignOut } from '../../redux/features/auth';



type props = {
    user: {
        id: string;
        email: string;
        iat: number;
    } | null
}


const Header: React.FC<props> = ({ user }) => {

    const router = useRouter()
    const dispatch = useDispatch()

    const handleSigOut = () => {
        dispatch(postSignOut()).then((res: any) => {
            router.push("/")
        })
    }


  return (
      <div className="w-full h-[70px] flex items-center shadow-sm shadow-gray-600 bg-[#1F2A37] text-white">
          <div className='container px-10 mx-auto flex items-center justify-between'>
              <h1
                  onClick={() => {
                      router.push('/')
                  }}
                  className='text-xl font-medium uppercase cursor-pointer '>
                  Ticketing<span className='text-sm text-yellow-500 lowercase'>.dev</span>
              </h1>
              <div className="flex items-center justify-between space-x-7">
                  <Link href="">
                      <a className='text-[#C4CAC6] '>Buy Tickets</a>
                  </Link>
                  {
                      !user ? 
                          <Link href="/auth/signup">
                              <a className='
                                bg-transparent px-4 py-1 border-2 text-[#C4CAC6] rounded-full border-yellow-500
                                hover:bg-yellow-500 hover:text-white transition-all ease-in duration-150'>
                                  Register/Login
                              </a>
                          </Link>
                          :
                          <div className='flex flex-col justify-center items-center cursor-pointer'>
                              <BsPersonCircle onClick={handleSigOut} className='text-4xl text-mainWhite ' />
                              <h1 className='text-xs'>{user.email}</h1>
                          </div>
                  }
                  
              </div>
          </div>
      </div>
  )
}

export default Header