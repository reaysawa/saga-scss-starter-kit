import React, { useState } from 'react';

import * as styles from './styles';

function HelloReact() {
  const [message, setMessage] = useState('Nathan')
  return (
    <div className={styles['title']}>Hello {message}</div>
  );
}

export default HelloReact
