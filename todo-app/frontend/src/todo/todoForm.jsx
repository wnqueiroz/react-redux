import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount() {
        this.props.search()
    }

    keyHandler(e) {
        switch (e.key) {
            case 'Enter':
                e.shiftKey ? this.props.handleSearch() : this.props.handleAdd()
                break;
            case 'Escape':
                this.props.handleClear()
                break;
        }
    }

    render() {
        return (
            <div role='form' className='todoForm' >
                <Grid cols='12 9 10'>
                    <input id="description" className="form-control" placeholder="Adicione uma tarefa"
                        onChange={this.props.handleChange}
                        onKeyUp={this.keyHandler}
                        value={this.props.description} />
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch} />
                    <IconButton style='default' icon='close' onClick={this.props.handleClear} />
                </Grid>
            </div>
        )
    }
}