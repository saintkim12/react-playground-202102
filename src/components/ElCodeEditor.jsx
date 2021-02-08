import React, { useContext, useEffect } from 'react'
import Context from '../context'

const El = () => {
  // const [text, setText] = useState('test')
  const { value, setValue } = useContext(Context)
  useEffect(() => {
    const initValue = () => Promise.resolve(value).then(setValue)
    initValue()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <textarea value={ value } onChange={({ target: { value } }) => setValue(value)}></textarea>
  )
}
export default El
