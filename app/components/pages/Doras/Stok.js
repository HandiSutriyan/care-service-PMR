import React, { Component } from 'react';
import {Text, StyleSheet, View, WebView, Platform, ActivityIndicator} from 'react-native';
import {Button, Image, Icon, Container, Col} from 'native-base'
import { NavigationActions } from 'react-navigation'

 
export default class Stok extends Component {
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='color-fill' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Stok Darah PMI Kab. Kebumen</Text>
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
 
      <ActivityIndicator
        color='red'
        size='large'
        style={styles.ActivityIndicatorStyle}
      />
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
     render() {
       
       return (
    
         <WebView 
         style={styles.WebViewStyle} 
         source={{uri: 'http://ayodonor.pmi.or.id/stokdarah.php?module=3305'}} 
         javaScriptEnabled={true}
         domStorageEnabled={true}
         renderError={this.LoadError}
         renderLoading={this.ActivityIndicatorLoadingView}   
         startInLoadingState={true}  
         />
   
       );
     }
   }
   
 
 
const styles = StyleSheet.create(
{
 
WebViewStyle:
{
   justifyContent: 'center',
   alignItems: 'center',
   flex:1,
   marginTop: (Platform.OS) === 'ios' ? 20 : 0
},
 
ActivityIndicatorStyle:{
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  
},
Errmsg:{
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}
});