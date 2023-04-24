import React, { useEffect } from "react";
import styles from "./styles.module.scss";

const ReactComponent = props => {
  useEffect(() => {
    const x: string = "Hello World!";
    console.log("React component loaded:", x);
  }, []);

  return <div className={styles.root}>This is a React component</div>;
};

export default ReactComponent;
