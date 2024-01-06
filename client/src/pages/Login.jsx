import React from 'react'
import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <img src='../src/assets/images/logo.png' className='fav'></img>
        <h4>LOGIN</h4>
        <FormRow type='email' name='email' defaultValue='admin@user.com' />
        <FormRow type='password' name='password' defaultValue='password' />
        <button type='submit' className='btn btn-block'>
          submit
        </button>
        <button type='button' className='btn btn-block'>
          explore the app
        </button>
        <p>Not a Member Yet ?
        <Link to='/register' className='member-btn'>Register</Link>
        </p>
      </form>
    </Wrapper>
  )
}
export default Login