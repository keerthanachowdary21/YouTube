import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import {Link} from 'react-router-dom'
import Header from '../Header'
import SideBarView from '../SideBarView'

import {
  SideBarAndView,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  RetryButton,
  FailureDescription,
  GamingVideosContainer,
  GamingBar,
  GamingBarIconContainer,
  GamingText,
  GamingListContainer,
  GamingVideoSingleCard,
  GamingThumbnailImage,
  GamingVideoTitle,
  ViewCountText,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {apiStatus: apiStatusConstants.initial, gamingVideosList: []}

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedGamingVideos = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        gamingVideosList: fetchedGamingVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {gamingVideosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <GamingVideosContainer data-testid="gaming" isDark={isDark}>
              <GamingBar isDark={isDark} data-test-id="banner">
                <GamingBarIconContainer isDark={isDark}>
                  <SiYoutubegaming
                    style={{
                      color: isDark ? '#ff0b37' : '#909090',
                      width: '25px',
                      height: '25px',
                    }}
                  />
                </GamingBarIconContainer>
                <GamingText isDark={isDark}>Gaming</GamingText>
              </GamingBar>
              <GamingListContainer>
                {gamingVideosList.map(eachVideo => (
                  <Link
                    to={`/videos/${eachVideo.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <GamingVideoSingleCard key={eachVideo.id}>
                      <GamingThumbnailImage
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <GamingVideoTitle isDark={isDark}>
                        {eachVideo.title}
                      </GamingVideoTitle>
                      <ViewCountText isDark={isDark}>
                        {`${eachVideo.viewCount} Watching Worlwide`}
                      </ViewCountText>
                    </GamingVideoSingleCard>
                  </Link>
                ))}
              </GamingListContainer>
            </GamingVideosContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <FailureViewContainer>
            <FailureImage
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              }
              alt="failure view"
            />
            <FailureHeading isDark={isDark}>
              Oops! Something Went Wrong
            </FailureHeading>
            <FailureDescription isDark={isDark}>
              We are having some trouble to complete your request.
              <br />
              Please try again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

  onClickRetry = () => {
    this.getGamingVideosList()
  }

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <SideBarAndView>
          <SideBarView />
          {this.renderResultView()}
        </SideBarAndView>
      </>
    )
  }
}
export default Gaming
