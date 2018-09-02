import React, {Component} from 'react'
import {ScrollView, Image, ImageBackground, View, StyleSheet} from 'react-native'
import {Container, Row, Col, List, ListItem, Spinner, Text,
		Icon, Button, Left, Right, Body, Card, CardItem, Thumbnail} from 'native-base'
import { NavigationActions } from 'react-navigation'

import {allPosts} from '../../actions'
import {connect} from 'react-redux'

class Blog extends Component{
	componentDidMount(){
		this.props.dispatch(allPosts())
	}
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='paper' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Blog PMR</Text>
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
 handleError(isLoading,data){
  const res=this.props.blog;
  console.log('isLoading: '+isLoading);
  console.log('data: '+data);
    if (isLoading != false && data != [] ){
      return(
        res.allposts.map((item,i)=>(

                <Card key={i}>
                  <CardItem button onPress={()=>this.props.navigation.navigate('Read',{title:item.title,url:item.url})}>
                    <Left>
                      <Thumbnail source={{uri:"https:"+item.author.image.url+"'"}}/>
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.author.displayName}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
        ))
        )
    }else if(isLoading != false && data == []){
      return(
        <Container>
          <Col style={styles.errorLoad} >
            <Text note>Tidak ada data</Text>
          </Col>
        </Container>
        )
  }else{
    return(
      <Container>
        <Col>
          <Spinner color='red'/>
        </Col>
      </Container>
      )
  }
}
	render(){
		return(
			<Container>
				<ScrollView>
					
							 <List>
          {this.handleError(this.props.blog.isLoading,this.props.blog.allPosts)}
        </List>
					
				</ScrollView>
			</Container>
			)
	}
}
const mapStateToProps = (state) => {
	return{
		blog: state.menuReducer
		}
}

export default connect (mapStateToProps)(Blog);

const styles= StyleSheet.create({
  errorLoad:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:50
      }
})