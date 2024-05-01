import './globals.css';
import { kalpurushFont } from './fonts';

export const metadata = {
  title: 'Hadis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body className={kalpurushFont.className}>{children}</body>
    </html>
  );
}
