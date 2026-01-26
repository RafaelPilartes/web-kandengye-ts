import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { routsNameMain } from '../data/routsName'
import RootLayout from '../Layout/RootLayout'
import FourOhFour from '../pages/404'
import Loading from '../pages/loading'
import Register from '../pages/register'
import Login from '../pages/login'
import { AppContext } from '../provider/AppProvider'

const Home = React.lazy(() => import('../pages/'))
const About = React.lazy(() => import('../pages/about'))
const Services = React.lazy(() => import('../pages/services'))
const BecomeDriver = React.lazy(() => import('../pages/becomeDriver'))
const WorkWithUs = React.lazy(() => import('../pages/workWithUs'))
const Contacts = React.lazy(() => import('../pages/contacts'))
const Privacy = React.lazy(() => import('../pages/privacy'))

type Props = {
  children: JSX.Element
}

function PrivateLogin({ children }: Props) {
  const { user } = useContext(AppContext)

  if (user != null) {
    return <Navigate to={'/'} />
  }

  return children
}

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
          {/* register */}
          <Route
            path={routsNameMain.register}
            element={
              <React.Suspense fallback={<Loading />}>
                <PrivateLogin>
                  <Register />
                </PrivateLogin>
              </React.Suspense>
            }
          />
          {/* Login */}
          <Route
            path={routsNameMain.login}
            element={
              <React.Suspense fallback={<Loading />}>
                <PrivateLogin>
                  <Login />
                </PrivateLogin>
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

          {/* Privacy */}
          <Route
            path={routsNameMain.privacy}
            element={
              <React.Suspense fallback={<Loading />}>
                <Privacy />
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
