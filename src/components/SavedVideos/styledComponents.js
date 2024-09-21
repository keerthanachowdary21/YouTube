import styled from 'styled-components'

export const SideBarAndView = styled.div`
  display: flex;
  flex-direction: row;
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
export const SavedVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
  margin: 0px;
`
export const SavedBar = styled.div`
  margin: 0px;
  padding: 25px 50px;
  background-color: ${props => (props.isDark ? '#181818' : '#f4f4f4')};
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
`
export const SavedBarIconContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  border-radius: 50%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const SavedText = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#1e293b')};
`
export const SavedVideosListsContainer = styled.ul`
  padding: 0px 50px;
`
export const SavedSingleVideoContainer = styled.li`
  display: flex;
  flex-direction: row;
  column-gap: 15px;
  padding: 40px 0px;
`
export const SavedThumbnailImage = styled.img`
  width: 40%;
  height: 300px;
`
export const SavedVideoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
export const SavedVideoTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
`
export const SavedVideoChannel = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  margin: 10px 0px;
`
export const SavedViewsAndPublishDataContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`
export const SavedViewsCountText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 16px;
  margin: 0px;
`
export const NoSavedVideosContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
`
export const NoSavedVideoImage = styled.img`
  width: 40%;
`
export const NoSavedVideoTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`
export const NoSavedVideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  font-size: 20px;
  text-align: center;
`
