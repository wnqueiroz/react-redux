import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'
import ItemList from './itemList'
import Summary from './summary'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit, readOnly = false, submitClass = 'primary', submitLabel = 'Submit', credits, debts } = this.props

        return (
            <form action='' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name'
                        component={LabelAndInput}
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'
                        readOnly={readOnly}
                    />
                    <Field
                        name='month'
                        component={LabelAndInput}
                        label='Mês'
                        cols='12 4'
                        placeholder='Informe o mês'
                        type='number'
                        readOnly={readOnly}
                    />
                    <Field
                        name='year'
                        component={LabelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                        type='number'
                        readOnly={readOnly}
                    />
                    <Summary credit={1000} debt={100} />
                    <ItemList
                        list={credits}
                        field='credits'
                        legend='Créditos'
                        cols='12 6'
                        readOnly={readOnly} />
                    <ItemList
                        list={debts}
                        field='debts'
                        legend='Débitos'
                        cols='12 6'
                        showStatus={true}
                        readOnly={readOnly} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${submitClass}`}>
                        {submitLabel}
                    </button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

export const form = 'billingCycleForm'

BillingCycleForm = reduxForm({ form, destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector(form)

const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts'),
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)
