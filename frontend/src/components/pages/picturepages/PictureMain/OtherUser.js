// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'

const FlexContainer = styled.div`
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
`
const FlexRow = styled.div`
  flex-direction: row;
`

const UserBox = styled.div`

    padding: 2px;
    background-color: #9D8420;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 30px;
    margin-left: 30px;
    padding-right: 10px;
    padding-left: 10px;

  &:hover {
    cursor: pointer;
    cursor: hand;
 }
 &:active {
   color: black;
   background-color: #DDBA2C
 }
`

class OtherUser extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }


  sendtocheckUser(e){
    e.preventDefault();
    this.props.checkUser(this.props.user);
  }

  render(){
    return(
      <AlignContainer>
        <UserBox onClick={(e)=>this.sendtocheckUser(e)}>
          <h3>{this.props.user}</h3>
        </UserBox>
      </AlignContainer>
    )
  }
}

export default OtherUser
