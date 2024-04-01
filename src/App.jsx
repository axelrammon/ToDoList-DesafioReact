import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header';
import { Form } from './components/Form';

import './global.css';
import { Tarefas } from './components/Tarefas';

function App() {
  return (
    <div className={styles.teste}>
      <Header />
      <Form />
      <Tarefas/>
    </div>
  );
}

export default App;
