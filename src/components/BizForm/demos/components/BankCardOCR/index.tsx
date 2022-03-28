import * as React from 'react';
import IconScanCard from './icon-scan-card@3x.png';
import styles from './index.module.less';

interface BankCardOCRProps {
  onChange?: (file: File) => void;
}

const BankCardOCR: React.FC<BankCardOCRProps> = ({ onChange }) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    onChange?.(e.target.files![0]);
  };

  return (
    <div className={styles.ocr} onClick={handleClick}>
      <input
        type="file"
        accept="image/*"
        // capture="environment"
        onChange={handleChange}
        ref={inputRef}
      />
      <span className={styles.icon}>
        <img src={IconScanCard} alt="" />
      </span>
    </div>
  );
};

export default BankCardOCR;
