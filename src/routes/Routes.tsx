import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import RootLayout from '../Layout/RootLayout'
import FourOhFour from '../pages/404'
import Loading from '../pages/loading'
import { routsNameMain } from '../data/routsName'

const Home = React.lazy(() => import('../pages'))
const About = React.lazy(() => import('../pages/about'))
const Services = React.lazy(() => import('../pages/services'))
const BecomeDriver = React.lazy(() => import('../pages/becomeDriver'))
const WorkWithUs = React.lazy(() => import('../pages/workWithUs'))
const Contacts = React.lazy(() => import('../pages/contacts'))
const Privacy = React.lazy(() => import('../pages/privacy'))

/** Envolve cada página preguiçosa no mesmo ecrã de espera. */
function lazyRoute(element: React.ReactNode) {
  return <React.Suspense fallback={<Loading />}>{element}</React.Suspense>
}

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={lazyRoute(<Home />)} />
          <Route path={routsNameMain.about} element={lazyRoute(<About />)} />
          <Route
            path={routsNameMain.services}
            element={lazyRoute(<Services />)}
          />
          <Route
            path={routsNameMain.contact}
            element={lazyRoute(<Contacts />)}
          />
          <Route
            path={routsNameMain.becomeDriver}
            element={lazyRoute(<BecomeDriver />)}
          />
          <Route
            path={routsNameMain.workWithUs}
            element={lazyRoute(<WorkWithUs />)}
          />
          <Route
            path={routsNameMain.privacy}
            element={lazyRoute(<Privacy />)}
          />
        </Route>

        <Route path="*" element={lazyRoute(<FourOhFour />)} />
      </Routes>
    </BrowserRouter>
  )
}
