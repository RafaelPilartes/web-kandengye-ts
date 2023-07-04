import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routsNameMain } from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import FourOhFour from '../pages/404'
import Loading from '../pages/loading'

const Home = React.lazy(() => import('../pages/'))
const About = React.lazy(() => import('../pages/about'))
const Services = React.lazy(() => import('../pages/services'))
const BecomeDriver = React.lazy(() => import('../pages/becomeDriver'))
const WorkWithUs = React.lazy(() => import('../pages/workWithUs'))
const Contacts = React.lazy(() => import('../pages/contacts'))

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Home */}
          <Route
            index
            element={
              <React.Suspense fallback={<Loading />}>
                <Home />
              </React.Suspense>
            }
          />
          {/* About */}
          <Route
            path={routsNameMain.about}
            element={
              <React.Suspense fallback={<Loading />}>
                <About />
              </React.Suspense>
            }
          />
          {/* Services */}
          <Route
            path={routsNameMain.services}
            element={
              <React.Suspense fallback={<Loading />}>
                <Services />
              </React.Suspense>
            }
          />
          {/* Contacts */}
          <Route
            path={routsNameMain.contact}
            element={
              <React.Suspense fallback={<Loading />}>
                <Contacts />
              </React.Suspense>
            }
          />
          {/* BecomeDriver */}
          <Route
            path={routsNameMain.becomeDriver}
            element={
              <React.Suspense fallback={<Loading />}>
                <BecomeDriver />
              </React.Suspense>
            }
          />
          {/* WorkWithUs */}
          <Route
            path={routsNameMain.workWithUs}
            element={
              <React.Suspense fallback={<Loading />}>
                <WorkWithUs />
              </React.Suspense>
            }
          />
        </Route>

        <Route
          path="*"
          element={
            <React.Suspense fallback={<Loading />}>
              <FourOhFour />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
