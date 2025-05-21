import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SellerList from './SellerList';
import SellerDetails from './SellerDetails';
import SellerAnalytics from './SellerAnalytics';

export default function SellerManagement() {
  return (
    <Routes>
      <Route index element={<SellerList />} />
      <Route path=":id" element={<SellerDetails />} />
      <Route path=":id/analytics" element={<SellerAnalytics />} />
    </Routes>
  );
}