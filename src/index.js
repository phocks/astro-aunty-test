import acto from '@abcnews/alternating-case-to-object';
import { whenDOMReady } from '@abcnews/env-utils';
import { getMountValue, selectMounts } from '@abcnews/mount-utils';
import App from './components/App';

let appMountEl;
let appProps;

function renderApp() {
  render(new App(appProps).el, appMountEl);
}

whenDOMReady.then(() => {
  [appMountEl] = selectMounts('astroauntytest');

  if (appMountEl) {
    appProps = acto(getMountValue(appMountEl));
    renderApp();
  }
});

if (module.hot) {
  module.hot.accept('./components/App', () => {
    try {
      renderApp();
    } catch (err) {
      import('./components/ErrorBox').then(({ default: ErrorBox }) => {
        render(new ErrorBox({ error: err }).el, appMountEl);
      });
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  console.debug(`[astro-aunty-test] public path: ${__webpack_public_path__}`);
}

function render(el, parentEl) {
  if (parentEl === null) {
    throw new Error('parentEl is not an Element');
  }

  while (parentEl.firstElementChild) {
    parentEl.removeChild(parentEl.firstElementChild);
  }

  parentEl.appendChild(el);
}
