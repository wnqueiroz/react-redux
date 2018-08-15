import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import {
    reset as resetForm,
    initialize
} from 'redux-form'
import { showtabs, selectTab } from '../common/tab/tabActions'

import { tabs } from './billingCycle'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = {}

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export const create = values => {
    return dispatch => {

        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(() => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(error => error.response.data.errors.forEach(error => toastr.error('Erro', error)))

    }
}
export const showUpdate = billingCycle => {
    return [
        showtabs(tabs.TAB_UPDATE),
        selectTab(tabs.TAB_UPDATE),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const init = () => {
    return [
        showtabs(tabs.TAB_LIST, tabs.TAB_CREATE),
        selectTab(tabs.TAB_LIST),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}