import { ClipboardText } from 'phosphor-react';
import styles from './Tarefas.module.css';

export function Tarefas() {
  return(
    <div className={styles.tarefas}>
      <div className={styles.info}>
        <span className={styles.tarefasCriadas}>Tarefas criadas <span className={styles.contadorDeTarefas}>0</span></span>
        <span className={styles.tarefasConcluidas}>Concluídas <span className={styles.contadorDeTarefas}>0</span></span>
      </div>
      
      <div className={styles.tarefasVazias}>
        <ClipboardText size={56} />
        <span >
          <b>Você ainda não tem tarefas cadastradas</b> 
        </span>
        <span>
          Crie tarefas e organize seus itens a fazer
        </span>
      </div>
    </div>
  );
}