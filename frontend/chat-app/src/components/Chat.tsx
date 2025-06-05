import styles from '../styles/Chat.module.css';
import ChatInput from './chat/ChatInput';

export default function Chat() {
  return (
    <section className={styles.chatSection}>
      <ChatInput />
    </section>
  );
}
