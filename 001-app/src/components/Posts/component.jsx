import { useEffect, useState } from 'react';
import Post from './Post/component'

const Posts = () => {
  const [limit, setLimit] = useState(5)
  const [posts, setPosts] = useState([])
  const fetchPosts = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
    const data = await response.json()

    setPosts(data)
  }

  const handleLoadMore = () => {
    setLimit(limit + 5)
    fetchPosts()
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <div className="container mt-5">
      {posts.map(post => <Post key={post.id} post={post} />)}

      <button className="btn btn-primary" onClick={handleLoadMore}>Load More +5</button>
    </div>
  );
}

export default Posts;
