import styled from 'styled-components'

export const HeaderContainer = styled.div`
  padding: 25px 50px;
  display: flex;
  flex-direction: row;
  background: ${props => (props.isDark ? '#212121' : '#ffffff')};
  align-items: center;
  justify-content: space-between;
`
export const WebsiteImage = styled.img`
  width: 10%;
`
export const ThemeLogoContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
`
export const ThemeButton = styled.button`
  padding: 0px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ProfileImage = styled.img`
  width: 11%;
`
export const LogoutButton = styled.button`
  font-family: 'Roboto';
  border: ${props =>
    props.isDark ? '2px solid #ffffff' : '2px solid #4f46e5'};
  border-radius: 3px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#3b82f6')};
  font-weight: 500;
  padding: 6px 20px;
  font-size: 16px;
  cursor: pointer;
`
export const PopUpCard = styled.div`
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`
export const CardText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#0f0f0f')};
  font-weight: 500;
  margin: 0px;
`
export const CardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  column-gap: 25px;
`
export const CancelButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => (props.isDark ? '#94a3b8' : '#475569')};
  font-weight: 500;
  padding: 7px 10px;
  background-color: transparent;
  border-radius: 3px;
  border: ${props =>
    props.isDark ? '1px solid #94a3b8' : '1px solid #475569'};
  cursor: pointer;
`
export const ConfirmButton = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #f9f9f9;
  border: none;
  font-weight: 500;
  padding: 8px 10px;
  background-color: #3b82f6;
  border-radius: 3px;
  cursor: pointer;
`
