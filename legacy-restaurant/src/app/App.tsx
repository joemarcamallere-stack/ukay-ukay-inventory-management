import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import { seedDatabase } from './utils/seedDatabase';

export default function App() {
  useEffect(() => {
    const currentVersion = localStorage.getItem("cocoders.dataVersion");

    // Seed database with sample data on first load or if data version doesn't match
    if (currentVersion !== "seeded-v1") {
      console.log("Initializing database with sample data...");
      const result = seedDatabase();
      if (result.success) {
        console.log("✅ Database initialized successfully!");
        console.log("📊 Sample data loaded:", result.stats);
      } else {
        console.error("❌ Database initialization failed:", result.message);
      }
    }
  }, []);

  return <RouterProvider router={router} />;
}