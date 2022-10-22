import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/UserContext';
import './Signup.css'

const Signup = () => {

    const [error, setError] = useState(null);
    
    const {createUser} = useContext(AuthContext);

    const handleSubmit = (event) => {
        
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirmPass.value;

        if(password.length < 6){
            setError('Password must be at least 6 character long.');
            return setError;
        }

        if(password !== confirm){
            setError('Your password did not match.')
            return setError;
        }

        createUser(email, password)
        .then( result  => {
            const user = result.user;
            form.reset()
            
          })
          .catch(error => {
             const setError = error.message;
             console.error(error);
          });

    }


    return (
        <div className='form-container'>
        <h1 className='form-title'>Sign Up</h1>
        <form onSubmit={handleSubmit}>
            
            <div className="form-control">
                <label htmlFor='name'>Name</label>
                <input type="text" name='name' />
            </div>

            <div className="form-control">
                <label htmlFor='imageUrl'>Image URL</label>
                <input type="text" name='imageUrl'/>
            </div>

            <div className="form-control">
                <label htmlFor='email'>Email</label>
                <input type="email" name='email' required />
            </div>
            
            <div className="form-control">
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" required />
            </div>
            
            <div className="form-control">
                <label htmlFor='confirmPass'>Confirm Password</label>
                <input type="password" name="confirmPass" required />
            </div>           
            
            <div>
                <button className="submit-btn" type="submit">Sign Up</button>
            </div>

            <small style={{marginLeft: '30%'}}>Already Have An Account? <Link to='/login' style={{color: 'orange'}}>Login</Link></small>

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

export default Signup;