import React, { Component } from 'react';
import './App.css';

const data = { "Ivel Z3": { manufacturer: "Ivasim", year: 1969, origin: "Croatia" },
 "Bally Astrocade": { manufacturer: "Bally Consumer Products", year: 1977, origin: "USA" },
  "Sord M200 Smart Home Computer": { manufacturer: "Sord Computer Corporation", year: 1971, origin: "Japan" },
   "Commodore 64": { manufacturer: "Commodore", year: 1982, origin: "USA" } }

  
const dataKeys = Object.keys(data);
const dataToArray = dataKeys.map((element) => {
  return {name:element,year: data[element].year}
})

console.log(dataToArray);


class App extends Component {

  
  render() {
    return (
      <div className="App">
        <select>
          <option value=''>--Pick a model--</option>
          {dataToArray.map(model=><option key={model.name} value={model.name}>{`${model.name} (${model.year})`}</option>)}
        </select>
      </div>
    );
  }
}

export default App;
