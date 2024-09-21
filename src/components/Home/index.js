import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {IoMdClose, IoIosSearch} from 'react-icons/io'
import Header from '../Header'
import SideBarView from '../SideBarView'

import {
  SideBarAndView,
  ViewContainer,
  BannerUpContainer,
  BannerWebsiteLogo,
  BuyPremiumDescription,
  GetItNow,
  BannerContent,
  CloseButton,
  SearchAndVideos,
  ListOfVideosContainer,
  SearchMainContainer,
  SearchInputContainer,
  SearchButton,
  VideosContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  VideoContainer,
  ChannelLogoAndContent,
  ThumbnailImage,
  ChannelLogo,
  ContentContainer,
  VideoTitle,
  ChannelName,
  ViewAndPublish,
  Count,
  PublishedDate,
  NoVideosContainer,
  NoVideoImage,
  NoVideoTitle,
  NoVideoDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    videosList: [],
    showBanner: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedVideos = data.videos.map(eachVideo => ({
        channel: {
          name: eachVideo.channel.name,
          profileImageUrl: eachVideo.channel.profile_image_url,
        },
        id: eachVideo.id,
        publishedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
      }))
      this.setState({
        videosList: fetchedVideos,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getVideos()
  }

  onClickRetry = () => {
    this.getVideos()
  }

  onClickRetryNoVideos = () => {
    this.setState({searchInput: ''}, this.getVideos)
  }

  onClickCloseBanner = () => {
    this.setState({showBanner: false})
  }

  renderSuccessView = () => {
    const {videosList} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          const noOfVideos = videosList.length
          return noOfVideos !== 0 ? (
            <VideosContainer>
              {videosList.map(eachVideo => (
                <Link
                  to={`/videos/${eachVideo.id}`}
                  style={{textDecoration: 'none'}}
                >
                  <VideoContainer key={eachVideo.id}>
                    <ThumbnailImage
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <ChannelLogoAndContent>
                      <ChannelLogo
                        src={eachVideo.channel.profileImageUrl}
                        alt="channel logo"
                      />
                      <ContentContainer>
                        <VideoTitle isDark={isDark}>
                          {eachVideo.title}
                        </VideoTitle>
                        <ChannelName isDark={isDark}>
                          {eachVideo.channel.name}
                        </ChannelName>
                        <ViewAndPublish>
                          <Count
                            isDark={isDark}
                          >{`${eachVideo.viewCount} views`}</Count>
                          <PublishedDate isDark={isDark}>
                            {formatDistanceToNow(
                              new Date(eachVideo.publishedAt),
                              {addSuffix: true},
                            )}
                          </PublishedDate>
                        </ViewAndPublish>
                      </ContentContainer>
                    </ChannelLogoAndContent>
                  </VideoContainer>
                </Link>
              ))}
            </VideosContainer>
          ) : (
            <NoVideosContainer>
              <NoVideoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                at="no videos"
              />
              <NoVideoTitle isDark={isDark}>
                No Search results found
              </NoVideoTitle>
              <NoVideoDescription isDark={isDark}>
                Try different key words or remove search filter
              </NoVideoDescription>
              <RetryButton type="button" onClick={this.onClickRetryNoVideos}>
                Retry
              </RetryButton>
            </NoVideosContainer>
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

  renderFailureView = () => {
    const {isDark} = this.state
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
  }

  renderResultView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    const {searchInput, showBanner} = this.state
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <SideBarAndView>
                <SideBarView />
                <ViewContainer>
                  <BannerUpContainer
                    data-testid="banner"
                    showBanner={showBanner}
                  >
                    <BannerContent>
                      <BannerWebsiteLogo
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png"
                        alt="nxt watch logo"
                      />
                      <BuyPremiumDescription>
                        Buy Nxt Watch Premium
                      </BuyPremiumDescription>
                      <GetItNow type="button">GET IT NOW</GetItNow>
                    </BannerContent>
                    <CloseButton
                      data-testid="close"
                      type="button"
                      onClick={this.onClickCloseBanner}
                    >
                      <IoMdClose style={{height: '20px', width: '20px'}} />
                    </CloseButton>
                  </BannerUpContainer>
                  <ListOfVideosContainer data-testid="home" isDark={isDark}>
                    <SearchAndVideos>
                      <SearchMainContainer isDark={isDark}>
                        <SearchInputContainer
                          type="search"
                          placeholder="Search"
                          isDark={isDark}
                          value={searchInput}
                          onChange={this.onChangeSearchInput}
                        />
                        <SearchButton
                          data-testid="searchButton "
                          type="button"
                          onClick={this.onClickSearch}
                          isDark={isDark}
                        >
                          <IoIosSearch
                            style={{height: '15px', width: '15px'}}
                          />
                        </SearchButton>
                      </SearchMainContainer>
                      {this.renderResultView()}
                    </SearchAndVideos>
                  </ListOfVideosContainer>
                </ViewContainer>
              </SideBarAndView>
            </>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Home
