import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Flag, Grid, Card, Image, Button } from 'semantic-ui-react';

const cardMargin = '2%';

class Detail extends Component {
  render() {
    return (
            <Grid>
                    <Card style={{ marginTop: cardMargin }}>
                        <Image centered src={this.props.client.general.avatar} />
                        <Card.Content>
                            <Card.Header>
                                { this.props.client.general.firstName }
                                { this.props.client.general.lastName }
                                <Flag name={this.props.client.address.country.toLowerCase()} />
                            </Card.Header>
                            <Card.Description>
                                <h3>
                                    Job
                                </h3>
                                <div>
             Title: { this.props.client.job.title }
                                </div>
                                <div>
             Company: { this.props.client.job.company }
                                </div>
                                <h3>
                                    Contact
                                </h3>
                                <div>
             Email: { this.props.client.contact.email }
                                </div>
                                <div>
             Phone: { this.props.client.contact.phone }
                                </div>
                                <h3>
                                    Address
                                </h3>
                                <div>
             Street: { this.props.client.address.street }
                                </div>
                                <div>
             City: { this.props.client.address.city }
                                </div>
                                <div>
             ZipCode: { this.props.client.address.zipCode }
                                </div>
                                <div>
             Country: { this.props.client.address.country }
                                </div>
                            </Card.Description>
                        </Card.Content>
                        <Link to="/">
                            <Button inverted color="red">
                                Назад
                            </Button>
                        </Link>
                    </Card>
            </Grid>
    );
  }
}

Detail.propTypes = {
  client: PropTypes.object,
};

export default Detail;