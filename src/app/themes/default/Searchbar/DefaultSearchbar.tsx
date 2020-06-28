import React from 'react';
import { Searchbar, SearchbarProps } from '../../HOCs/Searchbar/Searchbar';
import styles from './DefaultSearchbar.scss';

const DefaultSearchbar = (props: SearchbarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <button className={styles.btn}>
          <i>&lt;</i>
        </button>
      </div>
      <input
        type="text"
        placeholder="Search"
        onInput={(e) => props.onInputValueChange(e.currentTarget.value)}
      />
    </div>
  );
};

DefaultSearchbar.propTypes = { ...Searchbar.propTypes };

export default DefaultSearchbar;
