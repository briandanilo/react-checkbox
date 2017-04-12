import actions from './docs.js'
import api from '../api.js'

export default function getDocs () {
  return function (dispatch) {
    return  $.ajax({
      url: api.url,
      type: 'GET',
      dataType: 'JSON',
    }).then(function (d) {
      dispatch({type:"GOT_DOCS",data:d});
    })
  }
}
