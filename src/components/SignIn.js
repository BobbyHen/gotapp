import React, { Component } from 'react';
import './formStyle.css';

class SignIn extends Component {
    
    constructor(props) {
        super(props);

        this.onChangeUserFirstName = this.onChangeUserFirstName.bind(this);
        this.onChangeUserLastName = this.onChangeUserLastName.bind(this);
        this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            user_firstname: '',
            user_lastname: '',
            user_password: '',
            user_email:'',
            user_type:'',
        }

    }
    onChangeUserFirstName(e) {
        this.setState({
            user_firstname: e.target.value
        });
    }

    onChangeUserLastName(e) {
        this.setState({
            user_lastname: e.target.value
        });
    }
    onChangeUserPassword(e) {
        this.setState({
            user_password: e.target.value
        });
    }
    onChangeUserEmail(e) {
        this.setState({
            user_email: e.target.value
        });
    }
    onChangeUserType(e) {
        this.setState({
            user_type: e.target.value
        });
    }

    onSubmit (e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`User first name: ${this.state.user_firstname}`);
        console.log(`User last name: ${this.state.user_lastname}`);
        console.log(`User password: ${this.state.user_password}`);
        console.log(`User email: ${this.state.user_email}`);
        console.log(`User type: ${this.state.user_type}`);

    }

    render () {
        return (
            <div>
                <h2> Fill out the form to be part of the family:</h2>
                <div className='form'>
                    <form onSubmit = {this.onSubmit}>
                        <label>First name: </label> 
                            <input type="text" className="form-control" name="firstName" value={this.state.user_firstname} onChange={this.onChangeUserFirstName} />  
                        
                        <label>Last Name: </label>
                            <input type="text" className="form-control" name="lastName" value={this.state.user_lastname} onChange={this.onChangeUserLastName}/>
                        
                        <label>Password: </label>
                            <input type="text" className="form-control" name="password" value={this.state.user_password} onChange={this.onChangeUserPassword}/>
                            
                        <label>E-mail: </label>
                            <input type="text" className="form-control" name="email" value={this.state.user_email} onChange={this.onChangeUserEmail}/>

                        <label>Type: </label>
                            <input type="text" className="form-control" name="type" value={this.state.user_type} onChange={this.onChangeUserType}/>

                        
                        <br /><br /><input type="submit" value="Submit" /><br /><br />
                    </form>
                </div>

            </div>
            
        );
        
        
    }
}


    


export default SignIn;