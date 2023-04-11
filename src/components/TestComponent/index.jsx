import React from 'react';
import styles from './styles.module.scss';

// Use JSDoc to type this component
// https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html
/**
 * @typedef Props
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 *
 * @param {Props} props
 */
const TestComponent = () => {
  return (
    <div className={styles.root}>
      Find me in <strong>src/components/TestComponent</strong>
    </div>
  );
}

export default TestComponent;
