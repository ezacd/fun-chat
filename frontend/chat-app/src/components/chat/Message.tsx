import styles from '../../styles/chat/Message.module.css';
import SingleCheck from '../../assets/icons/singleCheck.svg';

export default function Message() {
  return (
    <div className={styles.message}>
      <p className={styles.messegeSender}>User</p>
      <div className={styles.messageBox}>
        <p className={styles.messegeText}>message text</p>
        <div className={styles.messageInfo}>
          <SingleCheck />
          <MessageTime />
        </div>
      </div>
    </div>
  );
}

function MessageTime() {
  const date = new Date();
  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className={styles.messageDate}>
      {`${pad(date.getHours())}:${pad(date.getMinutes())}`}
    </div>
  );
}
