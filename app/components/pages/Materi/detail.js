import React, {Component} from 'react'
import {Text, View, FlatList, WebView} from 'react-native'
import {Container, Col, Content, Row, Image, Button, Icon, Spinner
		, List, ListItem} from 'native-base'

import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

class Detail extends Component{
	state={

	title:this.props.navigation.getParam('materi'),
	url:this.props.navigation.getParam('url')
}
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='book' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> {navigation.getParam('materi')}</Text>
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
	      </Col>
	    </Container>
	    )
	 }
	render(){
		console.log(this.state.subItem)
		return(
			
			<Container>
				<Row>
					 <WebView 
			           source={{uri: this.state.url}} 
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
const mapStateToProps = (state) => {
	return{
		submateri: state.menuReducer
		}
}

export default connect (mapStateToProps)(Detail);