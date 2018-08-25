import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView, WebView} from 'react-native'
import {Container, Content, Row, Col, Spinner,
		Button, Image, Icon, Card, List, ListItem} from 'native-base'

import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'
import {allObat} from '../../actions'

class Obat extends Component{
	componentDidMount(){
		this.props.dispatch(allObat())
	}
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='medkit' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Data Ketersediaan Obat</Text>
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
      <Col style={styles.Errmsg} >
        <Icon name='warning'/>
        <Text> Maaf Gagal Memuat Data !!</Text>
      </Col>
    </Container>
    )
 }
	render(){
		return(
			<Container>
				<Row>
					 <WebView 
           source={{uri: 'https://pmrwirastemsagoorg.000webhostapp.com/api?obat'}} 
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
const mapStateToProps = (state) =>{
	return{
		obat : state.menuReducer
	}
}
export default connect (mapStateToProps)(Obat);

const styles= StyleSheet.create({
  Errmsg:{
  flex:1,
  flexDirection:'column',
  justifyContent:'center',
  alignItems:'center'
}
})