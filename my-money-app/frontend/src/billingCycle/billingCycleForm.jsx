import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init } from './billingCycleActions'

import LabelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form action='' onSubmit={handleSubmit}>
                <div className='box-body'>

                    <Field name='name'
                        component={LabelAndInput}
                        label='Nome'
                        cols='12 4'
                        placeholder='Informe o nome'
                    />
                    <Field
                        name='month'
                        component={LabelAndInput}
                        label='Mês'
                        cols='12 4'
                        placeholder='Informe o mês'
                        type='number'
                    />
                    <Field
                        name='year'
                        component={LabelAndInput}
                        label='Ano'
                        cols='12 4'
                        placeholder='Informe o ano'
                        type='number'
                    />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}


BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycleForm)
