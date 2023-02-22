import { Outlet } from 'react-router-dom'
import FooterMain from '../components/Footer'
import HeaderMain from '../components/Header'

function RootLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
      <FooterMain />
    </>
  )
}

export default RootLayout
