import styles from '../../styles/chat/Message.module.css';
import SingleCheck from '../../assets/icons/singleCheck.svg';
import { useEffect, useRef, useState } from 'react';
import DeleteSvgButton from '../../assets/icons/delete.svg';
import ChangeSvgButton from '../../assets/icons/change.svg';

type Props = {
  text: string;
};

export default function Message({ text }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(true);
  };

  useEffect(() => {
    const onClick = () => setMenuOpen(false);
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <div className={styles.message} onContextMenu={handleContextMenu}>
      <p className={styles.messegeSender}>User</p>
      <div className={styles.messageBox}>
        <p className={styles.messegeText}>{text}</p>
        <div className={styles.messageInfo}>
          <SingleCheck />
          <MessageTime />
        </div>
      </div>
      <ul className={`${styles.contextMenu} ${menuOpen ? styles.open : ''}`}>
        <li
          onClick={() => {
            // onEdit();
            // onClick();
          }}
        >
          <button type="button" className={styles.messageDeleteButton}>
            <DeleteSvgButton className={styles.deleteButton} />
          </button>
        </li>
        <li
          onClick={() => {
            // onDelete();
            // onClick();
          }}
        >
          <button type="button" className={styles.messageChangeButton}>
            <ChangeSvgButton className={styles.changeButton} />
          </button>
        </li>
      </ul>
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
