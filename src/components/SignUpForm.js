import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Grid, Form, Button } from 'semantic-ui-react';

class SignUpForm extends Component {
  componentDidMount() {

  }

  OnSubmit = (event) => {
    if (event.target.password.value === event.target.ConfirmPassword.value) {
      const user = {
        Name: event.target.name.value,
        Email: event.target.email.value,
        password: event.target.password.value,
      };
      this.props.SignUp(user);
    } else {
      console.log('pasword Error');
    }
  }

  render() {
    return (
            <Grid>
                    <Form onSubmit={this.OnSubmit}>
                        <Form.Field>
                              <label htmlFor="name">Name: </label>
                              <input name="name" type="text" required />
                        </Form.Field>
                        <Form.Field>
                              <label htmlFor="email">Email: </label>
                              <input name="email" type="email" required />
                        </Form.Field>
                        <Form.Field>
                              <label htmlFor="password">Password: </label>
                              <input name="password" type="password" required />
                        </Form.Field>
                        <Form.Field>
                              <label htmlFor="ConfirmPassword">Confirm password: </label>
                              <input name="ConfirmPassword" type="password" required />
                        </Form.Field>
                            <Button inverted color="green">Sign Up</Button>
                    </Form>
            </Grid>
    );
  }
}

SignUpForm.propTypes = {
  SignUp: PropTypes.func,
};

export default SignUpForm;