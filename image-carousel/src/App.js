import {UseState} from 'react'

function Button () {
  function handleClick() {
    alert('you have clicked me!')
  }
  return (
    <button onClick={handleClick}>Click me!</button>
  )
}

export default function Myapp() {
  return (
    <Button />
  )
}
