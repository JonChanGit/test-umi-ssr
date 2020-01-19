import React from 'react';
import styles from './index.css';
import { List } from 'antd-mobile';

const Item = List.Item;

export default function() {
  const list = [
    'one', 'tow', 'three'
  ]
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
      </ul>
      <List renderHeader={() => 'Basic Style'} className="my-list">
        <Item extra={'extra content'}>Title</Item>
        {
          list.map(item => <Item extra={'extra content'}>{item}</Item>)
        }
      </List>
    </div>
  );
}
