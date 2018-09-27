import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class TopBarMarkup extends Component {
  static propTypes = {
    match: PropTypes.shape({
      path: PropTypes.string
    }),
    withMargin: PropTypes.bool
  }

  isActive(path) {
    return path === this.props.match.path
  }

  render() {
    return (
      <div className="TopBar">
        <Navbar staticTop className={`TopBar__navbar ${this.props.withMargin ? '' : 'TopBar__navbar--withoutMargin'}`}>
          <Navbar.Header className='TopBar__header'>
            <Navbar.Brand className='TopBar__brand'>Вершины-тысячники Среднего Урала</Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem href="/" active={this.isActive('/')}>Карта</NavItem>
            <NavItem href="/summits" active={this.isActive('/summits')}>Вершины</NavItem>
            <NavItem href="/climbs" active={this.isActive('/climbs')}>Восходители</NavItem>
            <NavItem href="/about" active={this.isActive('/about')}>О проекте</NavItem>
            <NavItem href="/profile" active={this.isActive('/profile')}>Профиль</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export const TopBar = withRouter(TopBarMarkup)
