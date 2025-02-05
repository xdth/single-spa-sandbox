import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
      /* webpackIgnore: true */ // @ts-ignore-next
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
    activeWhen: (location) => location.pathname === '/',
});

// registerApplication({
//   name: "@single-spa-sandbox/navbar",
//   app: () =>
//     import(
//       /* webpackIgnore: true */ // @ts-ignore-next
//       "@single-spa-sandbox/navbar"
//     ),
//   activeWhen: ["/"],
// });

console.log("Registering React microfrontend...");

// registerApplication<{}>({
//   name: '@single-spa-sandbox/react-app',
//   app: () => {
//     console.log("Attempting to load React microfrontend...");
//     return System.import<LifeCycles>('@single-spa-sandbox/react-app');
//   },
//   activeWhen: (location) => location.pathname.startsWith('/react'),
// });

registerApplication<{}>({
  name: '@single-spa-sandbox/react-app',
  app: () => {
    console.log("Attempting to load React microfrontend...");
    return System.import<LifeCycles>('@single-spa-sandbox/react-app');
  },
  activeWhen: ['/'],  // Load React at the root
});


start({
  urlRerouteOnly: true,
});
