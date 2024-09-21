import {Component} from 'react'
import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {formatDistanceToNow} from 'date-fns'
import Header from '../Header'
import SideBarView from '../SideBarView'

import {
  SideBarAndView,
  SavedVideosContainer,
  SavedBar,
  SavedBarIconContainer,
  SavedText,
  SavedVideosListsContainer,
  SavedSingleVideoContainer,
  SavedThumbnailImage,
  SavedVideoContentContainer,
  SavedVideoTitle,
  SavedVideoChannel,
  SavedViewsAndPublishDataContainer,
  SavedViewsCountText,
  NoSavedVideosContainer,
  NoSavedVideoImage,
  NoSavedVideoTitle,
  NoSavedVideoDescription,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class SavedVideos extends Component {
  renderSavedVideos = () => (
    <ThemeAndVideoContext.Consumer>
      {value => {
        const {isDark, savedVideos} = value
        console.log(savedVideos)
        const noOfVideos = savedVideos.length
        return noOfVideos > 0 ? (
          <SavedVideosContainer data-testid="savedVideos" isDark={isDark}>
            <SavedBar isDark={isDark} data-test-id="banner">
              <SavedBarIconContainer isDark={isDark}>
                <MdPlaylistAdd
                  style={{
                    color: isDark ? '#ff0b37' : '#909090',
                    width: '25px',
                    height: '25px',
                  }}
                />
              </SavedBarIconContainer>
              <SavedText isDark={isDark}>Saved Videos</SavedText>
            </SavedBar>
            <SavedVideosListsContainer isDark={isDark}>
              {savedVideos.map(eachVideo => (
                <Link
                  to={`/videos/${eachVideo.id}`}
                  style={{textDecoration: 'none'}}
                >
                  <SavedSingleVideoContainer key={eachVideo.id}>
                    <SavedThumbnailImage
                      src={eachVideo.thumbnailUrl}
                      alt="video thumbnail"
                    />
                    <SavedVideoContentContainer>
                      <SavedVideoTitle isDark={isDark}>
                        {eachVideo.title}
                      </SavedVideoTitle>
                      <SavedVideoChannel isDark={isDark}>
                        {eachVideo.channel.name}
                      </SavedVideoChannel>
                      <SavedViewsAndPublishDataContainer>
                        <SavedViewsCountText isDark={isDark}>
                          {`${eachVideo.viewCount} views`}
                        </SavedViewsCountText>
                        <SavedViewsCountText isDark={isDark}>
                          .
                        </SavedViewsCountText>
                        <SavedViewsCountText isDark={isDark}>
                          {formatDistanceToNow(
                            new Date(eachVideo.publishedAt),
                            {
                              addSuffix: true,
                            },
                          )}
                        </SavedViewsCountText>
                      </SavedViewsAndPublishDataContainer>
                    </SavedVideoContentContainer>
                  </SavedSingleVideoContainer>
                </Link>
              ))}
            </SavedVideosListsContainer>
          </SavedVideosContainer>
        ) : (
          <NoSavedVideosContainer isDark={isDark}>
            <NoSavedVideoImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <NoSavedVideoTitle isDark={isDark}>
              No saved videos found
            </NoSavedVideoTitle>
            <NoSavedVideoDescription isDark={isDark}>
              Save your videos by clicking a button
            </NoSavedVideoDescription>
          </NoSavedVideosContainer>
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
          {this.renderSavedVideos()}
        </SideBarAndView>
      </>
    )
  }
}
export default SavedVideos
