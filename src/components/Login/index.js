import React, { Component } from "react";
import "./Login.css";
import Input from '../Form/Input'
import {call} from "../../api/api";

class Login extends Component {
  constructor(props) {
    super(props);

    // Here you'll need to set up the state of the form
    this.state = {
        email: '',
        password: ''
    };
  }

  handleChange = (event) => {
      event.preventDefault();
    /*
      explanation about the expression: change[name]
      change.email = event  // the change variable is an object and so you can add a property by doing .name_of_the_property
      change["email"] = event // the change variable is an object and so you can add a property by doing ["string_with_the_name_of_the_property_notice_the_quotes"]
      change[name] = event // the change variable is an object and so you can add a property by doing [variable_with_the_name_of_the_property_notice_no_quotes]
    */this.setState({[event.target.name]: event.target.value });

    //You need to set the change object in the state of the component
  };

  handleSubmit = async e => {
    // When the button(which type=submit) is clicked, we can stop the form submission by doing:
    e.preventDefault();

    const { history } = this.props;
    const { password, email } = this.state;
    call(password,email,history)

  };

  render() {
    return (
      <form className="form-signin" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <h2 className="form-signin-heading">Please sign in</h2>
        </div>
        <div className="form-group">
            <Input name='email' onChange={e => this.handleChange(e)} type='email' value={this.state.email}/>
            <Input name='password' onChange={e => this.handleChange(e)} type='password' value={this.state.password}/>
        </div>
        <button type="submit" className="btn btn-lg btn-primary btn-block">
          Sign in
        </button>
      </form>
    );
  }
}

export default Login;
