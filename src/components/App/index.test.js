import App from './index';

test('it renders', () => {
  const props = { x: 42, y: 'text', z: true };
  const component = new App(props);

  expect(component.el.innerHTML).toContain(JSON.stringify(props));
});
