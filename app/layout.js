import './globals.css'

export const metadata = {
  title: 'Broccoli',
  description: 'Generate meal plans with ease.'
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <main className='max-w-6xl mx-auto px-8 py-16'>{children}</main>
      </body>
    </html>
  )
}
