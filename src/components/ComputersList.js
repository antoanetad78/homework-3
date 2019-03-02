import React, {Component} from 'react'

export default class ComputersList extends Component {
    state = {
        value: ''
    }

    updateSelection = this.updateSelection.bind(this);

    updateSelection(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return(
            <select value = {this.state.value} onChange={this.updateSelection}>
        <option value=''>--Pick a model--</option>
        {this.props.data.map(model=><option key={model.name} value={model.name}>{`${model.name} (${model.year})`}</option>)}
      </select>
        )  
    }
 
}