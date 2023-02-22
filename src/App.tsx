import { useContext, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { AppContext, AppProvider } from './provider/AppProvider'
import { Router } from './routes/Routes'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './themes/default'

function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
