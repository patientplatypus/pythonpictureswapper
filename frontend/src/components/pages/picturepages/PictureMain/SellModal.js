// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import './main.css'

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
  display: flex;
`

const SellContainer = styled.div`
  background-color: #D17166;
  border-radius: 5px;
  padding: 10 px;
  margin: 5 px;
  width: 80%;
  border-width: 30px;
  border-color: #8A4F7D;
  border-style: solid;
  margin-top: 10px;
`

const ImgContainer = styled.div`
  max-width: 60vw;
  margin: 0 auto;
  height: auto;
`


const styles = {
  images: {
    maxWidth: "100%",
    width: "100%",
    height: "auto",
  },
  warning: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#5E6572",
    backgroundColor: '#B2B2B2',
    padding: '10px'
  }
}

class SellModal extends Component{
  constructor(props){
    super(props);
    this.state = {
      pictureurl: null,
      boughtfor: null,
      soldfor: null,
      currentprice: '1',
      pictureid: null,
      userref: null,
    }
  }

  componentWillMount(){
    console.log('value of sellpicturedata ', this.props.sellpicturedata);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['pictureurl']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['boughtfor']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['soldfor']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['currentprice']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['pictureid']);
    console.log('value of sellpicturedata ', this.props.sellpicturedata['userref']);
    if (this.props.sellpicturedata['currentprice'] == -1){
      this.setState({
        pictureurl: this.props.sellpicturedata['pictureurl'],
        boughtfor: this.props.sellpicturedata['boughtfor'],
        soldfor: this.props.sellpicturedata['soldfor'],
        currentprice: 1,
        pictureid: this.props.sellpicturedata['pictureid'],
        userref: this.props.sellpicturedata['userref']
      })
    }
    if (this.props.sellpicturedata['currentprice'] != -1){
      this.setState({
        pictureurl: this.props.sellpicturedata['pictureurl'],
        boughtfor: this.props.sellpicturedata['boughtfor'],
        soldfor: this.props.sellpicturedata['soldfor'],
        currentprice: this.props.sellpicturedata['currentprice'],
        pictureid: this.props.sellpicturedata['pictureid'],
        userref: this.props.sellpicturedata['userref']
      })
    }
  }

  sendtoSellPicture(e){
    e.preventDefault();
    this.props.sellPicture(this.props.picture);
  }

  sendtoSellModalClose(e){
    e.preventDefault();
    if (Number.isInteger(Number(this.state.currentprice))){
      axios.post('https://blooming-ravine-86876.herokuapp.com/changeprice', {
        pictureid: this.state.pictureid,
        name: this.state.username,
        userref: this.state.userref,
        pictureurl: this.state.pictureurl,
        currentprice: this.state.currentprice
      })
        .then((response)=>{
         console.log('response from the python call ', response.data);
         this.props.sellModalClose(this.props.username);
       })
       .catch((err)=>{
         console.log('python axios error');
         console.log('and the error is ', err);
       });
    }
  }


  render(){
    return(
      <SellContainer>
        <AlignContainer>
          <br/>
          <h3> How Much Would You like to Sell For?</h3>
          <br/>
          <ImgContainer>
            <img style={styles.images} src={this.state.pictureurl}/>
          </ImgContainer>
          <FlexRow>
            <p>Enter a New Price to Sell At</p>
          </FlexRow>

          <input  value={this.state.currentprice} onChange={(e)=>{this.setState({currentprice: e.target.value})}} type="currentprice" name="currentprice" placeholder="set a price"/><br/>
          {renderIf(Number.isInteger(Number(this.state.currentprice))===false)(
            <FlexRow>
              <p style={styles.warning}> You are only allowed to set the price to a positive integer value!</p>
            </FlexRow>
          )}
          {renderIf(Number.isInteger(Number(this.state.currentprice)))(
            <div>
              {renderIf((Number(this.state.currentprice) <= 0))(
                <FlexRow>
                  <p style={styles.warning}> You are only allowed to set the price to a positive integer value!</p>
                </FlexRow>
              )}
              {renderIf((Number(this.state.currentprice) > 0))(
                <FlexRow>
                  <div className="button" onClick={(e)=>this.sendtoSellModalClose(e)}> Save </div>
                </FlexRow>
              )}
            </div>
          )}
          <br/>
        </AlignContainer>
      </SellContainer>
    )
  }
}

export default SellModal
