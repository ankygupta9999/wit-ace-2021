import React from 'react'


const ShowText = (props) => {
    console.log(props);
    return <h1> {props.name} {props.surname} </h1>;
}

export default ShowText;