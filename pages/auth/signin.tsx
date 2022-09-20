import type { NextPage } from 'next'
import Signin from '../../components/auth/Signin'

const SignInPage: NextPage = () => {
  return (
    <div className="container px-10 mx-auto">
      <Signin />
    </div>
  )
}

export default SignInPage
