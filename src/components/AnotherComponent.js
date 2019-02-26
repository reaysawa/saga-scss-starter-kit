import React, { useState } from 'react'

export function ComponentOne() {
  const [numb, setNumb] = useState(2)
  return (
    <button onClick={() => setNumb(6)}>{numb}</button>
  )
}
export function ComponentTwo() {
  const [numb, setNumb] = useState(1)
  return (
    <button onClick={() => setNumb(6)}>{numb}</button>
  )
}
