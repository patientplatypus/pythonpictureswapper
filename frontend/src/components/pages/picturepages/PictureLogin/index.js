// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component, PropTypes } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom';
import PictureMain from '../PictureMain'
import '../PictureMain/main.css';

// import {withRouter} from 'react-router-dom';

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

const Hello = styled.div`
  color: tomato;
  max-width: 80px;
  background-color: blue;
`

const InputContainer = styled.div`
  margin: 5px;
  float: left;
  display: inline-block;
`

const TalkyContainer = styled.div`
  margin: 10px auto;
  font-size: 20px;
  font-weight: bold;
  color: #FFFFFF;
  background-color: #00171F;
  line-height: 30px;
  text-align: center;
  width: 80%;
  padding: 10px;
`


const styles = {
  images: {
    maxWidth: "80%",
    marginBottom: "5px"
  },
  iframe: {
    border: "0",
    borderWidth: "0",
    width: "225",
    height: "200",
    borderRadius: "5px"
  },
  smoker:{
    maxHeight: "222px",
    marginRight: "10px",
    marginBottom: "5px"
  },
  floatbuttons: {
    display: 'inline-block',
    marginLeft: '3px',
    marginRight: '3px',
    float: 'left',
    marginTop: "0px"
  },
  warning: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#5E6572",
    backgroundColor: '#B2B2B2',
    padding: '10px'
  }
}

class PictureLogin extends Component{

  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
    this.state = {
      name: '',
      password: '',
      redirect: ''
    }
  }



  registerClick(e){
    //usersuccessfullyadded useralreadyexists
    e.preventDefault();
    var self = this;
    self.setState({
      useralreadyexists: false,
      usernamenotfound: false,
      passwordsdontmatch: false
    })
    console.log('inside registerclick and name is: ', this.state.name, ' password is ', this.state.password);
    axios.post('https://blooming-ravine-86876.herokuapp.com/register', {
      name: this.state.name,
      password: this.state.password
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       if(response.data === 'usersuccessfullyadded'){
        // self.props.history.push('/picturemain')
        // access with this.props.location.state
        self.props.history.push({
          pathname: '/picturemain',
          state: {
            name: this.state.name
          }
        })
       }
       if(response.data === "useralreadyexists"){
         self.setState({
           useralreadyexists: true
         })
       }
      })
     .catch(()=>{
       console.log('python axios error');
     });
  }

  loginClick(e){
    //passwordsmatch passwordsdontmatch usernamenotfound
    e.preventDefault();
    var self = this;
    self.setState({
      usernamenotfound: false,
      useralreadyexists: false,
      passwordsdontmatch: false
    })
    console.log('inside loginclick and name is: ', this.state.name, ' password is ', this.state.password);
    axios.post('https://blooming-ravine-86876.herokuapp.com/login', {
      name: this.state.name,
      password: this.state.password
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       if(response.data === 'passwordsmatch'){
        console.log(self.props)
        // self.props.history.push('/picturemain')
        self.props.history.push({
          pathname: '/picturemain',
          state: {
            name: this.state.name
          }
        })
       }
       if (response.data === 'usernamenotfound'){
         self.setState({
           usernamenotfound: true
         })
       }
       if(response.data === 'passwordsdontmatch'){
         self.setState({
           passwordsdontmatch: true
         })
       }
     })
     .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
     });
  }

  resetRedirect(){
    this.setState({
      redirect: "",
      usernamenotfound: false,
      useralreadyexists: false,
      passwordsdontmatch: false,
    })
  }

  render(){
    return(
        <FlexContainer>
          <FlexRow>
            <div className="loginheader">Login to PictureSwapper!</div>
            <AlignContainer>
              <span>
                <InputContainer>
                  <input  value={this.state.name} onChange={(e)=>{this.setState({name: e.target.value})}} type="username" name="username" placeholder="User Name"/>
                </InputContainer>
                <InputContainer>
                  <input  value={this.state.password} onChange={(e)=>{this.setState({password: e.target.value})}} type="password" name="password" placeholder="Password"/>
                </InputContainer>
              </span>
            </AlignContainer>
          </FlexRow>
          <br/>
          <FlexRow>
            <AlignContainer>
              <span>
              <div className='buttonsmall' style={styles.floatbuttons} onClick={(e)=>this.registerClick(e)}>Register</div>
              <div className='buttonsmall' style={styles.floatbuttons} onClick={(e)=>this.loginClick(e)}>Login</div>
              </span>
            </AlignContainer>
          </FlexRow>
          {renderIf(this.state.usernamenotfound === true)(
          <FlexRow>
            <div style={styles.warning}>
              <p>Sorry that username was not found, please try again or register a new name</p>
            </div>
          </FlexRow>
          )}
          {renderIf(this.state.useralreadyexists === true)(
          <FlexRow>
            <div style={styles.warning}>
              <p>Sorry that user already exists, please try registering a unique username</p>
            </div>
          </FlexRow>
          )}
          {renderIf(this.state.passwordsdontmatch === true)(
          <FlexRow>
            <div style={styles.warning}>
              <p>Sorry that is the wrong password for that username</p>
            </div>
          </FlexRow>
          )}

          <FlexRow>
            <TalkyContainer>
              <p>Above you can log in to the latest small thing I&#39;ve been working on. Don&#39;t worry about the password, you can make a new log in using the register button if you haven&#39;t been here before. The idea is pretty simple. You use "platybucks" to trade pictures with other users. It&#39;s fun! Don&#39;t worry if this all sounds a bit confusing, I&#39;ll walk you through my little toy.</p>
              <p>Give it a try!</p>
            </TalkyContainer>
          </FlexRow>
        </FlexContainer>
    )
  }
}

export default withRouter(PictureLogin);
