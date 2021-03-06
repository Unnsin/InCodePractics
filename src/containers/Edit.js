import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { editUser } from '../redux/actions/index';

const FormMargin = '5%';
const ButtonPadding = '8%';

class Edit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.clients[this.props.match.params.id],
    };
  }

  handelSubmit = (event) => {
    event.preventDefault();

    const user = {
      _id: this.state.client._id,
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

    this.props.Update(user);
  }

  render() {
    return (
          <Grid>
                  <Form onSubmit={this.handelSubmit} style={{ marginTop: FormMargin }}>
                      <div>
                          <h3>General Info</h3>
                          <Form.Field>
                              <label htmlFor="name">Name: </label>
                              <input name="name" defaultValue={this.state.client.general.firstName} type="text" required />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="Lname">Lname: </label>
                              <input name="Lname" defaultValue={this.state.client.general.lastName} type="text" />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="Avatar">Avatar urls: </label>
                              <input name="Avatar" defaultValue={this.state.client.general.avatar} type="text" />
                          </Form.Field>
                          <h3>Job: </h3>
                          <Form.Field>
                              <label htmlFor="Title">Title: </label>
                              <input name="Title" defaultValue={this.state.client.job.title} type="text" />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="Company">Company: </label>
                              <input name="Company" defaultValue={this.state.client.job.company} type="text" />
                          </Form.Field>
                          <h3>Contact: </h3>
                          <Form.Field>
                              <label htmlFor="email">E-mail: </label>
                              <input name="email" defaultValue={this.state.client.contact.email} type="email" />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="phone">Phone: </label>
                              <input name="phone" defaultValue={this.state.client.contact.phone} type="text" />
                          </Form.Field>
                          <h3>Address</h3>
                          <Form.Field>
                              <label htmlFor="street">Street: </label>
                              <input name="street" defaultValue={this.state.client.address.street} type="text" />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="city">City: </label>
                              <input name="city" defaultValue={this.state.client.address.city} type="text" />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="zipCode">ZipCode: </label>
                              <input name="zipCode" defaultValue={this.state.client.address.zipCode} type="text" required />
                          </Form.Field>
                          <Form.Field>
                              <label htmlFor="country">Country: </label>
                              <input name="country" defaultValue={this.state.client.address.country} type="text" />
                          </Form.Field>
                          <Button inverted color="green" type="submit" style={{ marginTop: ButtonPadding }}>Edit Info </Button>
                          <Link to="/"><Button inverted color="red">Cansel</Button></Link>
                      </div>
                  </Form>
          </Grid>
    );
  }
}


Edit.propTypes = {
  match: PropTypes.object,
  Update: PropTypes.func,
  clients: PropTypes.object,
};

const mapStateToProps = state => ({ clients: state.clients.clients });

const mapDispatchToProps = dispatch => ({ Update: bindActionCreators(editUser, dispatch) });


export default connect(mapStateToProps, mapDispatchToProps)(Edit);
