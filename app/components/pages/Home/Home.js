import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View, StyleSheet} from 'react-native'
import {Container, Content, Row, Col, Footer, FooterTab, Grid, Spinner,
		Icon, Button} from 'native-base'
import Swiper from 'react-native-swiper'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import FootMenu from '../Footer/Footer.js'
import {allInfo} from '../../actions'

class Home extends Component{
	componentDidMount(){
		this.props.dispatch(allInfo())
	}

	 static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
      	<View style={{flexDirection:'row',justifyContent:'flex-start'}}>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
         	<Image source={require('./care-mini.png')} style={{height:50,width:100,margin:5}}/>
          </View>
        </View>
        ),
   
      headerStyle: {
          backgroundColor: '#fff',
          height:70,
        },
    };
  };
 handleError(isLoading,data){
	const news=this.props.info;
	console.log('isLoading: '+isLoading);
	console.log('data: '+data);
  	if (isLoading != false && data != [] ){
  		return(
  			<Swiper autoplay={true}>
			{this.props.info.infos.map((item,i)=>(
				<Container style={style.slide1} key={i}>
			        <Text style={style.slideTiltle}>{item.kegiatan}</Text>
			        <Text>Tanggal: {item.tgl} Diupload: {item.upload}</Text>
			        <Text style={style.slideText}>{item.ket}</Text>
			    </Container>
			))}		                        
		    </Swiper>
  			)
  	}else if(isLoading != false && data == []){
  		return(
  			<Container>
	  			<Col style={style.errorLoad}>
		  			<Text>Tidak ada data</Text>
		  		</Col>
	  		</Container>
  			)
  }else{
  	return(
  		<Container>
  			<Col>
  				<Spinner color='white'/>
  			</Col>
  		</Container>
  		)
  }
}
	render(){
		console.log(this.props.info.isLoading)
		return(
			<Container>
				<Row size={2}>
					<Content style={{backgroundColor:'red',marginBottom:20, width:'100%', height:'auto'}}>
						<Row size={1} style={{padding:10}}>
							<Icon style={{color:'#fff',marginRight:10}} name='information-circle'/>
							<Text style={style.slideText}>Info Terkini</Text>
						</Row>
						<Row size={5} style={style.wrapper}>
							{this.handleError(this.props.info.isLoading,this.props.info.infos)}	
						</Row>						
					</Content>
				</Row>
				<Row size={1} style={{marginLeft:35,marginRight:40,marginBottom:0}}>
					<Button danger style={{marginRight:10,height:100,width:'50%',flexDirection:'column',justifyContent:'center'}}  onPress={()=>this.props.navigation.navigate('Obat')}>
						<Icon name="medkit" style={{color:'#fff',fontSize:32}}/>
						<Text style={{color:'#fff',fontWeight:'bold',marginTop:10}}>Data Obat</Text>
					</Button>
					<Button warning style={{height:100,width:'50%',flexDirection:'column',justifyContent:'center'}}>
						<Icon name="book" style={{color:'red',fontSize:32}}/>
						<Text style={{color:'red',fontWeight:'bold',marginTop:10}} onPress={()=>this.props.navigation.navigate('Materi')}>Materi PMR</Text>
					</Button>
				</Row>
				<Row size={1} style={{marginLeft:35,marginRight:40,marginTop:10}}>
					<Button warning style={{marginRight:10,height:100,width:'50%',flexDirection:'column',justifyContent:'center'}}  onPress={()=>this.props.navigation.navigate('Pasien')}>
						<Icon name="person" style={{color:'red',fontSize:32}}/>
						<Text style={{color:'red',fontWeight:'bold',marginTop:10}}>Data Pasien</Text>
					</Button>
					<Button danger style={{height:100,width:'50%',flexDirection:'column',justifyContent:'center'}} onPress={()=>this.props.navigation.navigate('Doras')}>
						<Icon name="water" style={{color:'#fff',fontSize:32}}/>
						<Text style={{color:'#fff',fontWeight:'bold',marginTop:10}}>Donor Darah</Text>
					</Button>
				</Row>

				<Footer style={{backgroundColor:'red',flexDirection:'column',justifyContent:'flex-start',height:50}}>
                    <FooterTab style={{backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between',width:365}}>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Petugas')}>
                              <Icon name='people' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={style.iconText}>Petugas UKS</Text>
                            </Button>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Blog')}>
                              <Icon name='paper' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={style.iconText}>Blog</Text>
                            </Button>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Profil')}>
                              <Icon name='person' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={style.iconText}>Profil Kami</Text>
                            </Button>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('About')}>
                              <Icon name='help' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={style.iconText}>Tentang Aplikasi</Text>
                            </Button>
                      </FooterTab>                  
                </Footer>
			</Container>
			)
	}
} 

const mapStateToProps = (state) => {
	return{
		info: state.menuReducer
		}
}

export default connect (mapStateToProps)(Home);

const style= StyleSheet.create({
	wrapper: {
        height:200,
        width:'100%',
    },
    //style slide
    slide1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: 'transparent',
        padding: 10,
      },
      slideText:{
      	color:'#fff',
      	fontSize:18
      },
      slideTiltle:{
      	color:'#fff',
      	fontWeight:'bold',
      	fontSize:20,
      },
      iconText:{
      	color:'#fff',
      	fontSize:11
      },
      errorLoad:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:50
      }
      
})