import styled from 'styled-components'

export const SideBarAndView = styled.div`
  display: flex;
  flex-direction: row;
`
export const NotFoundContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  width: 85%;
`
export const NotFoundImage = styled.img`
  width: 40%;
`
export const NotFoundTitle = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f5f9' : '#1e293b')};
  text-align: center;
`
export const NotFoundDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? '#f1f1f1' : '#475569')};
  font-size: 16px;
  text-align: center;
`
