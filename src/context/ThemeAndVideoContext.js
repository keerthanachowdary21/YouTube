import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDark: false,
  onChangeTheme: () => {},
  onChangeTab: () => {},
  activeTab: 'Home',
  onSaveHandle: () => {},
  savedVideos: [],
})
export default ThemeAndVideoContext
