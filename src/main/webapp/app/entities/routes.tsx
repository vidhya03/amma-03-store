import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import Customer from './customer';
import Invoice from './invoice/invoice';
import OrderItem from './product/order-item';
import Product from './product/product';
import ProductCategory from './product/product-category';
import ProductOrder from './product/product-order';
import Shipment from './invoice/shipment';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('store', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="customer/*" element={<Customer />} />
        <Route path="invoice/*" element={<Invoice />} />
        <Route path="order-item/*" element={<OrderItem />} />
        <Route path="product/*" element={<Product />} />
        <Route path="product-category/*" element={<ProductCategory />} />
        <Route path="product-order/*" element={<ProductOrder />} />
        <Route path="shipment/*" element={<Shipment />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
