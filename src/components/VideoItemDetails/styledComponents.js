import styled from 'styled-components'

export const SideBarAndView = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
  padding: 30px;
  margin: 0px;
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
export const DetailVideoTitle = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 20px;
`
export const ViewsAndActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  width: 100%;
`
export const ViewsAndPulishedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 10px;
`
export const ViewsText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 15px;
  margin: 0px;
`
export const PublishedDateText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 15px;
  margin: 0px;
`
export const UserActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`
export const BtnText = styled.p`
  font-family: 'Roboto';
  color: ${props => props.textColor};
  font-size: 16px;
  margin: 0px;
`
export const LikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
`
export const DislikeButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
`
export const SaveButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: transparent;
  column-gap: 5px;
  cursor: pointer;
`
export const LogoAndNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin: 30px 0px;
`
export const LogoImage = styled.img`
  width: 60px;
  height: 60px;
`
export const NameAndSubscribers = styled.div``
export const ChannelName = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 16px;
  margin: 0px;
`
export const SubcriberCount = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-size: 14px;
  margin: 10px 0px;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 16px;
  margin: 30px 0px;
`
