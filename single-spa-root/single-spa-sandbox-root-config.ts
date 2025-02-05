import { registerApplication, start } from 'single-spa';

registerApplication({
  name: '@single-spa-sandbox/react-app',
  app: () => System.import('@single-spa-sandbox/react-app'),
  activeWhen: ['/react'],
});

start();
