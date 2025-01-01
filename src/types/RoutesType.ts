export interface RouteConfig {
  path: string;
  Component: React.LazyExoticComponent<React.FC> | React.FC;
  withLayout: boolean;
}