import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { postSignIn, reset } from '../../redux/features/auth'

const Signin = () => {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<object | null>(null)

    const dispatch = useDispatch()
    const router = useRouter()


    const handleSubmit = async () => {
        if (!email && !password) {
            return console.log("enter your email and password")
        }

        const body = {
            email,
            password
        }

        setLoading(true)
        dispatch(postSignIn(body)).then((res: any) => {
            console.log(res)
            setEmail("")
            setPassword("")
            setLoading(false)
            dispatch(reset())
            if (res.error) {
                setError(res.payload.errors)
            } else {
                setError(null)
                router.push("/")
            }

        })

       


    }


  return (
      <div className='grid grid-cols-2 gap-10 mt-10 items-center '>
          <div className='pr-20 !py-20  w-full h-full flex flex-col justify-between'>
              <h1 className='text-3xl font-semibold uppercase leading-10 tracking-wider pr-20  '>
                  Sign In to continue buying and selling tickets to upcoming events
              </h1>
              <div className='flex items-center space-x-5 '>
                  <h2 className='text-lg '>Don't have an account?</h2>
                  <Link href="/auth/signup">
                      <a className='
                     bg-yellow-500 px-4 py-1 border-2 text-white font-medium rounded-full border-yellow-500
                    hover:scale-105 transition-all ease-in duration-150'>
                          Register
                      </a>
                  </Link>
              </div>
          </div>
          <div className='bg-white w-full h-[500px] rounded-md px-5 py-8 '>
              <h1 className='text-2xl uppercase font-semibold text-center text-[#1F2A37]'>Sign in</h1>
              <form className='text-[#1F2A37] space-y-8 mt-10'>
                  <div className='flex flex-col space-y-5 '>
                      <label
                          className='text-sm uppercase '
                          htmlFor="email">Email Address</label>
                      <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={(e) => {
                              setEmail(e.target.value)
                          }}
                          className='w-full h-10 px-3 rounded-md text-[#1F2A37]  border border-[#1F2A37]/60 focus:outline-none'
                          placeholder='Enter Email Address'
                      />
                  </div>
                  <div className='flex flex-col space-y-5 '>
                      <label
                          className='text-sm uppercase'
                          htmlFor="password">Password</label>
                      <input
                          type="password"
                          name="password"
                          value={password}
                          onChange={(e) => {
                              setPassword(e.target.value)
                          }}
                          className='w-full h-10 px-3 rounded-md text-[#1F2A37]  border border-[#1F2A37]/50 focus:outline-none'
                          placeholder='Enter Password'
                      />
                  </div>
                  <h1
                      onClick={handleSubmit}
                      className='text-center shadow-lg hover:cursor-pointer hover:shadow-xl uppercase font-medium bg-[#623027] py-1 px-5 text-white rounded-md !mt-20'>
                      {
                          loading ? "loading" : "submit"
                      }
                  </h1>
              </form>
          </div>
      </div>
  )
}

export default Signin