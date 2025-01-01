import { lazy } from 'react';
import { RouteConfig } from './types/RoutesType';

const DownloadPage = lazy(() => import("./pages/Download/Download"));
const PrivacyPage = lazy(() => import("./pages/Privacy/Page"));
const Page = lazy(() => import("./pages/Main/Page"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));

 export const routes: RouteConfig[] = [
    {
      path: '/',
      Component: Page,
      withLayout: true,
    },
    {
      path: '/privacy',
      Component: PrivacyPage,
      withLayout: true,
    },
    {
      path: '/download',
      Component: DownloadPage,
      withLayout: false,
    },
    {
      path: '*',
      Component: NotFoundPage,
      withLayout: false,
    },
  ];

