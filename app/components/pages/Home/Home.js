import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View} from 'react-native'
import {Container, Content, Row, Col, Footer, FooterTab, Grid,
		Icon, Button} from 'native-base'
import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

import FootMenu from '../Footer/Footer.js'
import {allMenu} from '../../actions'

class Home extends Component{
	componentDidMount(){
		this.props.dispatch(allMenu())
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
	render(){
		return(
			<Container>
				<Row size={2}>
					<Content style={{backgroundColor:'red',padding:20,margin:20, height:'auto',borderRadius:10}}>
						<Row size={1}>
							<Icon name="information-circle" style={{color:'#fff'}}/>
							<Text style={{color:'#fff',marginLeft:10,fontSize:20,fontWeight:'bold'}}>Info Donor Darah :</Text>
						</Row>
						<Row size={3}>
							<Text style={{color:'#fff',margin:10}}>
								Terima kasih sekali sudah mempercayai kami sebagai pendamping belajar Anda. Kami berharap program Hacking English ini dapat membantu Anda meningkatkan kemampuan berbicara Anda dalam Bahasa Inggris.
							</Text>
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

				<Footer style={{backgroundColor:'red',flexDirection:'column',justifyContent:'flex-start',height:60}}>
                    <FooterTab style={{backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between',width:365}}>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Petugas')}>
                              <Icon name='people' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={{color:'#fff'}}>Petugas UKS</Text>
                            </Button>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Home')}>
                              <Icon name='person' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={{color:'#fff'}}>Profil Kami</Text>
                            </Button>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Home')}>
                              <Icon name='help' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={{color:'#fff'}}>Tentang Aplikasi</Text>
                            </Button>
                      </FooterTab>                  
                </Footer>
			</Container>
			)
	}
} 

const mapStateToProps = (state) => {
	return{
		menu: state.menuReducer
		}
}

export default connect (mapStateToProps)(Home);