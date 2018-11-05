import { takeEvery, call, put } from 'redux-saga/effects'
import API from '../../communication/API'
import { services } from '../Services/actions'

export function* fetchServicesData({ payload: { url } }) {
	try {
		const data = yield call(API.getData, { url })
		console.log('data', data)
		yield put(services.setData({ data }))
	} catch (e) {
		yield put({ type: 'SERVICES_FETCH_FAILED', message: e.message })
	}
}

export function* watchFetchServices() {
	console.log('watching')
	yield takeEvery('SERVICES_FETCH_DATA', fetchServicesData)
}