import Loading from './components/Loading';
import Loadable from 'react-loadable';

export const LoadableLogin = Loadable({
  loader: () =>
    import('./components/pages/Login' /* webpackChunkName: "login" */),
  loading: Loading
});

export const LoadableHome = Loadable({
  loader: () =>
    import('./components/pages/Home' /* webpackChunkName: "home" */),
  loading: Loading
});

export const LoadableAbout = Loadable({
  loader: () =>
    import('./components/pages/About' /* webpackChunkName: "about" */),
  loading: Loading
});

export const LoadableTopics = Loadable({
  loader: () =>
    import('./components/pages/Topics' /* webpackChunkName: "topics" */),
  loading: Loading
});

export const LoadableTopic = Loadable({
  loader: () =>
    import('./components/pages/Topic' /* webpackChunkName: "topics" */),
  loading: Loading
});
