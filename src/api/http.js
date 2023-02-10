// 引用axios
import axios from 'axios'
import { filterNull } from '/@/utils'
axios.defaults.withCredentials = true
function apiAxios(method, api, type, params, success, failure) {
    if (type === 'json') {
        if (params) {
            params = filterNull(params)
        }
    } else if (type === 'formData') {
        const _params = new URLSearchParams()
        if (params) {
            params = filterNull(params)
            Object.keys(params).forEach(key => _params.append(key, params[key]))
            params = _params
        }
    }

    axios({
        method: method,
        url: api,
        headers: type === 'json' ? { 'Content-Type': 'application/json; charset=UTF-8' } : type === 'formData' ? { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' } : { 'Content-Type': 'multipart/form-data; charset=UTF-8' },
        data: method === 'POST' || method === 'PUT' ? params : null,
        dataType: 'json',
        params: method === 'GET' || method === 'DELETE' ? params : null,
        baseURL: '',
        withCredentials: false
    }).then(function (res) {
        if (res.data.code === 0) {
            if (success) {
                success(res.data)
            }
        } else {
            if (failure) {
                failure(res.data)
            }
        }
    }).catch(function (err) {
        throw new Error(err)
    })
}

export default {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure)
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}