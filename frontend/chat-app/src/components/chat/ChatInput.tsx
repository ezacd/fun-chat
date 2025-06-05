'use client';

import { useState, FormEvent } from 'react';
import styles from '../../styles/chat/ChatInput.module.css';
import Clip from '../../assets/icons/clip.svg';
import Emoji from '../../assets/icons/emoji.svg';
import Send from '../../assets/icons/send.svg';

export default function ChatInput() {
  const [text, setText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    console.log('Отправляем сообщение:', text);
    setText('');
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <button type="button" className={styles.iconButton} aria-label="Add file">
        <Clip className={styles.clip} />
      </button>

      {/* Поле ввода */}
      <input
        type="text"
        className={styles.inputField}
        placeholder="Message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        type="button"
        className={styles.iconButton}
        aria-label="Сhoose emoji"
      >
        <Emoji className={styles.emoji} />
      </button>

      <button
        type="submit"
        className={styles.iconButton}
        aria-label={
          text.trim() ? 'Отправить сообщение' : 'Записать голосовое сообщение'
        }
      >
        <Send className={styles.send} />
      </button>
    </form>
  );
}
