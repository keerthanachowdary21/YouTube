import styled from 'styled-components'

export const SideBarContainer = styled.div`
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => (props.isDark ? '#212121' : '#ffffff')};
`
export const NavItemsContainer = styled.ul`
  list-style: none;
  padding: 0px;
`
export const NavItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
  background-color: ${props => props.bgColor};
  padding 15px 25px;
`
export const NavText = styled.h1`
  font-family: 'Roboto';
  font-size: 15px;
  color: ${props => props.textcolor};
  font-weight: ${props => props.fontWeigh};
  margin: 0px;
`
export const ContactItemContainer = styled.div`
  padding: 0px 25px;
`
export const ContactText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 16px;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 15px;
  margin: 20px 0px;
`
export const SocialMediaImage = styled.img`
  width: 15%;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#475569')};
  font-size: 15px;
  font-weight: 500;
`
