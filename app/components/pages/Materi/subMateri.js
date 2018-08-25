import React, {Component} from 'react'
import {Text, View, FlatList} from 'react-native'
import {Container, Col, Row, Image, Button, Icon
		, List, ListItem} from 'native-base'

import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'

class subMateri extends Component{
	state={

	title:this.props.navigation.getParam('materi'),
	subItem:this.props.navigation.getParam('sub')
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
	render(){
		console.log(this.state.subItem)
		return(
			
			<Container>
				<Row style={{flex:1}}>
					<List style={{flex:1}}>
					{this.state.subItem.map((item,i)=>{
						return(							
								<ListItem key={i}>
									<Text>{item.name}</Text>
								</ListItem>
							)
					})}
					</List>
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

export default connect (mapStateToProps)(subMateri);