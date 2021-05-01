import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class login extends Component {
    constructor(props) {
      super(props);
  
      this.onChangeUsername = this.onChangeUsername.bind(this);
      this.omchangePassword = this.onChangePassword.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  
      this.state = {
        username: '',
        password: ''
      }
    }
  
    onChangeUsername(e) {
      this.setState({
        username: e.target.value
      })
    }
   
    onChangePassword=(e)=> {
        this.setState({
            password: e.target.value
        })
    }

    onSubmit(e) {
      e.preventDefault();
  
      const user = {
        username: this.state.username,
        password: this.state.password
      }
  
      console.log(user);
  
     
    }
  
    render() {
    
      return (
        <div>
          <h3 style={{textAlign:'center',color:'white'}}>Login Yourself</h3>
          <form onSubmit={this.onSubmit}>
            <div className="form-group" style={{color:'white'}}> 
              <label>Username: </label>
              <input  type="text"
                  required
                  className="form-control"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.onChangeUsername}
                  />
            </div>
            <div className="form-group" style={{color:'white'}}> 
              <label>Password: </label>
              <input  type="text"
                  required
                  className="form-control"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChangePassword}
                  />
            </div>

            <div className="form-group">
            <Link to="/main2" className="nav-link">Login</Link>
            </div>
          </form>
        </div>
      )
    }
  }