import axios from 'axios'

import { toastr } from 'react-redux-toastr'

const BASE_URL = 'http://localhost:3003/api'

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
export const create = values => {
    const request = axios.post(`${BASE_URL}/billingCycles`, values)
        .then(() => toastr.success('Sucesso', 'Operação realizada com sucesso.'))
        .catch(error => error.response.data.errors.forEach(error => toastr.error('Erro', error)))
    return {
        type: 'TEMP',
        payload: request
    }
}