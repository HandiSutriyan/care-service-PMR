import React, {Component} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import {Container, Content, Row, Col,
		Button, Icon, Card, List, ListItem} from 'native-base'
import { NavigationActions } from 'react-navigation'

export default class Profil extends Component{
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='person' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Profil</Text>
          </View>
        </View>
        ),
      headerRight:(
        <View>
            <View>
               <Button transparent onPress={() => navigation.navigate('Home')} style={{height:50}}>
                <Text style={{color:'#FFF',paddingRight:10,fontWeight:'bold'}}>Back</Text>
              </Button>
            </View>
        </View>
        ),
      headerStyle: {
          backgroundColor: 'red',
          height:50
        },
    };
  };
	render(){
		return(
			<Container>
				<Row style={style.wrapper}>
					<Text style={style.text}>
						Palang Merah Remaja Wira SMK Negeri 1 Gombong, adalah organisasi Kepalangmerahan yang mendidik para pemuda untuk dapat melaksanakan
						Tri Bhakti PMR dalam kehidupan sehari-hari berdasarkan 7 Prinsip Palang Merah dan Bulan Sabit Merah Internasional. 
					</Text>
					<Image source={require('./sponsor.png')} style={style.image} />
				</Row>
			</Container>
			)
	}
}
const style= StyleSheet.create({
	wrapper:{
		flex:1,
		padding:20,
		flexDirection:'column',

	},
	image:{
		width:'100%',
		marginTop:20,
	},
	text:{
		fontSize:14,
	}
})