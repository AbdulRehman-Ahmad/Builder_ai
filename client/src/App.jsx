import React from 'react' 
import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Loading from './components/Loading'
import BuilderPage from './pages/BuilderPage'
import AuthPage from './pages/AuthPage'
import PreviewPage from './pages/PreviewPage'
import { AuthLayout, GuestLayout } from './pages/Layout'

const Layout = () => {
  return (
    <div>
      Layout
      <Outlet /> 
    </div>
  )
}

const App = () => {
  return (
    <div>
      
      <Routes>
        {/* Using our custom text Layout component */}
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<AuthPage mode="login" />} />
          <Route path="/register" element={<AuthPage mode="register" />} />
        </Route>
      
        {/* Using our custom text Layout component */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/builder/:id" element={<BuilderPage />} />
          <Route path="/preview/:id" element={<PreviewPage />} />
        </Route>

      </Routes>
    
    </div>
  )
}

export default App