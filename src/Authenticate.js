import React from 'react';
import firebase from 'firebase';
// import 'authenticate.css';

class Authenticate extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email:'',
            password:'',
            error:'',
        }
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleCreateUSer = this.handleCreateUser.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleEmailChange(e){
        this.setState({email:e.target.value});
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value});
    }
    handleCreateUser(e){
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})
            
        });
    }
    handleLogin(e){
        firebase.auth().
        signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(error => {
            this.setState({error: error.message})
            
        });
    }

    render(){
        return(
            <form>
                <div class="form-group row">{this.state.error}
                    <label class="col-sm-2 col-form-label">Email address</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange} />
                        <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label" for="exampleInputPassword1">Password</label>
                    <div class="col-sm-10">
                        <input type="password" class="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} />
                    </div>
                </div>
                <button type="button" class="btn btn-primary m-2" onClick={this.handleCreateUSer}>New user</button>
                <button type="button" class="btn btn-primary m-2" onClick={this.handleLogin}>Login</button>
            </form>
        );
    }
}

export default Authenticate;

