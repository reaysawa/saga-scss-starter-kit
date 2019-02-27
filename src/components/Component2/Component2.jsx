import React, { useState } from 'react';
import styles from './styles'

export function Component2() {
  const [state, useState] = useState(1)
  return (
    <div className={`${styles['component2']}`}>{state}</div>
  )
}

export default Component2

