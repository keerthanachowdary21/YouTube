import styled from 'styled-components'

export const LoginMainLightContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-content: center;
  background-color: ${props => (props.isDark ? `#212121` : `#f9f9f9`)};
`
export const LoginCardLightContainer = styled.div`
  box-shadow: ${props =>
    props.isDark ? `#0f0f0f` : `rgba(149, 157, 165, 0.2) 0px 8px 24px`};
  padding: 40px;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? `#0f0f0f` : `#ffffff`)};
  display: flex;
  margin: 30%;
  flex-direction: column;
  align-items: center;
`
export const NxtWatchImageLight = styled.img`
  width: 30%;
  margin-bottom: 20px;
`
export const FormContainerLight = styled.form`
  align-self: start;
  width: 100%;
`
export const LabelLight = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  color: ${props => (props.isDark ? `#f9f9f9` : `#475569`)};
  display: block;
  font-weight: 500;
  margin-top: 20px;
`
export const InputLight = styled.input`
  padding: 10px 20px;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  border: 1px solid #94a3b8;
  border-radius: 3px;
  display: block;
  margin: 5px 0px;
  width: 100%;
  outline: none;
  background-color: transparent;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 15px 0px;
`
export const InputCheckBoxLight = styled.input`
  border: 1px solid #7e858e;
  border-radius: 5px;
  height: 15px;
  width: 15px;
  margin: 0px;
`
export const LabelShowPassword = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: ${props => (props.isDark ? `#f9f9f9` : `#0f0f0f`)};
  margin-left: 10px;
`
export const LoginButtonLight = styled.button`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ffffff;
  background-color: #3b82f6;
  width: 100%;
  border: 1px solid #4f46e5;
  border-radius: 5px;
  font-weight: bold;
  padding: 8px 0px;
  margin-top: 20px;
  cursor: pointer;
`
export const ErrorText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0000;
  margin: 0px;
`
