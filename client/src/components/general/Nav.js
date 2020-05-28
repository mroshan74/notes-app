import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../../redux/actions/loginsAction'

function Nav(props) {
    const change = localStorage.getItem('token')
    const handleLogout = () => {
        props.dispatch(startLogout())
    }
    console.log('nav----',change)
    console.log('USER--------',props.user)
    return (
        <div>
            {change ? 
            (
                <Fragment>
                    <Link to='/'>Home</Link> -
                    <Link to='/users/notes'>Notes</Link> -
                    <Link to='/users/categories'>Categories</Link> -
                    <Link to='#' onClick = {handleLogout}>Logout</Link>
                </Fragment>
            ):(
                <Fragment>
                    <Link to='/'>Home</Link> -
                    <Link to='/users/login'>Login</Link> - 
                    <Link to='/users/register'>Register</Link>
                </Fragment>
            )
            }
            <br/><br/>
            <p>{props.user._id && <span>{props.user.username} - {props.user.email}</span>}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.login
    }
}

export default connect(mapStateToProps)(Nav)
