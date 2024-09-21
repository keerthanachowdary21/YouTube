import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarView from '../SideBarView'

import {
  SideBarAndView,
  VideoDetailsContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  RetryButton,
  FailureDescription,
  DetailVideoTitle,
  ViewsAndActionContainer,
  ViewsAndPulishedContainer,
  ViewsText,
  PublishedDateText,
  UserActionContainer,
  BtnText,
  LikeButton,
  DislikeButton,
  SaveButton,
  LogoAndNameContainer,
  LogoImage,
  NameAndSubscribers,
  ChannelName,
  SubcriberCount,
  VideoDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    videoDetails: {},
    userThought: '',
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const fetchedVideoDetails = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({
        videoDetails: fetchedVideoDetails,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onClickRetry = () => {
    this.getVideoDetails()
  }

  renderSuccessView = () => {
    const {videoDetails, userThought, isSaved} = this.state
    const {channel, description, publishedAt} = videoDetails
    const {title, videoUrl, viewCount} = videoDetails
    const {name, profileImageUrl, subscriberCount} = channel
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark, onSaveHandle} = value
          const textColor = isDark ? '#94a3b8' : '#64748b'
          const iconColor = isDark ? '#94a3b8' : '#64748b'
          const onClickLike = () => {
            this.setState({userThought: 'Like'})
          }

          const onClickDisLike = () => {
            this.setState({userThought: 'DisLike'})
          }

          const onSaveBtn = () => {
            this.setState(
              prevState => ({
                isSaved: !prevState.isSaved,
              }),
              onSaveHandle(videoDetails),
            )
          }

          return (
            <VideoDetailsContainer
              data-testid="videoItemDetails"
              isDark={isDark}
            >
              <ReactPlayer
                controls
                width="100%"
                height="600px"
                url={videoUrl}
              />
              <DetailVideoTitle isDark={isDark}>{title}</DetailVideoTitle>
              <ViewsAndActionContainer>
                <ViewsAndPulishedContainer>
                  <ViewsText isDark={isDark}>{`${viewCount} views`}</ViewsText>
                  <ViewsText isDark={isDark}>.</ViewsText>
                  <PublishedDateText isDark={isDark}>
                    {formatDistanceToNow(new Date(publishedAt), {
                      addSuffix: true,
                    })}
                  </PublishedDateText>
                </ViewsAndPulishedContainer>
                <UserActionContainer>
                  <LikeButton type="button" onClick={onClickLike}>
                    <BiLike
                      style={{
                        color: userThought === 'Like' ? '#2563eb' : iconColor,
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <BtnText
                      textColor={userThought === 'Like' ? '#2563eb' : textColor}
                    >
                      Like
                    </BtnText>
                  </LikeButton>
                  <DislikeButton type="button" onClick={onClickDisLike}>
                    <BiDislike
                      style={{
                        color:
                          userThought === 'DisLike' ? '#2563eb' : iconColor,
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <BtnText
                      textColor={
                        userThought === 'DisLike' ? '#2563eb' : textColor
                      }
                    >
                      Dislike
                    </BtnText>
                  </DislikeButton>
                  <SaveButton type="button" onClick={onSaveBtn}>
                    <MdPlaylistAdd
                      style={{
                        color: isSaved ? '#2563eb' : iconColor,
                        width: '20px',
                        height: '20px',
                      }}
                    />
                    <BtnText textColor={isSaved ? '#2563eb' : textColor}>
                      {isSaved ? 'Saved' : 'Save'}
                    </BtnText>
                  </SaveButton>
                </UserActionContainer>
              </ViewsAndActionContainer>
              <hr />
              <LogoAndNameContainer>
                <LogoImage src={profileImageUrl} alt="channel logo" />
                <NameAndSubscribers>
                  <ChannelName isDark={isDark}>{name}</ChannelName>
                  <SubcriberCount
                    isDark={isDark}
                  >{`${subscriberCount} subscribers`}</SubcriberCount>
                  <VideoDescription isDark={isDark}>
                    {description}
                  </VideoDescription>
                </NameAndSubscribers>
              </LogoAndNameContainer>
            </VideoDetailsContainer>
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
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryButton type="button" onClick={this.onClickRetry}>
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeAndVideoContext.Consumer>
  )

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
export default VideoItemDetails
