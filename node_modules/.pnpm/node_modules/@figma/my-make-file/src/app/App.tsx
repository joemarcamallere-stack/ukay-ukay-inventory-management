import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';

export default function App() {
  useEffect(() => {
    const emptyDataVersion = "empty-test-v2";
    const dataKeys = [
      "inventory.products",
      "purchaseOrders.orders",
      "purchaseOrders.suppliers",
      "purchaseOrders.globalProducts",
      "goodsReceived.records",
      "pos.orders",
      "inventory.movements",
      "dashboard.pendingOrders",
      "recipes.records",
      "transfers.records",
      "transfers.adjustments",
      "transfers.wasteLogs",
      "users.records",
    ];

    if (localStorage.getItem("cocoders.dataVersion") !== emptyDataVersion) {
      dataKeys.forEach((key) => localStorage.setItem(key, "[]"));
      localStorage.setItem("cocoders.dataVersion", emptyDataVersion);
    }

    dataKeys.forEach((key) => {
      if (localStorage.getItem(key) === null) {
        localStorage.setItem(key, "[]");
      }
    });
  }, []);

  return <RouterProvider router={router} />;
}