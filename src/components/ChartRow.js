import React from 'react';


function ChartRow(props){
    console.log(props);
    return (
            
                <tr>
                    <td>{props.name}</td>
                    <td>{props.id}</td>
                    <td>{props.description}</td>
                </tr>
            )
    }
    
        
export default ChartRow;