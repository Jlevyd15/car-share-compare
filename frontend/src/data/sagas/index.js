import { all, call } from 'redux-saga/effects'
import { watchFetchServices } from './fetchServices'


// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
// 	try {
// 		const user = yield call(Api.fetchUser, action.payload.userId);
// 		yield put({ type: "USER_FETCH_SUCCEEDED", user: user });
// 	} catch (e) {
// 		yield put({ type: "USER_FETCH_FAILED", message: e.message });
// 	}
// }

function* rootSaga() {
	console.log('in root saga')
	yield all([
		call(watchFetchServices),
	])
}

export default rootSaga