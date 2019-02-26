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
import { ClimbSummitsList } from "../components/ClimbSummitsList";
import { modalOpen } from "../redux/actions/modal";
import { PROFILE_PHOTO } from "../constants/modalNames";

class ProfilePageMarkup extends Component {
  static propTypes = {
    profile: PropTypes.object, // TODO: More specified type
    summits: PropTypes.arrayOf(PropTypes.object), // TODO: More specified type
    fetchProfileById: PropTypes.func
  };

  state = {
    name: ""
  };

  static getDerivedStateFromProps(props, state) {
    return {
      name: state.name || props.profile.name
    };
  }

  componentDidMount() {
    this.props.fetchProfileById(localStorage.getItem("userId"));
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleFormSumbit = e => {
    e.preventDefault();
    this.props.updateProfile(this.props.profile._id, this.state);
  };

  handleUploadClick = () => {
    this.props.dispatch(modalOpen(PROFILE_PHOTO));
  };

  renderAvatar() {
    if (this.props.profile.avatar) {
      return <Image src={this.props.profile.avatar.url} thumbnail alt="" />;
    } else {
      return <Button onClick={this.handleUploadClick}>Загрузить фото</Button>;
    }
  }

  render() {
    return (
      <Layout>
        <div className="ProfilePage">
          <PageHeader>{this.props.profile.name}</PageHeader>
          <Row>
            <Col sm={4}>{this.renderAvatar()}</Col>
            <Col sm={8}>
              <form
                id="201ed99e-213b-40a9-9dbd-9a3fa9f88c5d"
                onSubmit={this.handleFormSumbit}
              >
                <FormGroup>
                  <ControlLabel>Ваше имя</ControlLabel>
                  <FormControl
                    type="text"
                    value={this.state.name}
                    onChange={this.handleNameChange}
                  />
                </FormGroup>
                <Button type="submit" bsStyle="primary">
                  Сохранить
                </Button>
              </form>
              <ClimbSummitsList climbs={this.props.profile.climbs} />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export const ProfilePage = compose(
  connect(),
  withProfile
)(ProfilePageMarkup);
