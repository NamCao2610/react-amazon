import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth, db } from './firebase'

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(authUser => {
                history.push('/')
            }).catch(err => {
                alert(err.message);
            })
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(err => alert(err.message));
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/263px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Đăng nhập</h1>

                <form>
                    <h5>Email: </h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password: </h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type="submit" className="login__signInButton" onClick={signIn}>Đăng nhập</button>
                </form>

                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
                </p>

                <button type="submit" className="login__registerButton" onClick={register}>Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
