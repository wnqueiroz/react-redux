import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Grid from '../common/layout/grid'
import Input from '../common/form/input'
import { form as formName } from './billingCycleForm'

class ItemList extends Component {

    add = (index, item = {}) => {
        const { readOnly = false, arrayInsert, field } = this.props
        if (!readOnly) arrayInsert(formName, field, index, item)
    }

    remove = index => {
        const { readOnly = false, list = [], arrayRemove, field } = this.props
        if (!readOnly && list.length > 1) arrayRemove(formName, field, index)
    }

    renderRows = () => {
        const { list = [], field } = this.props

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field
                        name={`${field}[${index}].name`}
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td>
                    <Field
                        name={`${field}[${index}].value`}
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
                    <button
                        className='btn btn-danger'
                        type='button'
                        onClick={() => this.remove(index)}
                    >
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        const { cols, legend } = this.props
        return (
            <Grid cols={cols}>
                <fieldset>
                    <legend>{legend}</legend>
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

const mapDispatchToProps = dispatch => bindActionCreators({
    arrayInsert,
    arrayRemove
}, dispatch)

export default connect(null, mapDispatchToProps)(ItemList)