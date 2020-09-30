import React from 'react';

export default class Search extends React.Component {
    state = {
        search: '',
    }

    handleSubmit (e) {
        e.preventDefault();
        //TODO: validation!
        this.props.handleSearch(this.state.search);
    }

    render() {
        return (
            <form onSubmit={e=>this.handleSubmit(e)}>
                <input value={this.state.search} onChange={e=>this.setState({search: e.target.value})}/>
            </form>
        )
    }

}