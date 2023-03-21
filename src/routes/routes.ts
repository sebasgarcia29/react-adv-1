import { lazy } from 'react'
import LazyLayout from '../01-lazyload/layout/LazyLayout';
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";
import { NoLazy } from '../01-lazyload/pages';

type JSXElement = () => JSX.Element;

interface IRoutes {
    path: string;
    component: React.LazyExoticComponent<JSXElement> | JSXElement;
    name: string;
    children?: IRoutes[];
}

// const LazyPage1 = lazy(() => import(/* webpackChunkName: "LazyPage1"*/'../01-lazyload/pages/LazyPage1'));
// const LazyPage2 = lazy(() => import(/* webpackChunkName: "LazyPage2"*/'../01-lazyload/pages/LazyPage2'));
// const LazyPage3 = lazy(() => import(/* webpackChunkName: "LazyPage3"*/'../01-lazyload/pages/LazyPage3'));

export const routes: IRoutes[] = [
    {
        path: '/lazyload',
        component: lazy(() => import(/* webpackChunkName: "lazy1load"*/'../01-lazyload/layout/LazyLayout')),
        name: 'Lazy Loading Nested',
    },
    {
        path: '/no-lazy',
        component: NoLazy,
        name: 'No Lazy load'
    },
    // {
    //     path: '/lazy2',
    //     component: LazyPage2,
    //     name: 'LazyPage2'
    // },
    // {
    //     path: '/lazy3',
    //     component: LazyPage3,
    //     name: 'LazyPage3'
    // },
]