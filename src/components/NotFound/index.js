import {Component} from 'react'
import Header from '../Header'
import SideBarView from '../SideBarView'
import {
  SideBarAndView,
  NotFoundContainer,
  NotFoundImage,
  NotFoundTitle,
  NotFoundDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class NotFound extends Component {
  renderNotFoundView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <NotFoundContainer isDark={isDark}>
            <NotFoundImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
            />
            <NotFoundTitle isDark={isDark}>Page Not Found</NotFoundTitle>
            <NotFoundDescription isDark={isDark}>
              we are sorry, the page you requested could not be found.
            </NotFoundDescription>
          </NotFoundContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  render() {
    return (
      <>
        <Header />
        <SideBarAndView>
          <SideBarView />
          {this.renderNotFoundView()}
        </SideBarAndView>
      </>
    )
  }
}
export default NotFound
