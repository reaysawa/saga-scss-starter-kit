import React, { useState } from 'react';

export function Component2() {
  const [state, useState] = useState(1)
  return (
    <div>{state}</div>
  )
}

export default Component2

