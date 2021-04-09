import { actions } from './const'
import { LOGIN, REFRESHTOKEN, GETLOGENINUSER} from '../../const/api'
import { request } from '../../services/requests'

export const login = (email, password ) => {
  return (dispach) => {
    request({
      url: LOGIN,
      method: 'POST',
      data: { email, password }
    }, false).then( ({data}) => {
      dispach({
        type: actions.login,
        payload: {
          id: data.id,
          username: data.username,
        }
      })
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
    }) 
  }
}

export const refreshToken = () => {
  return (dispach) => {
    const acceessToken = localStorage.getItem('accessToken')
    const refreshToken = localStorage.getItem('refreshToken')
    console.log({acceessToken},{refreshToken})
    request({
      url: REFRESHTOKEN,
      method: 'POST',
      data: {acceessToken,refreshToken}
    }, false).then( ({data}) => {
      localStorage.setItem('accessToken', data.accessToken)
      localStorage.setItem('refreshToken', data.refreshToken)
    }).catch( (data) => {
      console.log(data)
      //localStorage.clear()
    })
  }
}

export const getLogInUserFromAccessToken = () => {
  return (dispach) => {
    request({
      url: GETLOGENINUSER,
      method: 'POST',
    }, false).then( ({data}) => {
      dispach({
        type: actions.login,
        payload: {
          id: data.id,
          username: data.username,
        }
      })
    }).catch( () => {
      //localStorage.clear()
    })
  }
}