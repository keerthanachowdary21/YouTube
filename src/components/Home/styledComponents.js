import styled from 'styled-components'

export const SideBarAndView = styled.div`
  display: flex;
  flex-direction: row;
`
export const ViewContainer = styled.div`
  width: 85%;
`
export const BannerUpContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 50px 40px;
  display: ${props => (props.showBanner ? 'flex' : 'none')};
  flex-direction: row;
  justify-content: space-between;
`
export const BannerContent = styled.div``
export const BannerWebsiteLogo = styled.img`
  width: 10%;
`
export const BuyPremiumDescription = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  width: 400px;
  color: #181818;
`
export const GetItNow = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #181818;
  border: 2px solid #181818;
  padding: 8px 10px;
  background-color: transparent;
  font-weight: 500;
  margin-top: 30px;
`
export const CloseButton = styled.button`
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ListOfVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  padding: 30px;
`
export const SearchAndVideos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  width: 85%;
`
export const SearchMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: ${props =>
    props.isDark ? '2px solid #606060' : '2px solid #cbd5e1'};
  width: 50%;
`
export const SearchInputContainer = styled.input`
  padding: 8px 20px;
  width: 100%;
  outline: none;
  background-color: transparent;
  border: none;
  color: ${props => (props.isDark ? '#f8fafc' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const SearchButton = styled.button`
  padding: 8px 40px;
  cursor: pointer;
  border-right: none;
  border-top: none;
  border-bottom: none;
  background-color: ${props => (props.isDark ? '#383838' : '#f1f1f1')};
  border-left: ${props =>
    props.isDark ? '2px solid #606060' : '2px solid #cbd5e1'};
`
export const VideosContainer = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 30px 0px;
  column-gap: 13px;
  row-gap: 50px;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const FailureViewContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 40px 0px;
`
export const FailureImage = styled.img`
  width: 40%;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  font-size: 20px;
  text-align: center;
`
export const RetryButton = styled.button`
  font-family: 'Roboto';
  color: #f9f9f9;
  font-size: 15px;
  padding: 10px 30px;
  border-radius: 5px;
  border: none;
  background-color: #4f46e5;
  font-weight: 500;
  cursor: pointer;
`
export const VideoContainer = styled.li`
  width: 340px;
`
export const ThumbnailImage = styled.img`
  width: 100%;
`
export const ChannelLogoAndContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  column-gap: 15px;
  margin: 10px 3px;
`
export const ChannelLogo = styled.img`
  width: 12%;
`
export const ContentContainer = styled.div`
  margin: 0px;
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 18px;
  margin: 0px;
  line-height: 1.5;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  margin: 12px 0px;
`
export const ViewAndPublish = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`
export const Count = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  margin: 0px;
`
export const PublishedDate = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  margin: 0px;
`
export const NoVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`
export const NoVideoImage = styled.img`
  width: 40%;
`
export const NoVideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`
export const NoVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  font-size: 20px;
  text-align: center;
`
