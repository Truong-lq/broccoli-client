import './globals.css';
import Navbar from '../components/navbar';

// FontAwesome config
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

export const metadata = {
  title: 'Broccoli',
  description: 'Generate meal plans with ease.'
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' data-theme='emerald'>
      <body className='flex flex-row'>
        <Navbar sizeClass='w-28 h-full bg-gray-100 fixed' />
        <main className='ml-28 bg-white flex-1'>{children}</main>
      </body>
    </html>
  );
}
