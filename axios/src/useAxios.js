import axios from 'axios'
import { useState } from 'react'

const useAxios = (url) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  axios
    .get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  return { data, loading }
}
export default useAxios
