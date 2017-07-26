// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import './main.css'
import Modal from './Modal.js'

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
// const PictureContainerStyling = styled.div`
//   text-align: center;
//   height: auto;
// `

const AlphaPictureHolder = styled.div`
  border-radius: 10px;
  padding: 5px;
  padding-top: 15px;
  background-color: rgba(255, 251, 242, 0.7);
  margin: 5px;
  margin-bottom: 20px;
  height: 56vh;
`


// border-radius: 10px;
// padding: 5px;
// padding-top: 15px;
// background-color: rgba(255, 251, 242, 0.7);
// margin: 5px;
// max-height: 56vh;
// -webkit-align-items: center;
// align-items: center;
// -webkit-justify-content: center;
// justify-content: center;
// margin: 0 auto;
// display: flex;
// flex-direction:column;


// FFFBF2
// rgba(255, 251, 242, 1)

const styles = {
  images: {
    width: 'auto',
    maxHeight: "72%",
    minHeight: "72%",
    // paddingLeft: "40px",
    // paddingRight: "40px"
  },
  floatbuttons: {
    display: 'inline-block',
    marginLeft: '3px',
    marginRight: '3px',
    float: 'left',
    marginTop: "0px"
  }
}

class PictureContainer extends Component{
  constructor(props){
    super(props);
    this.state={}
  }

  componentDidMount(){
    console.log('this.props.picture.username', this.props.picture.username);
    console.log('this.props.picture.name', this.props.picture.name);
  }

  sendtoSellPicture(e){
    e.preventDefault();
    this.props.sellPicture(this.props.picture);
  }

  stopSelling(e){
    e.preventDefault();
    var self = this;
    axios.post('https://blooming-ravine-86876.herokuapp.com/changeprice', {
      pictureid: this.props.picture.pictureid,
      name: this.props.username,
      userref: this.props.picture.userref,
      pictureurl: this.props.picture.pictureurl,
      currentprice: -1
    })
      .then((response)=>{
       console.log('response from the python call ', response.data);
       self.props.pulldatafunc(self.props.username);
     })
     .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
     });
  }

  sendtoDeletePictureFunc(e){
    e.preventDefault();
    this.props.deletepicturefunc(this.props.picture.pictureid, this.props.picture.pictureurl)
  }

  render(){
    return(
      <AlignContainer>

        {renderIf(this.props.picture.currentprice == -1)(


              <AlphaPictureHolder>
                  <img style={styles.images} src={this.props.picture.pictureurl}/>
                  <AlignContainer>
                    <br/>
                    <span>
                      <div className="buttonsmall" style={styles.floatbuttons} onClick={(e)=>this.sendtoSellPicture(e)}>Sell Picture</div>
                      <div className="buttonsmallwarning" style={styles.floatbuttons} onClick={(e)=>this.sendtoDeletePictureFunc(e)}>Delete</div>
                    </span>
                  </AlignContainer>
              </AlphaPictureHolder>


        )}
        {renderIf(this.props.picture.currentprice != -1)(


              <AlphaPictureHolder>
                  <img style={styles.images} src={this.props.picture.pictureurl}/>
                    <AlignContainer>
                      <div className="platybucks">
                        <p><strong>{this.props.picture.currentprice} </strong> platybucks</p>
                      </div>
                    <span>
                      <div className="buttonsmall" style={styles.floatbuttons} onClick={(e)=>this.sendtoSellPicture(e)}>Change Price</div>
                      <div className="buttonsmall" style={styles.floatbuttons} onClick={(e)=>this.stopSelling(e)}>Stop Selling</div>
                    </span>
                  </AlignContainer>
              </AlphaPictureHolder>


        )}
        <br/>

      </AlignContainer>
    )
  }
}



export default PictureContainer
