import React, {Component} from 'react'
import {Text, ScrollView, Image, ImageBackground, View} from 'react-native'
import {Container, Content, Row, Col, Grid, List, ListItem,
		Icon, Button} from 'native-base'
import { NavigationActions } from 'react-navigation'

import {allMateri} from '../../actions'
import {connect} from 'react-redux'

class Materi extends Component{
	componentDidMount(){
		this.props.dispatch(allMateri())
	}
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='book' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Materi PMR</Text>
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
		console.log(this.props.materi.materies)
		return(
			<Container>
				<Row style={{flex:1}}>
					<List style={{flex:1}}>
					{this.props.materi.materies.map((item,i)=>{
						return(
							<ListItem key={i} onPress={()=>this.props.navigation.navigate('Detail',{materi:item.name,url:item.url})}>
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
		materi: state.menuReducer
		}
}

export default connect (mapStateToProps)(Materi);