import React, { useEffect, useState } from 'react'
import { ThemeProvider } from './context/theme'
// import {ThemeButton} from './components/ThemeButton'
import ItemCard from './components/ItemCard'
import ThemeButton from './components/ThemeButton'


const App = () => {
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
      <ThemeButton/>
      <ItemCard/>
    </ThemeProvider>
  )
}

export default App
