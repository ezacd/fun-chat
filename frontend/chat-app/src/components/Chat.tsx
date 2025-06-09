import styles from '../styles/Chat.module.css';
import ChatInput from './chat/ChatInput';
import Message from './chat/Message';

export default function Chat() {
  return (
    <section className={styles.chatSection}>
      <section className={styles.correspondence}>
        <Message text="1" />
        <Message text="2" />
        <Message text="3" />
      </section>
      <ChatInput />
    </section>
  );
}
