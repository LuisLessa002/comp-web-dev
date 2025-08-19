import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IFCE Dashboard - Matrículas por polos no Ceará',
  description: 'Acompanhe a evolução das matrículas por polo específico no estado do Ceará.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
