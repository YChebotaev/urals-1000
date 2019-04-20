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

  isActive (path) {
    return path === this.props.match.path
  }

  render () {
    return (
      <div className='TopBar'>
        <Navbar
          staticTop
          className={`TopBar__navbar ${
            this.props.withMargin ? '' : 'TopBar__navbar--withoutMargin'
          }`}
        >
          <Navbar.Header className='TopBar__header'>
            <Navbar.Brand className='TopBar__brand'>
              Вершины-тысячники Среднего Урала
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem
              href='/'
              active={this.isActive('/')}
              className={`TopBar__nav-item ${
                this.isActive('/') ? 'TopBar__nav-item--active' : ''
              }`}
            >
              Карта
            </NavItem>
            <NavItem
              href='/summits'
              active={this.isActive('/summits')}
              className={`TopBar__nav-item ${
                this.isActive('/summits') ? 'TopBar__nav-item--active' : ''
              }`}
            >
              Вершины
            </NavItem>
            <NavItem
              href='/climbs'
              active={this.isActive('/climbs')}
              className={`TopBar__nav-item ${
                this.isActive('/climbs') ? 'TopBar__nav-item--active' : ''
              }`}
            >
              Восходители
            </NavItem>
            <NavItem
              href='/about'
              active={this.isActive('/about')}
              className={`TopBar__nav-item ${
                this.isActive('/about') ? 'TopBar__nav-item--active' : ''
              }`}
            >
              О проекте
            </NavItem>
            <NavItem
              href='/profile'
              active={this.isActive('/profile')}
              className={`TopBar__nav-item ${
                this.isActive('/profile') ? 'TopBar__nav-item--active' : ''
              }`}
            >
              Профиль
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export const TopBar = withRouter(TopBarMarkup)
