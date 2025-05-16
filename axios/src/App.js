import './App.css'
import useAxios from './useAxios'

function App() {
  const { data, loading } = useAxios(
    'https://jsonplaceholder.typicode.com/posts'
  )

  return (
    <div>
      <h1>Post</h1>
      {loading
        ? 'Loading... '
        : data.map((post) => <p key={post.id}>{post?.title}</p>)}
    </div>
  )
}

export default App
