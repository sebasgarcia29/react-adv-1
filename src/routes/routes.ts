import { lazy, LazyExoticComponent } from 'react';
// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

interface InterfaceRoutes {
    to: string;
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const lazy1 = lazy(() => import(/* webpackChunkName: "lazy1"*/ '../01-lazyload/pages/LazyPage1'));
const lazy2 = lazy(() => import(/* webpackChunkName: "lazy2"*/'../01-lazyload/pages/LazyPage2'));
const lazy3 = lazy(() => import(/* webpackChunkName: "lazy3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: InterfaceRoutes[] = [
    {
        to: '/lazy1',
        path: 'lazy1',
        component: lazy1,
        name: 'LazyPage1',
    },
    {
        to: '/lazy2',
        path: 'lazy2',
        component: lazy2,
        name: 'LazyPage2',
    },
    {
        to: '/lazy3',
        path: 'lazy3',
        component: lazy3,
        name: 'LazyPage3',
    }
];