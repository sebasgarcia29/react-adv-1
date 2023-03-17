import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface InterfaceRoutes {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

// const lazy1 = lazy(() => import(/* webpackChunkName: "lazy1"*/ '../01-lazyload/pages/LazyPage1'));
const LazyLayout = lazy(() => import(/* webpackChunkName: "lazyLayout"*/ '../01-lazyload/layout/LazyLayout'));

export const routes: InterfaceRoutes[] = [
    {
        path: 'lazyload/*',
        to: '/lazyload/',
        component: LazyLayout,
        name: 'LazyLayout - Dash',
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        component: NoLazy,
        name: 'no-lazy',
    },

];