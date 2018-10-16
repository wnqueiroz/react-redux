import axios from 'axios'

import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showtabs, selectTab } from '../common/tab/tabActions'

import { tabs } from './billingCycle'

const BASE_URL = 'http://localhost:3003/api'

const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export const getList = () => {
  const request = axios.get(`${BASE_URL}/billingCycles`)
  return {
    type: 'BILLING_CYCLES_FETCHED',
    payload: request
  }
}

export const create = values => submit(values, 'post')

export const update = values => submit(values, 'put')

export const remove = values => submit(values, 'delete')

const submit = (values, method) => {
  return dispatch => {
    const { _id: id = '' } = values
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
      .then(() => {
        toastr.success('Sucesso', 'Operação realizada com sucesso.')
        dispatch(init())
      })
      .catch(error =>
        error.response.data.errors.forEach(error => toastr.error('Erro', error))
      )
  }
}

export const showUpdate = billingCycle => {
  return [
    showtabs(tabs.TAB_UPDATE),
    selectTab(tabs.TAB_UPDATE),
    initialize('billingCycleForm', billingCycle)
  ]
}

export const showDelete = billingCycle => {
  return [
    showtabs(tabs.TAB_DELETE),
    selectTab(tabs.TAB_DELETE),
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
