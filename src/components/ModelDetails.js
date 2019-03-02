import * as React from 'react'

export default class ModelDetails extends React.Component{
    
    
    render(){
        if(this.props!==[]){
            return(
            
                <div>

                
                {this.props.map(element =><ul>
                    <li key={element.name}>Name: {element.name}</li>
                    <li key={element.manufacturer}>Manufacturer: {element.manufacturer}</li>
                    <li key={element.year}>Year: {element.year}</li>
                    <li key={element.origin}>Origin: {element.origin}</li>
                </ul>)}
            

        </div>
            
          
        )
        }
        return {}
        
    }
     
    
    


    
}