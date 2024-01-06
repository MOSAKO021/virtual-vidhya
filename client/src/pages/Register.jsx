import React from 'react';
import {Form, Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import {FormRow, Logo} from '../components'

const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <img src='../src/assets/images/logo.png' className='fav'></img>
        <h4>REGISTER</h4>
        <FormRow type="text" name="name" defaultValue="admin" />
        <FormRow type="text" name="lastName" labelText='lastname' defaultValue="user" />
        <FormRow type="text" name="location" defaultValue="earth" />
        <FormRow type="email" name="email" defaultValue="admin@user.com" />
        <FormRow type="password" name="password" defaultValue="password" />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <p>Already a Member ?
        <Link to='/login' className='member-btn'>Login</Link>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register