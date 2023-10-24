import './globals.css'

export const metadata = {
  title: 'LicitaX',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" data-theme="corporate">
      <body>{children}</body>
    </html>
  )
}