import styles from '../styles/Chat.module.css';
import ChatInput from './chat/ChatInput';
import Message from './chat/Message';

export default function Chat() {
  return (
    <section className={styles.chatSection}>
      <section className={styles.correspondence}>
        <Message />
        <Message />
        <Message />
      </section>
      <ChatInput />
    </section>
  );
}
