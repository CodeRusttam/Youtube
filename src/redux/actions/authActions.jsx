import firebase from '@firebase/app-compat';
import auth from '../../firebase'
import { LOAD_PROFLE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from '../actionType';
export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    })
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl")
    const res = await auth.signInWithPopup(provider);
    const accessToken = res.credential.accessToken
    const profile = {
      name: res.additionalUserInfo.profile.name,
      photoURL: res.additionalUserInfo.profile.picture,
    }
    sessionStorage.setItem("ytc-access-token", accessToken)
    sessionStorage.setItem("ytc-user", JSON.stringify(profile))
    dispatch({
      type: LOGIN_SUCCESS,
      payload: accessToken
    })
    dispatch({
      type: LOAD_PROFLE,
      payload: profile
    })
  } catch (error) {
    console.log(error.message)
    dispatch({
      type: LOGIN_FAIL,
      payload: error.message
    })
  }
};
export const log_out = () => async (dispatch) => {
  await auth.signOut();
  dispatch({
    type: LOG_OUT,
  })
  sessionStorage.removeItem("ytc-access-token")
  sessionStorage.removeItem("ytc-user")
}
// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]

