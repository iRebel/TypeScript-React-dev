
import { FC, useState } from 'react'
import { Button } from 'src/components'

/* FC React.FunctionComponent 函数组件 */
const HomePage: FC = () => {
  const [val, setVal] = useState<number>(0)

  const handleBtnClick = () => {
    setVal(val + 1)
  }

  return (<div className="home-page-wrap">
    <Button onClick={handleBtnClick} >{val}</Button>
  </div>)
}

export default HomePage
