import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: ${palette('grayscale', 2)};
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 0)};
    }
  }
`

const SecondaryNavigation = (props) => {
  return (
    <Nav {...props}>
      <li><Link to="/postpages/1" exact activeClassName="active">Post 1</Link></li>
      <li><Link to="/postpages/2" exact activeClassName="active">Post 2</Link></li>
    </Nav>
  )
}

SecondaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default SecondaryNavigation
