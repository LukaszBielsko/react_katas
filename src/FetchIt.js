import { useEffect } from "react"

const FetchIt = () => {

  useEffect(() => {
    const abortController = new AbortController()
    const { signal } = abortController

    const users = fetch('https://jsonplaceholder.typicode.com/users', {
      signal
    })

    return () => {
      abortController.abort()
    }
  }, [])


  const handleMultiParallel = () => {
    const users = fetch('https://jsonplaceholder.typicode.com/users')
    const posts = fetch('https://jsonplaceholder.typicode.com/posts')

    Promise.all([users, posts])
      .then((values) => {
        values.map(async (value) => {
          console.log('==>>', await value.json())
        })
      })
  }

  const handleMulti = async () => {
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
    const usersJson = await users.json()
    const firstUserId = usersJson[0].id
    const firstUserPostsRequest = await fetch(`https://jsonplaceholder.typicode.com/users/${firstUserId}/posts`)
    const firstUserPosts = await firstUserPostsRequest.json()
    console.log('==>>', 'firstUserPosts', '==>>', firstUserPosts)
  }


  return (
    <section>
      <button onClick={handleMultiParallel}> multi parallel request</button>
      <button onClick={handleMulti}> multi request</button>
    </section>
  )
}

export default FetchIt 
