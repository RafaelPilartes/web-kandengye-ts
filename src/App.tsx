import { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppContext, AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <AppProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </QueryClientProvider>
    </AppProvider>
  )
}

export default App
