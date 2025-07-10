// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Food Delivery',
  description: 'Best food in town',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
