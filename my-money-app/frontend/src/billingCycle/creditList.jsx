import React, { Component } from 'react'
import { Field } from 'redux-form'

import Grid from '../common/layout/grid'
import Input from '../common/form/input'

class CreditList extends Component {

    renderRows = () => {
        return (
            <tr>
                <td>
                    <Field
                        name='credits[0].name'
                        component={Input}
                        placeholder='informe o nome'
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td>
                    <Field
                        name='credits[0].value'
                        component={Input}
                        placeholder='informe o valor'
                        readOnly={this.props.readOnly}
                    />
                </td>
                <td></td>
            </tr>
        )
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
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>{this.renderRows()}</tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

export default CreditList