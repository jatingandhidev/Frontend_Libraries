import { useParams } from 'react-router'

const Param = () => {
  let { param } = useParams()
  return (
    <div>
      <h1>Param</h1>
      {param}
    </div>
  )
}
export default Param
