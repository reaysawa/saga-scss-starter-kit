import React from 'react';

import styles from './styles';

function HelloReact(props) {
  return (
    <div className={`${styles['title']}`}>Hello {props.name}</div>
  );
}

export default HelloReact
