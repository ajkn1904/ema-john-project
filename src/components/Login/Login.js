import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Login.css'

const Login = () => {
    
    const [error, setError] = useState(null);
    const {logIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;


        logIn(email, password)
        .then( result  => {
            const user = result.user;
            form.reset();
            navigate(from, {replace: true});
            
          })
          .catch(error => {
             const setError = error.message;
             console.error(error);
          });

    }

    return (
        <div className='login-form-container'>
            <h1 className='form-title'>Log In</h1>
            <form onSubmit={handleSubmit}>
                
                <div className="form-control">
                    <label htmlFor='email'>Email</label>
                    <input type="email" name='email' required />
                </div>
                
                <div className="form-control">
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required />
                </div>
                
                
                <div>
                    <button className="submit-btn" type="submit">Log In</button>
                </div>

                <small style={{marginLeft: '25%'}}>New to Ema-john? <Link to='/signup' style={{color: 'orange'}}>Create New Account</Link>
                </small>

                <p style={{color: 'red', textAlign: 'center'}}>{error}</p>

                <div className='or-container'>
                    <hr/>
                    <p>or</p>
                    <hr/>
                </div>

                <div>
                    <button className="other-submit-btn" type="submit">Continue with Google</button>
                </div>

                <div>
                    <button className="other-submit-btn" type="submit">Continue with Github</button>
                </div>


            </form>
        </div>
    );
};

export default Login;