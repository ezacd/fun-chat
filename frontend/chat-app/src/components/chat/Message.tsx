import styles from '../../styles/chat/Message.module.css';
import SingleCheck from '../../assets/icons/singleCheck.svg';
import { useEffect, useRef, useState } from 'react';
import DeleteSvgButton from '../../assets/icons/delete.svg';
import ChangeSvgButton from '../../assets/icons/change.svg';

type Props = {
  text: string;
};

export default function Message({ text }: Props) {
  const [menuPos, setMenuPos] = useState<{ x: number; y: number } | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuPos({ x: e.clientX, y: e.clientY });
  };

  const handleClick = () => {
    if (menuPos) setMenuPos(null);
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setMenuPos(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuPos]);

  return (
    <div
      className={styles.message}
      onContextMenu={handleContextMenu}
      onClick={handleClick}
    >
      <p className={styles.messegeSender}>User</p>
      <div className={styles.messageBox}>
        <p className={styles.messegeText}>{text}</p>
        <div className={styles.messageInfo}>
          <SingleCheck />
          <MessageTime />
        </div>
      </div>
      {menuPos && (
        <ul className={styles.contextMenu}>
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
      )}
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
