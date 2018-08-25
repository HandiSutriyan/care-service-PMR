import React, {Component} from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import {Container, Content, Row, Col,
		Button, Image, Icon, Card, List, ListItem} from 'native-base'

import { NavigationActions } from 'react-navigation'
import {connect} from 'react-redux'
import {allJadwal} from '../../actions'

class Doras extends Component{
	componentDidMount(){
		this.props.dispatch(allJadwal())
	}
	static navigationOptions = ({ navigation }) => {
            
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start',paddingLeft:10}}>
        <View>
        <Icon name='water' style={{color:'#FFF'}}/>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#fff',fontSize:15,paddingLeft:5,fontWeight:'bold'}}> Donor Darah</Text>
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
		console.log(this.props.doras.jadwal)
		return(
			<Container>
				<Row size={1}>
					<Content style={{backgroundColor:'red',margin:20, padding:10, borderRadius:10}}>
						<Container>
							<Row>
								<Col size={1}>
									<Icon name="help" style={{color:'#fff',fontSize:128}}/>
								</Col>
								<Col size={2}>
									<Text style={styles.textTitle}>Apa saja sih syarat buat Donor Darah? </Text>
									<Text style={styles.textWhite}>1. Usia > 17 tahun</Text>
									<Text style={styles.textWhite}>2. Berat badan > 30 kg</Text>
									<Text style={styles.textWhite}>3. Sehat Jasmani dan Rohani</Text>
									<Text style={styles.textWhite}>4. Lolos pengecekkan medis oleh petugas</Text>
								</Col>
							</Row>
						</Container>
					</Content>
				</Row>
				<Row size={2}>
					<List style={{flex:1}}>
						<ListItem>
							<Button danger style={styles.buttonCek} onPress={()=>this.props.navigation.navigate('Stok')}>
								<Text style={styles.textWhite}>Cek Stok Darah PMI Kab. Kebumen</Text>
							</Button>
						</ListItem>
						<ListItem itemDivider>
							<Text style={styles.barTitle}>Jadwal Donor Darah</Text>
						</ListItem>
						<ScrollView>
							{this.props.doras.jadwal.map((item,i)=>(
								<ListItem key={i}>
									<Col>
											<Text>Tanggal:{item.tgl}</Text>
											<Text>Kegiatan: {item.kegiatan}</Text>
											<Text>{item.ket}</Text>
									</Col>
								</ListItem>
							))}	
						</ScrollView>					
					</List>
				</Row>
			</Container>
			)
	}
}
const mapStateToProps= (state) =>{
	return{
		doras : state.menuReducer
	}
}
export default connect(mapStateToProps)(Doras);

const styles= StyleSheet.create({
	textWhite:{
		color:'#fff'
	},
	textTitle:{
		color:'#fff',
		fontWeight:'bold'
	},
	barTitle:{
		color:'black',
		fontWeight:'bold'
	},
	barBlock:{
		height:20,
		padding:10,
		backgroundColor:'grey'
	},
	buttonCek:{
		paddingLeft:10,
		paddingRight:10,
		width:'100%'
	}
})