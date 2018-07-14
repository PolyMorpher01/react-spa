import React, { Component } from 'react';



  

function Items(props){
    return (
        <tr>
            <td>{props.data.data.id}</td>
            <td>{props.data.data.task}</td>
            <td>{props.data.data.isCompleted}</td>
            <td>{props.data.data.createdDate}</td>
        </tr>
    )
}

export default Items;