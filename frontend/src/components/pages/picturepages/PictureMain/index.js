// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { Badge, IconButton, Heading, Paragraph, ParagraphHolder, PrimaryNavigation, SecondaryNavigation, TertiaryNavigation, Caption, Link, ParagraphSmall, AlignContainer, SubHeader} from 'components'
import renderIf from 'render-if'
import styled from 'styled-components'
import axios from 'axios'
import PictureContainer from './PictureContainer';
import SellModal from './SellModal';
import Modal from './Modal';
import OtherUser from './OtherUser';
import OtherUserPictureContainer from './OtherUserPictureContainer';
import AllPicturesForSale from './AllPicturesForSale';
import { font, palette } from 'styled-theme'
import { ThemeProvider } from 'styled-components'
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
  display:flex;
`
const FlexRight = styled.div`
  flex-grow: 1;
  min-width: 66%;
  max-width: 66%;
  text-align: right;
`

const FlexLeft = styled.div`
  flex-grow: 1;
  min-width: 66%;
  max-width: 66%;
  text-align: left;
`

const FlexSpace = styled.div`
  flex-grow: 1;
  min-width: 33%;
  max-width: 33%;
`

const Flex2 = styled.div`
  flex-grow: 1;
  flex-direction: column;
  min-width: 200px;
  max-width: 50%;
  text-align: right;
  background-color: #94B9AF;
`


const Flex1 = styled.div`
  flex-grow: 1;
  flex-direction: column;
  min-width: 280px;
  max-width: 70%;
  text-align: right;
  background-color: #D17166;
`

const FlexMargin = styled.div`
  flex: 1;
  background-color: #8A4F7D;
  flex-direction: column;
  display: flex;
`
const FlexSize1 = styled.div`
  flex: 1;
  background-color: #94B9AF;
  flex-direction: column;
  display: flex;
`


const FlexSize2 = styled.div`
  flex: 2;
  background-color: #D17166;
  flex-direction: column;
  display: flex;
`

const FlexSize1Modal = styled.div`
  flex: 1;
  height: 100%;
  min-height: 100%;
  background-color: #94B9AF;
  flex-direction: column;
  display: flex;
`


const FlexSize2Modal = styled.div`
  flex: 2;
  height: 100%;
  min-height: 100%;
  background-color: #D17166;
  flex-direction: column;
  display: flex;
`

const FlexMarginModal = styled.div`
  flex: 1;
  height: 100%;
  min-height: 100%;
  background-color: #8A4F7D;
  flex-direction: column;
  display: flex;
`

const FlexRowModal = styled.div`
  flex-direction: row;
  display:flex;
  min-height: 100%;
  height: 100%;
`

const PictureHeader = styled.div`
  color: white;
  background-color: #414073;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 5px;
  border-color: #4C3957
  border-width: 2px;
`

const YourPicturesContainer = styled.div`
  width: 100%;
  margin: 0;
`

const Flex1Transparent = styled.div`
  flex: 1;
  background-color: transparent;
`

const FlexColumn = styled.div`
  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
`

const PictureScrollUsers = styled.div`
  max-height: 60vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

const OtherUsersScroll = styled.div`
  max-height: 20vh;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

const NoPictureContainer = styled.div`
  display: block;
  margin-top: 10vh;
  padding-top: 10vh;
  padding-right: 1vw;
  padding-left: 1vw;
  width: 80%;
  height: 20vh;
  text-align: center;
  background-color: #232C33;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border-radius: 10px;
`

const NoPictureContainerOtherUsers = styled.div`
  display: block;
  padding-top: 10vh;
  padding-right: 1vw;
  padding-left: 1vw;
  width: 80%;
  height: 20vh;
  text-align: center;
  background-color: #232C33;
  color: white;
  margin-left: auto;
  margin-right: auto;
  font-size: 20px;
  border-radius: 10px;
`

const ImageContainer = styled.div`
  display: block;
  width: 400px;
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

const AlphaPictureHolder2 = styled.div`
  border-radius: 10px;
  padding: 5px;
  padding-top: 15px;
  background-color: rgba(255, 251, 242, 0.7);
  margin: 5px;
  margin-bottom: 20px;
  height: auto;
`

const OtherUserHeader = styled.div`
  background-color: #003459;
  color: #007EA7;
  font-size: 30px;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 5px;
  font-weight: bolder;
`

const styles = {
  images: {
    width: "200px",
    height: "auto",
    paddingLeft: "40px",
    paddingRight: "40px"
  },
  nopictures: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  bankBackground: {
    backgroundColor: "#A9B5C6"
  },
  width100:{
    width: '100%'
  },
  images2: {
    maxHeight: '100%',
    maxWidth: '100%'
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
  },
  ulstyle:{
    listStyle: "none"
  }
}

class PictureMain extends Component{
  constructor(props){
    super(props);
    this.state = {
      pictureurl: '',
      username: null,
      retrievpictures: null,
      picturearray: [],
      picturearrayforsale: [],
      sellmodal:false,
      sellpicturedata: null,
      usermoney: 0,
      isModalOpenAddPicture: false,
      testvalue: 0,
      previewpicture: false,
      picturecost: -1,
      notenoughmoney: false,
      userarray: [],
      otherusername: '',
      otheruserpicturearray: [],
      otheruserpicturearrayforsale: [],
      isModalOpenOtherUser: false,
      allpicturesforsalearray: [],
      isModalOpenAllPictures: false,
      allpicturespictureurl: '',
      allpicturescurrentprice: '',
      allpicturespictureid: '',
      allpicturesuserref: '',
      picturetestOK: false,
      picturetodelete: '',
      picturetodeleteurl: '',
      picturedeletemodalopen: false
    }
  }


  componentWillMount(){
    var self = this;
    console.log("inside the componentwillmount of picturemain")
    if (this.props.location.state === undefined){
      console.log("name is undefined");
    }else{
      console.log(this.props.location.state.name);

      this.setState({
        username: this.props.location.state.name
      }, ()=>{
        axios.post('https://blooming-ravine-86876.herokuapp.com/retrievepictures', {
          name: this.state.username,
        })
          .then((response)=>{
             console.log('response from the python call ', response.data);
             var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
             var tempArray = [];
             var tempObj = {};
             var tempArrayforsale = [];
             response.data.pictures.forEach(picture=>{
               pictureurl = picture[0];
               boughtfor = picture[1];
               soldfor = picture[2];
               currentprice = picture[3];
               pictureid = picture[4];
               userref = picture[5];
               if (currentprice == -1){
                 console.log('inside == -1');
                 tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref};
                 tempArray.push(tempObj);
               }
               if (currentprice != -1){
                 console.log('inside != -1');
                 tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref};
                 tempArrayforsale.push(tempObj);
                 console.log('value of the tempObjforsale is ', tempObj);
                 console.log('value of tempArrayforsale is ', tempArrayforsale);
               }
             })
             this.setState({
               picturearray: tempArray,
               picturearrayforsale: tempArrayforsale
             }, ()=>{
               console.log('after setting picturearray and the value is ', this.state.picturearray);
               console.log('after setting picturearrayforsale and the value is ', this.state.picturearrayforsale);
             })
           })
           .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
           });

        axios.post('https://blooming-ravine-86876.herokuapp.com/retrieveuserinfo', {
          name: this.state.username
        })
          .then((response)=>{
             console.log('response from the python call ', response.data);
             console.log(response.data.userinfo[2]);
             self.setState({
               usermoney: response.data.userinfo[2]
             })
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });

        axios.post('https://blooming-ravine-86876.herokuapp.com/allusers')
          .then((response)=>{
             console.log('response from ALL USERS ', response.data);
             self.setState({
               userarray: response.data.allusers
             });
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });


        axios.post('https://blooming-ravine-86876.herokuapp.com/allpicturesforsale', {
          name: this.state.username
        })
          .then((response)=>{
             console.log('response from allpicturesforsale ', response.data.allpicturesforsale);
             var tempObj = {};
             var tempArray = [];
             response.data.allpicturesforsale.forEach(picture=>{
                var pictureurl = picture[0];
                var currentprice = picture[3];
                var pictureid = picture[4];
                var userref = picture[5];
                tempObj = {pictureurl, currentprice, pictureid, userref};
                tempArray.push(tempObj);
             })
             this.setState({
               allpicturesforsalearray: tempArray
             }, ()=>{
               console.log('this is the allpicturesforsalearray after setState', this.state.allpicturesforsalearray);
             })
          })
          .catch((err)=>{
             console.log('python axios error');
             console.log('and the error is ', err);
          });

       });
    }
  }

  pulldatafunc(username){
    var self = this
    axios.post('https://blooming-ravine-86876.herokuapp.com/retrievepictures', {
      name: username,
    })
      .then((response)=>{
         console.log('response from the python call ', response.data);
         var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
         var tempArray = [];
         var tempObj = {};
         var tempArrayforsale = [];
         response.data.pictures.forEach(picture=>{
           pictureurl = picture[0];
           boughtfor = picture[1];
           soldfor = picture[2];
           currentprice = picture[3];
           pictureid = picture[4];
           userref = picture[5];
           if (currentprice == -1){
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             tempArray.push(tempObj);
           }else{
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             tempArrayforsale.push(tempObj);
           }
         })
         self.setState({
           picturearray: tempArray,
           picturearrayforsale: tempArrayforsale
         }, ()=>{console.log('after setting picturearray and the value is ', this.state.picturearray);})
       })
       .catch((err)=>{
         console.log('python axios error');
         console.log('and the error is ', err);
       });

     axios.post('https://blooming-ravine-86876.herokuapp.com/retrieveuserinfo', {
       name: username
     })
       .then((response)=>{
          console.log('response from the python call ', response.data);
          console.log(response.data.userinfo[2]);
          self.setState({
            usermoney: response.data.userinfo[2]
          })
       })
       .catch((err)=>{
          console.log('python axios error');
          console.log('and the error is ', err);
       });

     axios.post('https://blooming-ravine-86876.herokuapp.com/allpicturesforsale', {
       name: this.state.username
     })
       .then((response)=>{
          console.log('response from allpicturesforsale ', response.data.allpicturesforsale);
          var tempObj = {};
          var tempArray = [];
          response.data.allpicturesforsale.forEach(picture=>{
             var pictureurl = picture[0];
             var currentprice = picture[3];
             var pictureid = picture[4];
             var userref = picture[5];
             tempObj = {pictureurl, currentprice, pictureid, userref};
             tempArray.push(tempObj);
          })
          this.setState({
            allpicturesforsalearray: tempArray
          }, ()=>{
            console.log('this is the allpicturesforsalearray after setState', this.state.allpicturesforsalearray);
          })
       })
       .catch((err)=>{
          console.log('python axios error');
          console.log('and the error is ', err);
       });

   }


  sellPicture(picturedata){
    console.log("inside sellpicture function");
    console.log("and this is the picturedata", picturedata);
    var self = this;
    self.setState({
      sellpicturedata: picturedata,
      sellmodal: true
    })
  }

  buyPicture(pictureurl, price, username, otherusername){
    var self = this;
    console.log('inside buyPicture and pictureurl, username, otherusername is ', pictureurl, " ", price, " ", username, " ", otherusername);

    axios.post('https://blooming-ravine-86876.herokuapp.com/buyfromothers', {
      name: username,
      othername: otherusername,
      pictureurl: pictureurl,
      price: price
    })
    .then((response)=>{
       console.log('response from the python call ', response.data);
       if (response.data == 'youdonthaveenoughmoney'){
         self.setState({
           notenoughmoney: true
         })
       }else{
         self.pulldatafunc(username);
         self.setState({
           isModalOpenOtherUser: false,
           isModalOpenAllPictures: false,
           notenoughmoney: false
         })
       }
    })
    .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
    });

  }

  sellModalClose(username){
    console.log('inside sellModalClose');
    var self = this;
    self.setState({
      sellmodal: false
    })
    self.pulldatafunc(username);
  }

    openModalAddPicture(){
      this.setState({
        isModalOpenAddPicture: true
      })
    }

    closeModalAddPicture(){
      this.setState({
        isModalOpenAddPicture: false,
        previewpicture: false,
        notenoughmoney: false,
        picturetestOK: false
      })
    }

    closeModalOtherUser(){
      this.setState({
        isModalOpenOtherUser: false,
        notenoughmoney: false
      })
    }


    //pictureurl, currentprice, pictureid, userref
    //allpicturespictureurl, allpicturescurrentprice, allpicturespictureid, allpicturesuserref
    openModalAllPictures(pictureurl, currentprice, pictureid, userref){
      this.setState({
        isModalOpenAllPictures: true,
        allpicturespictureurl: pictureurl,
        allpicturescurrentprice: currentprice,
        allpicturespicturespictureid: pictureid,
        allpicturesuserref: userref
      })
    }

    closeModalAllPictures(){
      this.setState({
        isModalOpenAllPictures: false
      })
    }



    checkUser(otherusername){
      console.log('inside checkUser and otherusername is ', otherusername);
      var self = this;
      axios.post('https://blooming-ravine-86876.herokuapp.com/retrievepictures', {
        name: otherusername,
      })
        .then((response)=>{
           console.log('response from the python call ', response.data);
           var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
           var tempArray = [];
           var tempObj = {};
           var tempArrayforsale = [];
           response.data.pictures.forEach(picture=>{
             pictureurl = picture[0];
             boughtfor = picture[1];
             soldfor = picture[2];
             currentprice = picture[3];
             pictureid = picture[4];
             userref = picture[5];
             if (currentprice == -1){
               tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
               tempArray.push(tempObj);
             }else{
               tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
               tempArrayforsale.push(tempObj);
             }
           })
           self.setState({
             otheruserpicturearray: tempArray,
             otheruserpicturearrayforsale: tempArrayforsale,
             isModalOpenOtherUser: true,
             otherusername: otherusername
           }, ()=>{console.log('after setting picturearray and the value is ', this.state.picturearray);})
         })
         .catch((err)=>{
           console.log('python axios error');
           console.log('and the error is ', err);
         });
    }

    closeModalAddPictureandbuy(){
      var self = this;

      axios.post('https://blooming-ravine-86876.herokuapp.com/buypictures', {
        name: this.state.username,
        cost: 20,
        pictureurl: this.state.pictureurl
      })
        .then((response)=>{
           console.log('response from the python call ', response.data);
           if(response.data==='youdonthaveenoughmoney'){
             console.log('not enough boyo')
             this.setState({
               notenoughmoney: true
             })
           }else{
             var picturearray = self.state.picturearray;
             var tempObj = {};
             var pictureurl, boughtfor, soldfor, currentprice, pictureid, userref;
             pictureurl = response.data.picture[0];
             boughtfor = response.data.picture[1];
             soldfor = response.data.picture[2];
             currentprice = response.data.picture[3];
             pictureid = response.data.picture[4];
             userref = response.data.picture[5];
             tempObj = {pictureurl, boughtfor, soldfor, currentprice, pictureid, userref}
             picturearray.push(tempObj)
             this.setState({
               picturearray: picturearray,
               usermoney: response.data.totalmoney,
               isModalOpenAddPicture: false,
               previewpicture: false
             })
           }
        })
        .catch((err)=>{
           console.log('python axios error');
           console.log('and the error is ', err);
        });
    }

    testChange(){
      this.setState({
        testvalue: 1
      })
    }



    checkwebpictureOK(e){
      e.preventDefault();
      var picturepromise = new Promise((resolve) => {
              let image = document.createElement('img');
              // image.src = mediaObj.url;
              image.src = this.state.pictureurl
              console.log('in checkwebpictureOK promise and value of this.state.pictureurl is ', this.state.pictureurl)
              image.onload = () => {
                // mediaObj.validUrl = true;
                // resolve(mediaObj)
                resolve(true)
              }
              image.onerror = () => {
                // mediaObj.validUrl = false;
                // resolve(mediaObj)
                resolve(false)
              }
            })

      picturepromise.then((resolve)=>{
        if(resolve){
          this.setState({
            picturetestOK: true,
            previewpicture: true
          })
        }
        if(!resolve){
          this.setState({
            picturetestOK: false,
            previewpicture: true
          })
        }
      })
    }

  deletepicturefunc(picturid, pictureurl){
    this.setState({
      picturetodelete: picturid,
      picturetodeleteurl: pictureurl,
      picturedeletemodalopen: true
    })
  }

  deletepictureforsure(e){
    e.preventDefault();
    var self = this;

    axios.post('https://blooming-ravine-86876.herokuapp.com/deletepicture', {
      pictureid: this.state.picturetodelete
    })
    .then((response)=>{
       console.log('response from the DELETE python call ', response.data);
       self.pulldatafunc(this.state.username);
       self.setState({
         picturedeletemodalopen: false,
         picturetodelete: "",
         picturetodeleteurl: ""
       })
    })
    .catch((err)=>{
       console.log('python axios error');
       console.log('and the error is ', err);
    });
  }

  canceldelete(e){
    e.preventDefault();
    this.setState({
      picturetodelete: "",
      picturetodeleteurl: "",
      picturedeletemodalopen: false
    })
  }


  render(){

    let pictureContainers;

          if(this.state.picturearray.length!=0){
                pictureContainers = this.state.picturearray.map((picture,i) => {
                  return (
                    <PictureContainer key={i} picture={picture} username={this.state.username}
                    deletepicturefunc={this.deletepicturefunc.bind(this)} sellPicture={this.sellPicture.bind(this)} pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let pictureContainersforsale;

          if(this.state.picturearrayforsale.length!=0){
                pictureContainersforsale = this.state.picturearrayforsale.map((picture,i) => {
                  return (
                    <PictureContainer key={i} picture={picture} username={this.state.username}
                    deletepicturefunc={this.deletepicturefunc.bind(this)}
                    sellPicture={this.sellPicture.bind(this)}
                    pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let AllUser;

        if(this.state.userarray.length!=0){
              AllUser = this.state.userarray.map((user,i) => {
                if (user != this.state.username){
                  return (
                    <FlexRow>
                      <OtherUser key={i} user={user} checkUser={this.checkUser.bind(this)}/>
                    </FlexRow>
                  );
                }
              });
        }


    let otheruserpictureContainers;

          if(this.state.otheruserpicturearray.length!=0){
                otheruserpictureContainers = this.state.otheruserpicturearray.map((picture,i) => {
                  return (
                    <OtherUserPictureContainer key={i} picture={picture} otherusername={this.state.otherusername} username={this.state.username} buyPicture={this.buyPicture.bind(this)} pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let otheruserpictureContainersforsale;

          if(this.state.otheruserpicturearrayforsale.length!=0){
                otheruserpictureContainersforsale = this.state.otheruserpicturearrayforsale.map((picture,i) => {
                  return (
                    <OtherUserPictureContainer key={i} picture={picture} otherusername={this.state.otherusername} username={this.state.username} buyPicture={this.buyPicture.bind(this)}
                    pulldatafunc={this.pulldatafunc.bind(this)} />
                  );
                });
          }

    let allpicturesforsalemap;

          if(this.state.allpicturesforsalearray.length!=0){
                allpicturesforsalemap = this.state.allpicturesforsalearray.map((picture,i) => {
                  return (
                    <AllPicturesForSale key={i} picture={picture} openModalAllPictures={this.openModalAllPictures.bind(this)}/>
                  );
                });
          }




    return(
      <div>

      {renderIf(this.state.username === null)(
        <FlexContainer>
          <br/><br/><br/>
          <FlexRow>
            <ParagraphHolder>
              <Paragraph>
                You did not properly log in. You naughty dog you. Hit the back button, and click your heels three times, to navigate to a safe place.
              </Paragraph>
            </ParagraphHolder>
          </FlexRow>
        </FlexContainer>
      )}

      {renderIf(this.state.username != null)(
        <FlexContainer>
          <FlexRow>
            <Heading>Why Everything You Think Is Wrong and the World Is Bullshit</Heading>
          </FlexRow>
          <FlexRow>
            <PrimaryNavigation/>
          </FlexRow>
          {renderIf(this.state.sellmodal===false)(
          <div>
          <AlignContainer>
            <FlexRow>
              <div className="welcomeheader">
                <p>WELCOME TO PICTURE SWAPPER {this.state.username}</p>
                <div className="animateheadericons animationdelay7 sparkles shift1"/>
                <div className="animateheadericons animationdelay4 shootingstar shift2"/>
                <div className="animateheadericons animationdelay3 star shift3"/>
                <div className="animateheadericons animationdelay7 camera shift4"/>
                <div className="animateheadericons animationdelay13 glowystar shift5"/>
              </div>

            </FlexRow>
            <FlexRow>
              <div className="gameexplanation">
                <p>
                  There are five sections in my Picture Swapper App, but it&#39;s pretty intuitive!
                </p>
                <div className='alignlist'>
                  <p>
                    1. There&#39;s a bank that let&#39;s you know how much money you have.
                  </p>
                  <p>
                    2. There&#39;s a picture store that let&#39;s you buy pictures from the internet.
                  </p>
                  <p>
                    3. You have your picture dashboard that let&#39;s you set pictures for sale and prices.
                  </p>
                  <p>
                    4. There&#39;s a section that shows all the pictures for sale.
                  </p>
                  <p>
                    5. Finally there&#39;s a list of all the users. You can click their name to view their profile!
                  </p>
                </div>
                <p>
                  I hope you like it!
                </p>
              </div>
          </FlexRow>

            <FlexRow>
              <div className='bankroofcontainer'>
                <FlexRow>
                  <div className='bankroofinner'>
                    BANK
                  </div>
                  <div className='bankroof'></div>
                </FlexRow>
              </div>
            </FlexRow>
            <FlexRow>
              <Flex1Transparent>
                <FlexColumn>
                  <div className='ahead4'>
                    <div className="pillarmainaheadahead"></div>
                    <div className="pillarbaseaheadahead"></div>
                  </div>
                </FlexColumn>
                <FlexColumn>
                </FlexColumn>
              </Flex1Transparent>
              <Flex1Transparent>
                <FlexColumn>
                  <div className='ahead2'>
                    <div className="pillarmainahead"></div>
                    <div className="pillarbaseahead"></div>
                  </div>
                </FlexColumn>
                <FlexColumn>
                </FlexColumn>
              </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn>
                    <div className="pillarmain"></div>
                    <div className="pillarbase"></div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn>
                    <Flex1Transparent>
                    </Flex1Transparent>
                    <Flex1Transparent>
                      <FlexRow>
                        <div className='moneycontainer'>
                          <FlexRow>
                            <div className="platypuswetrust">
                              IN PLATYPUS WE TRUST
                            </div>
                            <div className='platypusbackground'>
                                <img className='platypusbackgroundimg' src={require('../../../../../public/platypushorizontaldarkgreen.png')} />
                            </div>
                            <div className='platypusicon'>
                                <img className='platypusiconimg' src={require('../../../../../public/platypusverticaldarkgreen.png')} />
                            </div>
                            <div className='smallmoneynumber'>
                              {this.state.usermoney}
                            </div>
                            <div className='smallmoney'>
                              <div className='burst-12'>
                              </div>
                            </div>
                            <div className="money">
                              <div className="moneynumber">
                                {this.state.usermoney}
                              </div>
                            </div>
                          </FlexRow>
                        </div>
                      </FlexRow>
                    </Flex1Transparent>
                    <Flex1Transparent>
                    </Flex1Transparent>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent style={styles.bankBackground}>
                  <FlexColumn className='fixzindex'>
                      <div className="pillarmain"></div>
                      <div className="pillarbase"></div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent>
                  <FlexColumn>
                    <div className='ahead'>
                      <div className="pillarmainahead"></div>
                      <div className="pillarbaseahead"></div>
                    </div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
                <Flex1Transparent>
                  <FlexColumn>
                    <div className='ahead3'>
                      <div className="pillarmainaheadahead"></div>
                      <div className="pillarbaseaheadahead"></div>
                    </div>
                  </FlexColumn>
                  <FlexColumn>
                  </FlexColumn>
                </Flex1Transparent>
              </FlexRow>

            <br/>
            <AlphaPictureHolder2>
              <AlignContainer>
                <FlexRow>
                  <div className="picturestore"></div>
                </FlexRow>
                <FlexRow>
                  <div className="buttonbig" onClick={() => {this.openModalAddPicture()}}>Buy A Picture from The Internet</div>
                </FlexRow>
              </AlignContainer>
            </AlphaPictureHolder2>
            <FlexRow>
              <AlignContainer>
                <div className='headingcontainer'>YOUR PICTURES</div>
              </AlignContainer>
            </FlexRow>
            <br/>
          </AlignContainer>

          <FlexRow>
            <Modal isOpen={this.state.isModalOpenAddPicture}>
              <AlignContainer>
                <PictureHeader>
                  <h3>Upload a Picture & Buy</h3>
                </PictureHeader>
              </AlignContainer>
              <br/>
              <AlignContainer>
                <input  value={this.state.pictureurl} onChange={(e)=>{this.setState({pictureurl: e.target.value, previewpicture: false})}} type="pictureurl" name="pictureurl" placeholder="Picture URL"/><br/>
                <AlignContainer>
                  <FlexRow>
                    <span>
                      <div className="buttonsmall" style={styles.floatbuttons} onClick={(e)=>this.checkwebpictureOK(e)}>Preview Picture</div>
                      <div className='buttonsmall' style={styles.floatbuttons} onClick={()=>this.closeModalAddPicture()}>Cancel</div>
                    </span>
                  </FlexRow>
                </AlignContainer>
              </AlignContainer>
              {renderIf(this.state.previewpicture===true)(
                <AlignContainer>
                  {renderIf(this.state.picturetestOK===true)(
                    <div>
                      <AlphaPictureHolder>
                        <FlexRow>
                          <ImageContainer>
                            <img style={styles.images2} src={this.state.pictureurl}/>
                          </ImageContainer>
                        </FlexRow>
                        <FlexRow>
                          <AlignContainer>
                            <div className="platybucks">
                              <p>20 platybucks</p>
                            </div>
                          </AlignContainer>
                        </FlexRow>
                      </AlphaPictureHolder>
                      <FlexRow>
                        <AlignContainer>
                          <span>
                            <div className='buttonsmall' style={styles.floatbuttons} onClick={()=>this.closeModalAddPictureandbuy()}> Buy</div>
                          </span>
                        </AlignContainer>
                      </FlexRow>
                      {renderIf(this.state.notenoughmoney===true)(
                        <div style={styles.warning}>
                          <p>No picture for you! You do not have the 20 points necessary to buy!</p>
                        </div>
                      )}
                    </div>
                  )}
                  {renderIf(this.state.picturetestOK===false)(
                    <AlignContainer>
                      <div style={styles.warning}>
                        <p>Sorry that picture is broken, please select another</p>
                      </div>
                    </AlignContainer>
                  )}
                </AlignContainer>
              )}
            </Modal>
          </FlexRow>




            <YourPicturesContainer>

                <FlexRow>
                  <FlexSize1>
                    <AlignContainer>
                      <PictureHeader>
                        <h3>Your Pictures</h3>
                      </PictureHeader>
                    </AlignContainer>
                    <PictureScrollUsers>
                      {pictureContainers}
                      {renderIf(this.state.picturearray.length===0)(
                        <NoPictureContainer>
                          <p> You do not have any pictures that are not for sale. </p>
                        </NoPictureContainer>
                      )}
                    </PictureScrollUsers>
                  </FlexSize1>
                  <FlexSize2>
                    <AlignContainer>
                      <PictureHeader>
                        <h3>Your Pictures for Sale</h3>
                      </PictureHeader>
                    </AlignContainer>
                    <PictureScrollUsers>
                      {pictureContainersforsale}
                      {renderIf(this.state.picturearrayforsale.length===0)(
                        <NoPictureContainer>
                          <p>You do not have any pictures for sale.</p>
                        </NoPictureContainer>
                      )}
                    </PictureScrollUsers>
                  </FlexSize2>
                </FlexRow>
                <br/>
                <FlexRow>
                  <AlignContainer>
                    <div className='headingcontainer'>PICTURES FOR SALE</div>
                  </AlignContainer>
                </FlexRow>
                <br/>
                <FlexRow style={styles.width100}>
                  <FlexMargin/>
                  <FlexSize2>
                    <PictureScrollUsers>
                      {allpicturesforsalemap}
                      {renderIf(this.state.allpicturesforsalearray.length===0)(
                        <NoPictureContainerOtherUsers>
                          <p>No other users currently have any pictures for sale</p>
                        </NoPictureContainerOtherUsers>
                      )}
                    </PictureScrollUsers>
                  </FlexSize2>
                  <FlexMargin/>
                </FlexRow>
                <br/>
                <FlexRow>
                  <AlignContainer>
                    <div className='headingcontainer'>OTHER USERS</div>
                  </AlignContainer>
                </FlexRow>
                <br/>
                <FlexRow>
                  <FlexMargin/>
                  <FlexSize1>
                  <OtherUsersScroll>
                    {AllUser}
                  </OtherUsersScroll>
                  </FlexSize1>
                  <FlexMargin/>
                </FlexRow>
                <br/>

            </YourPicturesContainer>
            </div>
          )}

          {renderIf(this.state.sellmodal===true)(
            <SellModal sellpicturedata={this.state.sellpicturedata} username={this.state.username} sellModalClose={this.sellModalClose.bind(this)}/>
          )}


          <Modal isOpen={this.state.isModalOpenAllPictures}>
            <AlignContainer>
              <PictureHeader>
                <h3>Here is the Picture You Can Buy!</h3>
              </PictureHeader>
              <AlphaPictureHolder>
                <FlexRow>
                  <ImageContainer>
                  <img style={styles.images2} src={this.state.allpicturespictureurl}/>
                  </ImageContainer>
                </FlexRow>
                <AlignContainer>
                  <FlexRow>
                    <div className="platybucks">
                      <p>{this.state.allpicturescurrentprice} platybucks</p>
                    </div>
                  </FlexRow>
                </AlignContainer>
              </AlphaPictureHolder>
              {renderIf(this.state.notenoughmoney===true)(
                <div style={styles.warning}>
                  <p>No picture for you! You do not have the money necessary to buy!</p>
                </div>
              )}
              <FlexRow>
                <AlignContainer>
                  <span>
                  <div className="buttonsmall" style={styles.floatbuttons} onClick={()=>this.buyPicture(this.state.allpicturespictureurl,this.state.allpicturescurrentprice,this.state.username, this.state.allpicturesuserref)}>Buy!</div>
                  <div className='buttonsmall' style={styles.floatbuttons} onClick={()=>{this.setState({isModalOpenAllPictures: false, notenoughmoney: false})}}>Cancel</div>
                  </span>
                </AlignContainer>
              </FlexRow>
              <br/>
            </AlignContainer>
          </Modal>

          <Modal isOpen={this.state.picturedeletemodalopen}>
            <AlignContainer>
              <PictureHeader>
                <h3>Are you super sure you want to delete this picture forever and ever?</h3>
              </PictureHeader>
              <AlphaPictureHolder>
                <FlexRow>
                  <ImageContainer>
                    <img style={styles.images2} src={this.state.picturetodeleteurl}/>
                  </ImageContainer>
                </FlexRow>
                <FlexRow>
                  <AlignContainer>
                    <div className='platybucks'>
                      <p>I want to live!</p>
                    </div>
                  </AlignContainer>
                </FlexRow>
              </AlphaPictureHolder>
              <br/>
              <FlexRow>
                <span>
                  <div className='buttonsmallwarning' style={styles.floatbuttons} onClick={(e)=>{this.deletepictureforsure(e)}}>Delete</div>
                  <div className='buttonsmall' style={styles.floatbuttons} onClick={(e)=>{this.canceldelete(e)}}>Cancel</div>
                </span>
              </FlexRow>
              <br/>
            </AlignContainer>
          </Modal>



          <Modal isOpen={this.state.isModalOpenOtherUser} >
            <AlignContainer>
              <OtherUserHeader>
                <p>{this.state.otherusername}&#39;s Pics</p>
              </OtherUserHeader>
            </AlignContainer>
            {renderIf(this.state.otheruserpicturearrayforsale.length===0 && this.state.otheruserpicturearray.length===0)(
                <AlignContainer>
                <br/>
                  <PictureHeader style={styles.nopictures}>
                    <p>{this.state.username} has no pictures, nor any pictures for sale...so sad too bad.</p>
                  </PictureHeader>
                </AlignContainer>
            )}
            {renderIf(this.state.otheruserpicturearrayforsale.length!=0 || this.state.otheruserpicturearray.length!=0)(
              <FlexRowModal>
                <FlexMargin/>
                <FlexSize1>
                  <AlignContainer>
                    <PictureHeader>
                      <h3>Pictures</h3>
                    </PictureHeader>
                  </AlignContainer>
                  <PictureScrollUsers>
                    {otheruserpictureContainers}
                    {renderIf(this.state.otheruserpicturearray.length===0)(
                      <NoPictureContainer>
                        <p>{this.state.otherusername} does not have any pictures not for sale</p>
                      </NoPictureContainer>
                    )}
                  </PictureScrollUsers>
                </FlexSize1>
                <FlexSize2>
                  <AlignContainer>
                    <PictureHeader>
                      <h3>Pictures for Sale</h3>
                    </PictureHeader>
                  </AlignContainer>
                  <PictureScrollUsers>
                  {otheruserpictureContainersforsale}
                  {renderIf(this.state.otheruserpicturearrayforsale.length===0)(
                    <NoPictureContainer>
                      <p>{this.state.otherusername} does not have any pictures sale</p>
                    </NoPictureContainer>
                  )}
                  </PictureScrollUsers>
                </FlexSize2>
                <FlexMargin/>
              </FlexRowModal>
            )}
            {renderIf(this.state.notenoughmoney===true)(
              <p>No picture for you! You do not have the points necessary to buy!</p>
            )}
              <br/>
              <AlignContainer>
                <div className='buttonsmall' onClick={()=>this.closeModalOtherUser()}>Cancel</div>
              </AlignContainer>
              <br/>
          </Modal>



        </FlexContainer>
      )}
      </div>
    )
  }
}



export default PictureMain
