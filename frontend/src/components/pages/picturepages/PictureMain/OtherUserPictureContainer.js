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
`

const AlphaPictureHolder = styled.div`
  border-radius: 10px;
  padding: 5px;
  padding-top: 15px;
  background-color: rgba(255, 251, 242, 0.7);
  margin: 5px;
  margin-bottom: 20px;
`

const styles = {
  images: {
    width: "200px",
    height: "auto",
    paddingLeft: "40px",
    paddingRight: "40px"
  }
}

class OtherUserPictureContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }


  sendtobuyPicture(e){
    e.preventDefault();
    console.log('inside sendtobuyPicture and the value of this.props.otherusername is ', this.props.otherusername);
    console.log('inside sendtobuyPicture and the value of this.props.username is ', this.props.username);
    this.props.buyPicture(this.props.picture.pictureurl, this.props.picture.currentprice, this.props.username, this.props.otherusername);
  }


  // {renderIf(length(this.props.picture) === 0)(
  //   <div>
  //     <p>This user has no pictures</p>
  //     <button onClick={(e)=>this.sendtobuyPicture(e)}>Cancel & Go Back</button>
  //   </div>
  // )}

  render(){
    return(
      <AlphaPictureHolder>
        <AlignContainer>
          <img style={styles.images} src={this.props.picture.pictureurl}/>
          {renderIf(this.props.picture.currentprice == -1)(
            <div className='platybucks'>
              <p>not for sale</p>
            </div>
          )}
          {renderIf(this.props.picture.currentprice != -1)(
            <div>
              <AlignContainer>
                <div className='platybucks'>
                  {this.props.picture.currentprice} platybucks
                </div>
                <div className="buttonsmall" onClick={(e)=>this.sendtobuyPicture(e)}>Buy Picture!</div>
              </AlignContainer>
            </div>
          )}
        </AlignContainer>
      </AlphaPictureHolder>
    )
  }
}



export default OtherUserPictureContainer
