import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

const Routes = () => {
  const [themeMode,setThemeMode] = useState('light')

  const darkTheme = function() {
    setThemeMode('dark')
  }
  const lightTheme = function() {
    setThemeMode('light')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme }}>
      <Header/>
      <Outlet />
      <Footer/>
    </ThemeProvider>
  )
}

export default Routes
