import React, { Component } from 'react'

class BillingCycleList extends Component {
    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                </table>
                <tbody></tbody>
            </div>
        )
    }
}

export default BillingCycleList