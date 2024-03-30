import { PlusCircle } from "phosphor-react";
import styles from './Form.module.css';

export function Form() {
  return(
    <>
      <div className={styles.form}>
        <div>
          <input className={styles.inputTask} type="text" placeholder="Adicione uma nova tarefa" />
        </div>
        <div>
          <button className={styles.buttonCriarTask}>Criar <PlusCircle size={16} /></button>
        </div>
      </div>
    </>
  );
}