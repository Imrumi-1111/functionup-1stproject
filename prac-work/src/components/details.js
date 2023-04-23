import { Fragment } from 'react'
export default function Details(props) {
    return (
        <Fragment>
         <p>This site is all about your mental health.</p>
         <p>We will ask you some question which you have to 
            answer to detect your problem</p>
         <ol>
            <li>Do you feel lonely in a {props.name}?</li>
            <li>Do you feel {props.state} to communicate with people? </li>
         </ol>
        </Fragment>
       
    )

}
