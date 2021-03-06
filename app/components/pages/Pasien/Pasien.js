import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, WebView} from 'react-native'
import {Container, Content, Row, Col, Spinner,
		Button, Image, Icon, Card, List, ListItem} from 'native-base'

import { NavigationActions } from 'react-navigation'

export default class Pasien extends Component{
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='person' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Data Pasien hari ini</Text>
          </View>
        </View>
        ),
      headerRight:(
        <View>
            <View>
               <Button transparent onPress={() => navigation.goBack()} style={{height:50}}>
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
  ActivityIndicatorLoadingView() {
    
    return (
 
     <Container>
      <Content>
        <Spinner color='red'/>
      </Content>
     </Container>
    );
  }
 LoadError(){
  return(
    <Container>
      <Col style={styles.Errmsg}>
       <Icon name='warning'/>
        <Text> Maaf Gagal Memuat Data !!</Text>
        <Text>Fitur ini membutuhkan koneksi internet</Text>
        <Text>Mohon periksa kembali koneksi Anda!</Text>
      </Col>
    </Container>
    )
 }
	render(){
		return(
			<Container>
				<Row>
					 <WebView 
           source={{uri: 'https://pmrwirastemsagoorg.000webhostapp.com/api?pasien'}} 
           javaScriptEnabled={true}
           domStorageEnabled={true}
           renderError={this.LoadError}
           renderLoading={this.ActivityIndicatorLoadingView}   
           startInLoadingState={true}  
           />
				</Row>
			</Container>
			)
	}
}

const styles= StyleSheet.create({
  Errmsg:{
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}
})