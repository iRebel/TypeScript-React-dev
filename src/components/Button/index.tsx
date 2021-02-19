
import { FC } from 'react'

interface Props {
  onClick?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const Button: FC<Props> = (props) => {
  const { onClick, children } = props
  return (<button className="btn-wrap" onClick={onClick}>{children}</button>)
}

export default Button
