import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Router } from './routes/Routes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // O site publico le pouco e muda pouco: evita refetch a cada foco.
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      retry: 1
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      {/*
        Um unico contentor de toasts para a aplicacao inteira. Antes cada
        pagina montava o seu, mais o Header — sete ao todo, e um toast
        aparecia repetido em cada um que estivesse montado.
      */}
      <ToastContainer position="top-right" autoClose={3000} />
    </QueryClientProvider>
  )
}

export default App
