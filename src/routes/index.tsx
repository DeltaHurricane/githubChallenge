import React, { FunctionComponent, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from '../components';
import Search from './Search';

const History = lazy(() => import('./History'));

const Router: FunctionComponent = () => (
  <Routes>
    <Route path="/" element={<Search />} />
    <Route
      path="history"
      element={
        <Suspense fallback={<Loader type='bars' color='black'/>}>
          <History />
        </Suspense>
      }
    />
  </Routes>
);

export default Router;
