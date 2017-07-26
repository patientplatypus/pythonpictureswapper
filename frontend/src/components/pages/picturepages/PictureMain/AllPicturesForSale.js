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

const PictureContainer = styled.div`
  text-align: center;
  max-width: 100%;
  height: auto;
`

const AlphaPictureHolder = styled.div`
  border-radius: 10px;
  padding: 5px;
  padding-top: 15px;
  background-color: rgba(255, 251, 242, 0.7);
  margin: 5px;
  margin-bottom: 20px;
  height: 56vh;
`

const styles = {
  images: {
    width: 'auto',
    maxHeight: "72%",
    minHeight: "72%",
  }
}

class AllPicturesForSale extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }

  componentDidMount(){

  }

  sendtoModal(e){
    e.preventDefault();
    this.props.openModalAllPictures(this.props.picture.pictureurl, this.props.picture.currentprice, this.props.picture.pictureid, this.props.picture.userref);
  }


  render(){
    return(
      <PictureContainer>
          <AlphaPictureHolder>
            <img style={styles.images} src={this.props.picture.pictureurl}/>
            <div className="platybucks">
              <p><strong>{this.props.picture.currentprice} </strong> platybucks</p>
            </div>
            <div className='buttonsmall' onClick={(e)=>this.sendtoModal(e)}>Buy Picture</div>
          </AlphaPictureHolder>
      </PictureContainer>
    )
  }
}



export default AllPicturesForSale
