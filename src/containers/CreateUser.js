import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addUser } from '../redux/actions/index';


class CreateUser extends Component {
  handelSubmit = (event) => {
    event.preventDefault();

    const user = {
      general: {
        firstName: event.target.name.value,
        lastName: event.target.Lname.value,
        avatar: event.target.Avatar.value,
      },
      job: {
        company: event.target.Company.value,
        title: event.target.Title.value,
      },
      contact: {
        email: event.target.email.value,
        phone: event.target.phone.value,
      },
      address: {
        street: event.target.street.value,
        city: event.target.city.value,
        zipCode: event.target.zipCode.value,
        country: event.target.country.value,
      },
    };

    this.props.Create(user);
  }

  render() {
    return (
          <Grid>
                  <Form className="ui form" onSubmit={this.handelSubmit} style={{ marginTop: '5%' }}>
                      <h3>General Info</h3>
                      <Form.Field>
                          <label htmlFor="name">Name: </label>
                          <input name="name" type="text" required />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="Lname">Lname: </label>
                          <input name="Lname" type="text" />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="Avatar">Avatar urls: </label>
                          <input name="Avatar" type="text" />
                      </Form.Field>
                      <h3>Job: </h3>
                      <Form.Field>
                          <label htmlFor="Title">Title: </label>
                          <input name="Title" type="text" />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="Company">Company: </label>
                          <input name="Company" type="text" />
                      </Form.Field>
                      <h3>Contact: </h3>
                      <Form.Field>
                          <label htmlFor="email">E-mail: </label>
                          <input name="email" type="email" />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="phone">Phone: </label>
                          <input name="phone" type="text" />
                      </Form.Field>
                      <h3>Address</h3>
                      <Form.Field>
                          <label htmlFor="street">Street: </label>
                          <input name="street" type="text" />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="city">City: </label>
                          <input name="city" type="text" />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="zipCode">ZipCode: </label>
                          <input name="zipCode" type="text" required />
                      </Form.Field>
                      <Form.Field>
                          <label htmlFor="country">Country: </label>
                          <input name="country" type="text" />
                      </Form.Field>
                      <Button inverted color="green" type="submit" style={{ marginTop: '8%' }}> Create User </Button>
                      <Link to="/"><Button inverted color="red">Cansel</Button></Link>
                  </Form>
          </Grid>
    );
  }
}

CreateUser.propTypes = {
  Create: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({ Create: bindActionCreators(addUser, dispatch) });


export default connect(null, mapDispatchToProps)(CreateUser);
