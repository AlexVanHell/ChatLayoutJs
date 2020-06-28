import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/theme.context';
import styles from './Searchbar.scss';

export interface SearchbarProps {
  onInputValueChange: (value: string) => void;
}

export const Searchbar = (props: SearchbarProps) => {
  const themeContext = useContext(ThemeContext);
  const Component = themeContext.createSearchbar();

  return (
    <div className={styles.container}>
      <Component {...props} />
    </div>
  );
};

Searchbar.propTypes = {
  onInputValueChange: PropTypes.func.isRequired,
};
