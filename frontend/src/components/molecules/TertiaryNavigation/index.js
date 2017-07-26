import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Link } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  margin-top: 10px;
  margin-bottom: 10px;
  > :not(:first-child) {
    margin-left: 1rem;
  }
  a {
    font-weight: 300;
    color: #748FA9;
    background-color: #4C3957;
    padding: 5px;
    font-size: 1.25rem;
    &.active {
      color: ${palette('grayscale', 5)};
    }
  }
`

const TertiaryNavigation = (props) => {
  if (props.currentNav === 1){
    console.log("1");
    var nextnumber = props.currentNav + 1;
    var linkstringnext = "/postpages/"+nextnumber.toString();
    var linkstringlatest = "/postpages/"+props.latestNav.toString();
    return(
      <Nav {...props}>
        <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
        <li><Link to={linkstringnext} exact activeClassName="active">Next Post</Link></li>
        <li><Link to={linkstringlatest} exact activeClassName="active">Latest Post</Link></li>
      </Nav>
    )
  }
  if (props.currentNav === props.latestNav){
    console.log("2");
    var previousnumber = props.latestNav - 1;
    var linkstringprevious = "/postpages/"+previousnumber.toString()
    return(
      <Nav {...props}>
        <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
        <li><Link to={linkstringprevious} exact activeClassName="active">Previous Post</Link></li>
      </Nav>
    )
  }
  if (props.currentNav > 1){
    console.log("3");
    if (props.currentNav === props.latestNav - 1){
      console.log("4");
      var previousnumber = props.currentNav - 1;
      var linkstringprevious = "/postpages/"+previousnumber.toString();
      var nextnumber = props.currentNav + 1;
      var linkstringnext = "/postpages/"+nextnumber.toString();
      console.log("this is the value of linkstringprevious", linkstringprevious);
      return(
        <Nav {...props}>
          <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
          <li><Link to={linkstringprevious} exact activeClassName="active">Previous Post</Link></li>
          <li><Link to={linkstringnext} exact activeClassName="active">Latest Post</Link></li>
        </Nav>
      )
    }else{
      console.log("4");
      console.log("seriously im in 4");

      var previousnumber = props.currentNav - 1;
      var linkstringprevious = "/postpages/"+previousnumber.toString();
      var nextnumber = props.currentNav + 1;
      var linkstringnext = "/postpages/"+nextnumber.toString();
      var linkstringlatest = "/postpages/"+props.latestNav.toString();
      return(
        <Nav {...props}>
          <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
          <li><Link to={linkstringprevious} exact activeClassName="active">Previous Post</Link></li>
          <li><Link to={linkstringnext} exact activeClassName="active">Next Post</Link></li>
          <li><Link to={linkstringlatest} exact activeClassName="active">Latest Post</Link></li>
        </Nav>
      )
    }
  }
  if (props.currentNav > 1){
    console.log("6");
    return(
      <Nav {...props}>
        <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
        <li><Link to="/postpages/1" exact activeClassName="active">Post 1</Link></li>
        <li><Link to="/postpages/2" exact activeClassName="active">Post 2</Link></li>
      </Nav>
    )
  }
  return (
    <Nav {...props}>
      <li><Link to="/postsarchive" exact activeClassName="active">Archive</Link></li>
      <li><Link to="/postpages/1" exact activeClassName="active">Post 1</Link></li>
      <li><Link to="/postpages/2" exact activeClassName="active">Post 2</Link></li>
    </Nav>
  )
}

TertiaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default TertiaryNavigation
