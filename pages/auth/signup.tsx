import type { NextPage } from 'next'
import Signup from '../../components/auth/Signup'

const SignUpPage: NextPage = () => {
    return (
        <div className="container px-10 mx-auto">
            <Signup />
        </div>
    )
}

export default SignUpPage
