import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Grid, Form, Button } from 'semantic-ui-react';

class SignInForm extends Component {
  componentDidMount() {

  }

  OnSubmit = (event) => {
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    this.props.SignIn(user);
  }

  render() {
    return (
        <Grid>
            <Grid.Column width={6} />
            <Grid.Column width={4}>
                <Form onSubmit={this.OnSubmit}>
                    <Form.Field>
                        <label htmlFor="email">Email: </label>
                        <input name="email" type="email" required />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor="password">Password: </label>
                        <input name="password" type="password" required />
                    </Form.Field>
                        <Button inverted color="green">Sign In</Button>
                </Form>
            </Grid.Column>
        </Grid>
    );
  }
}

SignInForm.propTypes = {
  SignIn: PropTypes.func,
};

export default SignInForm;