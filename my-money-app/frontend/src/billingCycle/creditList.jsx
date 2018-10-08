import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import { form as formName } from './billingCycleForm'

class CreditList extends Component {

    add = (index, item = {}) => {
        const { readOnly = false, arrayInsert } = this.props
        if (!readOnly) arrayInsert(formName, 'credits', index, item)
    }

    renderRows = () => {
        const { list = [] } = this.props

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field
                        name={`credits[${index}].name`}
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td>
                    <Field
                        name={`credits[${index}].value`}
                        component={Input}
                        placeholder='informe o valor'
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td>
                    <button
                        className='btn btn-success'
                        type='button'
                        onClick={() => this.add(index + 1)}
                    >
                        <i className='fa fa-plus'></i>
                    </button>
                    <button
                        className='btn btn-warning'
                        type='button'
                        onClick={() => this.add(index + 1, item)}
                    >
                        <i className='fa fa-clone'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        const { cols } = this.props
        return (
            <Grid cols={cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderRows()}</tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert }, dispatch)

export default connect(null, mapDispatchToProps)(CreditList)