import * as React from 'react'
import ModelDetails from './ModelDetails'
import {connect} from 'react-redux'


const data = { "Ivel Z3": { manufacturer: "Ivasim", year: 1969, origin: "Croatia" },
 "Bally Astrocade": { manufacturer: "Bally Consumer Products", year: 1977, origin: "USA" },
  "Sord M200 Smart Home Computer": { manufacturer: "Sord Computer Corporation", year: 1971, origin: "Japan" },
   "Commodore 64": { manufacturer: "Commodore", year: 1982, origin: "USA" } }

   const dataKeys = Object.keys(data);
   const dataToArray = dataKeys.map((element) => {
     return {name:element,...data[element]}
   })
// //    console.log(dataToArray);

class ComputersList extends React.Component {
    state = {
        value: ''
    }

    updateSelection = this.updateSelection.bind(this);

    updateSelection(event) {
        this.setState({value: event.target.value});
      }

    handleClick=() => {
        console.log(this.state)
        this.props.dispatch({
            type:'ADD_MODEL',
            payload:{
                name:this.state
            }
        })

    }  

   


    render() {
        return(
    <div>
       {/* <ModelDetails props={this.model}/> */}
        <select value = {this.state.value} onChange={this.updateSelection}>

            <option value=''>--Pick a model--</option>

            {dataToArray.map(model=><option key={model.name} value={model.name}>{`${model.name} (${model.year})`}</option>)}
            
      </select>
      <button onClick={this.handleClick}>Button</button>
      
    </div>
  
        )  
    }
 
}

export default connect(null,null)(ComputersList)