export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">A página que você está procurando não existe.</p>
        <a 
          href="/" 
          className="inline-flex items-center px-4 py-2 bg-ifce-primary text-white rounded-lg hover:bg-ifce-secondary transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}
