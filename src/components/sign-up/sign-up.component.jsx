import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form/form-input.component'
import CustomButton from '../custom-buttons/custom-button.components';
import { auth , createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Passwords don't match - please check");
            return;
        } 
        
        try {
            //destructuring to get the user object which then feeds into the createUserProfileDocument function
            const { user } = await auth.createUserWithEmailAndPassword(email, password); 

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });

        } catch (error) {
            console.error(error);
        }
    };

    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    };

    render() {
        return(
            <div className='signup'>
                <h2>I do not have an account</h2>
                <p>Sign up with your email and password</p>

                <form className='signup-form' onSubmit={this.handleSubmit}>
                   <FormInput name='displayName' type='text' value={this.state.displayName} onChange={this.handleChange} label='Display Name' required />
                   <FormInput name='email' type='email' value={this.state.email} onChange={this.handleChange} label='Email' required />
                   <FormInput name='password' type='password' value={this.state.password} onChange={this.handleChange} label='Password' required />
                   <FormInput name='confirmPassword' type='password' value={this.state.confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                   <CustomButton type='submit'>Sign Up</CustomButton>
                </form>

            </div>
        )
    }

}

export default SignUp;