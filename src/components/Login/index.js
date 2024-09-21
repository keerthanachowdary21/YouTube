import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import {
  LoginMainLightContainer,
  LoginCardLightContainer,
  NxtWatchImageLight,
  FormContainerLight,
  LabelLight,
  InputLight,
  CheckBoxContainer,
  InputCheckBoxLight,
  LabelShowPassword,
  LoginButtonLight,
  ErrorText,
} from './styledComponents'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    isShowError: false,
    errorMessage: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value, isShowError: false})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value, isShowError: false})
  }

  isCheckboxChecked = () => {
    this.setState(prevState => ({
      isChecked: !prevState.isChecked,
    }))
  }

  onClickLogin = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const jwtToken = data.jwt_token
    if (response.ok === true) {
      Cookies.set('jwt_token', jwtToken, {expires: 7})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMessage: data.error_msg, isShowError: true})
    }
  }

  render() {
    const {username, password, isChecked} = this.state
    const {isShowError, errorMessage} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginMainLightContainer isDark={isDark}>
              <LoginCardLightContainer isDark={isDark}>
                <NxtWatchImageLight
                  src={
                    isDark
                      ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png'
                      : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Logo_of_YouTube_%282013-2015%29.svg/2560px-Logo_of_YouTube_%282013-2015%29.svg.png'
                  }
                  alt="website Logo"
                />
                <FormContainerLight onSubmit={this.onClickLogin}>
                  <LabelLight isDark={isDark} htmlFor="userName">
                    USERNAME
                  </LabelLight>
                  <InputLight
                    id="userName"
                    type="text"
                    placeholder="Username"
                    onChange={this.onChangeUsername}
                    value={username}
                  />
                  <LabelLight isDark={isDark} htmlFor="password">
                    PASSWORD
                  </LabelLight>
                  <InputLight
                    id="password"
                    type={isChecked ? 'text' : 'password'}
                    placeholder="Password"
                    onChange={this.onChangePassword}
                    value={password}
                  />
                  <CheckBoxContainer>
                    <InputCheckBoxLight
                      id="showPassword"
                      type="checkbox"
                      onChange={this.isCheckboxChecked}
                    />
                    <LabelShowPassword isDark={isDark} htmlFor="showPassword">
                      Show Password
                    </LabelShowPassword>
                  </CheckBoxContainer>
                  <LoginButtonLight type="submit">Login</LoginButtonLight>
                  {isShowError ? (
                    <ErrorText>{`*${errorMessage}`}</ErrorText>
                  ) : null}
                </FormContainerLight>
              </LoginCardLightContainer>
            </LoginMainLightContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}
export default Login
