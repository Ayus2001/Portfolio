import React from 'react'
import propTypes from 'prop-types'
import { Link } from 'react-router-dom';
function Nav(props){
    return(
        <>
       
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="Intro/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="Education/">{props.t1}</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="Skill/">{props.t3}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to='Experience/'aria-disabled="false">{props.t4}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="Project/">{props.t5}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="contact/">{props.t6}</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        </>
    )
}
export default Nav;
