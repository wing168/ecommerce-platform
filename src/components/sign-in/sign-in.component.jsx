import React from 'react';

import FormInput from '../form/form-input.component'
import CustomButton from '../custom-buttons/custom-button.components';

import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            })
        } catch (error) {
            console.error(error);
        }

        this.setState({
            email: '',
            password: ''
        })


    }

    handleChange = (e) => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <p>Sign in with email and password</p>

                <form className='form-input' onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label='Email' required />
                    <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange} label='Password' required />

                    <div className="button">
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}



export default SignIn;