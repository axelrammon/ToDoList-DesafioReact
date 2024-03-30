import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header';
import { Form } from './components/Form';

import './global.css';

function App() {
  return (
    <div className={styles.teste}>
      <Header />
      <Form />
    </div>
  );
}

export default App;
