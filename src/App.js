import {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ThemeAndVideoContext from './context/ThemeAndVideoContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isDark: false, activeTab: 'Home', savedVideos: []}

  onChangeTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  onChangeTab = tab => {
    this.setState({activeTab: tab})
  }

  onSaveHandle = videoDetails => {
    const {savedVideos} = this.state
    const checkVideo = savedVideos.find(
      eachVideo => eachVideo.id === videoDetails.id,
    )

    if (checkVideo === undefined) {
      this.setState(prevState => ({
        savedVideos: [...prevState.savedVideos, videoDetails],
      }))
    } else {
      const removedList = savedVideos.filter(
        eachVideo => eachVideo.id !== videoDetails.id,
      )
      this.setState({
        savedVideos: removedList,
      })
    }
  }

  render() {
    const {isDark, activeTab, savedVideos} = this.state
    return (
      <ThemeAndVideoContext.Provider
        value={{
          isDark,
          activeTab,
          onChangeTheme: this.onChangeTheme,
          onChangeTab: this.onChangeTab,
          savedVideos,
          onSaveHandle: this.onSaveHandle,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route component={NotFound} />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}
export default App
