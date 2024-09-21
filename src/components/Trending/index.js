import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
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
  TrendingVideosContainer,
  TrendingBar,
  TrendingBarIconContainer,
  TrendingText,
  VideosListsContainer,
  TrendingSingleVideoContainer,
  ThumbnailImage,
  VideoContentContainer,
  TrendingVideoTitle,
  TrendingVideoChannel,
  ViewsAndPublishDataContainer,
  ViewsCountText,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    trendingVideosList: [],
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedTrendingVideos = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        trendingVideosList: fetchedTrendingVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {trendingVideosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <TrendingVideosContainer isDark={isDark} data-testid="trending">
              <TrendingBar isDark={isDark} data-test-id="banner">
                <TrendingBarIconContainer isDark={isDark}>
                  <HiFire
                    style={{
                      color: isDark ? '#ff0b37' : '#909090',
                      width: '25px',
                      height: '25px',
                    }}
                  />
                </TrendingBarIconContainer>
                <TrendingText isDark={isDark}>Trending</TrendingText>
              </TrendingBar>
              <VideosListsContainer isDark={isDark}>
                {trendingVideosList.map(eachVideo => (
                  <Link
                    to={`/videos/${eachVideo.id}`}
                    style={{textDecoration: 'none'}}
                  >
                    <TrendingSingleVideoContainer key={eachVideo.id}>
                      <ThumbnailImage
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoContentContainer>
                        <TrendingVideoTitle isDark={isDark}>
                          {eachVideo.title}
                        </TrendingVideoTitle>
                        <TrendingVideoChannel isDark={isDark}>
                          {eachVideo.channel.name}
                        </TrendingVideoChannel>
                        <ViewsAndPublishDataContainer>
                          <ViewsCountText isDark={isDark}>
                            {`${eachVideo.viewCount} views`}
                          </ViewsCountText>
                          <ViewsCountText isDark={isDark}>.</ViewsCountText>
                          <ViewsCountText isDark={isDark}>
                            {formatDistanceToNow(
                              new Date(eachVideo.publishedAt),
                              {
                                addSuffix: true,
                              },
                            )}
                          </ViewsCountText>
                        </ViewsAndPublishDataContainer>
                      </VideoContentContainer>
                    </TrendingSingleVideoContainer>
                  </Link>
                ))}
              </VideosListsContainer>
            </TrendingVideosContainer>
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
    this.getTrendingVideosList()
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
export default Trending
