import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Flag, Grid, Card, Image, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';


class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      client: this.props.clients.find(item => item._id === this.props.match.params.id),
    };
  }

  componentDidMount() {
  }

  render() {
    return (
            <Grid>
                <Grid.Column width={6} />
                <Grid.Column width={4}>
                    <Card style={{ marginTop: '2%' }}>
                        <Image centered src={this.state.client.general.avatar} />
                        <Card.Content>
                            <Card.Header>
                                { this.state.client.general.firstName }
                                { this.state.client.general.lastName }
                                <Flag name={this.state.client.address.country.toLowerCase()} />
                            </Card.Header>
                            <Card.Description>
                                <h3>
                                    Job
                                </h3>
                                <div>
             Title: { this.state.client.job.title }
                                </div>
                                <div>
             Company: { this.state.client.job.company }
                                </div>
                                <h3>
                                    Contact
                                </h3>
                                <div>
             Email: { this.state.client.contact.email }
                                </div>
                                <div>
             Phone: { this.state.client.contact.phone }
                                </div>
                                <h3>
                                    Address
                                </h3>
                                <div>
             Street: { this.state.client.address.street }
                                </div>
                                <div>
             City: { this.state.client.address.city }
                                </div>
                                <div>
             ZipCode: { this.state.client.address.zipCode }
                                </div>
                                <div>
             Country: { this.state.client.address.country }
                                </div>
                            </Card.Description>
                        </Card.Content>
                        <Link to="/">
                            <Button inverted color="red">
                                Назад
                            </Button>
                        </Link>
                    </Card>
                </Grid.Column>
            </Grid>
    );
  }
}


Detail.propTypes = {
  match: PropTypes.object,
  clients: PropTypes.array,
};


const mapStateToProps = state => ({ clients: state.clients });
export default connect(mapStateToProps)(Detail);
