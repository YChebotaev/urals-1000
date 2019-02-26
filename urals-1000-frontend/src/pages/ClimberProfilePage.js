import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { compose } from "recompose";
import { Layout } from "../components/Layout";
import {
  PageHeader,
  Row,
  Col,
  Image,
  FormGroup,
  ControlLabel,
  FormControl,
  Button
} from "react-bootstrap";
import { withProfile } from "../HOCs/withProfile";
import { withRouter } from "react-router-dom";
import { ClimbSummitsList } from "../components/ClimbSummitsList";

class ClimberProfilePageMarkup extends Component {
  static propTypes = {
    profile: PropTypes.object, // TODO: More specified type
    summits: PropTypes.arrayOf(PropTypes.object), // TODO: More specified type
    fetchProfileById: PropTypes.func,
    match: PropTypes.object // TODO: More specified type
  };

  componentDidMount() {
    this.props.fetchProfileById(this.props.match.params.climberId);
  }

  renderAvatar() {
    if (this.props.profile.avatar) {
      return <Image src={this.props.profile.avatar.url} thumbnail alt="" />;
    }
    return null;
  }

  render() {
    return (
      <Layout>
        <div className="ProfilePage">
          <PageHeader>{this.props.profile.name}</PageHeader>
          <Row>
            <Col sm={4}>{this.renderAvatar()}</Col>
            <Col sm={8}>
              <ClimbSummitsList climbs={this.props.profile.climbs} />
            </Col>
          </Row>
        </div>
      </Layout>
    );
    return JSON.stringify(this.props.profile);
  }
}

export const ClimberProfilePage = compose(
  connect(),
  withProfile,
  withRouter
)(ClimberProfilePageMarkup);
