import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabsContent from '../common/tab/tabsContent'
import TabContent from '../common/tab/tabContent'

import List from './billingCycleList'
import Form from './billingCycleForm'

import { init, create, update, remove } from './billingCycleActions'

export const tabs = {
    TAB_LIST: 'TAB_LIST',
    TAB_CREATE: 'TAB_CREATE',
    TAB_UPDATE: 'TAB_UPDATE',
    TAB_DELETE: 'TAB_DELETE',
}

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title='Ciclos de Pagamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label='Listar' icon='bars' target={tabs.TAB_LIST} />
                            <TabHeader label='Incluir' icon='plus' target={tabs.TAB_CREATE} />
                            <TabHeader label='Alterar' icon='pencil' target={tabs.TAB_UPDATE} />
                            <TabHeader label='Excluir' icon='trash-o' target={tabs.TAB_DELETE} />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={tabs.TAB_LIST}>
                                <List />
                            </TabContent>
                            <TabContent id={tabs.TAB_CREATE}>
                                <Form onSubmit={this.props.create} submitLabel='Incluir' />
                            </TabContent>
                            <TabContent id={tabs.TAB_UPDATE}>
                                <Form onSubmit={this.props.update} submitLabel='Alterar' submitClass='info' />
                            </TabContent>
                            <TabContent id={tabs.TAB_DELETE}>
                                <Form readOnly={true} onSubmit={this.props.remove} submitLabel='Excluir' submitClass='danger' />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    init,
    create,
    update,
    remove
}, dispatch)

export default connect(null, mapDispatchToProps)(BillingCycle)