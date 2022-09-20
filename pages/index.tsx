import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { wrapper } from '../redux/store'

const Home: NextPage = () => {

  const [data, setData] = useState <[]>([])

  // useEffect(() => {
  //   fetch("/api/users").then(res => {
  //     return res.json()
  //   }).then(data => {
  //     console.log(data)
  //     setData(data.data)
  //   })

  // }, [])
  return (
    <div className="container px-2 mx-auto">
      {/* {
        data.map((user, index) => {
          return <h1 key={index}>user.email</h1>
        })
     } */}
    </div>
  )
}


// export const getServerSideProps = wrapper.getServerSideProps(store => async context => {
//   console.log(Object.keys(context))
//   console.log("I run on the server")
//   return {
//     props: {

//     }
//   }
// })

export default Home
