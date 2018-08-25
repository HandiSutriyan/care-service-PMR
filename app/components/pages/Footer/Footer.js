import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View} from 'react-native'
import {Container, Content, Row, Col, Footer, FooterTab, Grid,
		Icon, Button} from 'native-base'
import { NavigationActions } from 'react-navigation'

export default class FootMenu extends Component{
	render(){
		return(
			<Footer style={{backgroundColor:'red',flexDirection:'column',justifyContent:'flex-start',height:60}}>
                    <FooterTab style={{backgroundColor:'transparent',flex:1,flexDirection:'row',justifyContent:'space-between',width:365}}>
                            <Button vertical style={{marginRight:10,marginBottom:5}}  onPress={()=>this.props.navigation.navigate('Home')}>
                              <Icon name='home' style={{textAlign:'center',color:'#FFF'}}/>
                              <Text style={{color:'#fff'}}>Beranda</Text>
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
			)
	}
}