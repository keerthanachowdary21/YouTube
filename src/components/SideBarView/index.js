import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'

import {
  SideBarContainer,
  NavItemsContainer,
  NavItem,
  NavText,
  ContactItemContainer,
  ContactText,
  SocialMediaContainer,
  SocialMediaImage,
  ContactDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class SideBarView extends Component {
  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark, activeTab, onChangeTab} = value
          const textcolor = isDark ? '#ffffff' : '#181818'
          const activeTabbg = isDark ? '#383838' : '#f1f5f9'
          const onClickHome = () => {
            onChangeTab('Home')
          }
          const onClickTrending = () => {
            onChangeTab('Trending')
          }
          const onClickGaming = () => {
            onChangeTab('Gaming')
          }
          const onClickSavedVideos = () => {
            onChangeTab('SavedVideos')
          }
          return (
            <SideBarContainer isDark={isDark}>
              <NavItemsContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <NavItem
                    key="Home"
                    onClick={onClickHome}
                    bgColor={activeTab === 'Home' ? activeTabbg : 'none'}
                  >
                    <AiFillHome
                      style={{
                        color: activeTab === 'Home' ? '#ff0b37' : '#909090',
                      }}
                    />
                    <NavText
                      fontWeigh={activeTab === 'Home' ? 'bold' : '400'}
                      textcolor={textcolor}
                    >
                      Home
                    </NavText>
                  </NavItem>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <NavItem
                    key="Trending"
                    onClick={onClickTrending}
                    bgColor={activeTab === 'Trending' ? activeTabbg : 'none'}
                  >
                    <HiFire
                      style={{
                        color: activeTab === 'Trending' ? '#ff0b37' : '#909090',
                      }}
                    />
                    <NavText
                      fontWeigh={activeTab === 'Trending' ? 'bold' : '400'}
                      textcolor={textcolor}
                    >
                      Trending
                    </NavText>
                  </NavItem>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <NavItem
                    key="Gaming"
                    onClick={onClickGaming}
                    bgColor={activeTab === 'Gaming' ? activeTabbg : 'none'}
                  >
                    <SiYoutubegaming
                      style={{
                        color: activeTab === 'Gaming' ? '#ff0b37' : '#909090',
                      }}
                    />
                    <NavText
                      fontWeigh={activeTab === 'Gaming' ? 'bold' : '400'}
                      textcolor={textcolor}
                    >
                      Gaming
                    </NavText>
                  </NavItem>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <NavItem
                    key="SavedVideos"
                    onClick={onClickSavedVideos}
                    bgColor={activeTab === 'SavedVideos' ? activeTabbg : 'none'}
                  >
                    <MdPlaylistAdd
                      style={{
                        color:
                          activeTab === 'SavedVideos' ? '#ff0b37' : '#909090',
                      }}
                    />
                    <NavText
                      fontWeigh={activeTab === 'SavedVideos' ? 'bold' : '400'}
                      textcolor={textcolor}
                    >
                      Saved videos
                    </NavText>
                  </NavItem>
                </Link>
              </NavItemsContainer>
              <ContactItemContainer>
                <ContactText isDark={isDark}>CONTACT US</ContactText>
                <SocialMediaContainer>
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactDescription isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </ContactDescription>
              </ContactItemContainer>
            </SideBarContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default SideBarView
