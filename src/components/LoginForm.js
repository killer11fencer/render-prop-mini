import React from 'react'
import Form from './Form'

export default function LoginForm () {
    return <Form render={(formData)=>{
        return <div><h1>Login Form</h1>
        <input type='text' name='email' onChange={formData.handleChange}/>
        <input type='text' name='password' onChange={formData.handleChange} />
        <button onClick={formData.handleSubmit}>Login</button>
        </div>
    }}/>;

}