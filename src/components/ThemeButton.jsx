import React from 'react'
import useTheme from '../context/theme'

const ThemeButton = () => {
    const {themeMode, darkTheme, lightTheme} = useTheme()
    const handleThemeChange = function(e){
        const themeModeStatus = e.target.value
        if(themeModeStatus == 'light'){
            darkTheme()
        }else{
            lightTheme()
        }
    }
  return (
    <div>
        <label htmlFor="theme-mode-radio"><input value='dark' checked={themeMode==='light'}  onChange={handleThemeChange} type="radio" name='theme-mode-radio' id='theme-mode-radio'/>Light Mode</label>
        <label htmlFor="theme-mode-radio"><input value='light'  onChange={handleThemeChange} type="radio" name='theme-mode-radio' id='theme-mode-radio'/>Dark Mode</label>
    </div>
  )
}

export default ThemeButton
