import Worm from '../Worm';
import styles from './styles.scss';

export default class App {
  constructor({ x, y, z }) {
    this.el = document.createElement('div');
    this.el.className = styles.root;
    this.el.innerHTML = `
      ${new Worm().el.outerHTML}
      <pre>${JSON.stringify({ x, y, z })}</pre>
      <h1>astro-aunty-test</h1>
    `;
  }
}
