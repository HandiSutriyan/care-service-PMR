import React, {Component} from 'react'
import {Text, View, StyleSheet, Image} from 'react-native'
import {Container, Content, Row, Col,
		Button, Icon, Card, List, ListItem} from 'native-base'
import { NavigationActions } from 'react-navigation'

export default class About extends Component{
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='help' style={{color:'#FFF'}}/>
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
						Care Service adalah aplikasi yang dikembangkan untuk mempermudah pengguna untuk mengetahui informasi 
						mengenai UKS dan PMR Wira SMK Negeri 1 Gombong
					</Text>
					<Text>Versi Beta v1.0.0</Text>
					<Text>Copyright 2018 Karya Bhakti Alumni</Text>
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
		marginBottom:20
	}

})