import { Fragment } from 'react'
export default function Profilecard(props) {
    return(
        <Fragment>
            
            <h1>Designation: {props.designation}</h1>
            
            <p onClick ={props.onClickFunction}>Name: {props.name}</p>
            <p>Job description: {props.job}</p>
        </Fragment>

    )
}