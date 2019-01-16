/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {FlatList,Alert,ScrollView,Button,Platform, StyleSheet, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, Text, View} from 'react-native';
import {Image} from 'react-native'

/**
 * 为了避免骚扰，我们用了一个样例数据来替代Rotten Tomatoes的API
 * 请求，这个样例数据放在React Native的Github库中。
 * 当然，由于众所周知的原因，这个地址可能国内访问也比较困难。
 */
var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +  
    'Shake or press menu button for dev menu',
}); 

//电影数据
var MOCKED_MOVIES_DATA = [
  {
    title:"标题",
    year:"2015",
    posters:{
      thumbnail:'http://i.imgur.com/UePbdph.jpg'
    }
  }
];

type Props = {};
export default class App extends Component<Props> {

	 _onPressButton() {
    Alert.alert('ok   你点击了这个按钮!')
  }
  	_onPressTwoBtn(){
  	Alert.alert('哈哈哈哈哈哈')
  	}

    constructor(props){
      super(props);
      this.state = {
        movies:null, //自定义的state变量
        data:[],
        loaded:false,
      }
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
      this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){
      this.fetchData();
    }

    //网络请求
    fetchData(){
      fetch(REQUEST_URL)
        .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            // movies:responseData.movies
            data:this.state.data.concat(responseData.movies),
            loaded:true,
          });
        });
    }

    //提示框
    renderLoadingView(){
      return(
        <View style={styles.container}> 
          <Text>正在加载电影数据...</Text>
        </View>
      );
    }

    //电影信息
    renderMovie({item}) {
      return (
        <View style={styles.container}>
          <Image
            source={{uri: item.posters.thumbnail}}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.year}>{item.year}</Text>
          </View>
        </View>
      );
    }
  // _keyExtractor = (item, index) => item.id;
  render() {
    // var movie = MOCKED_MOVIES_DATA[0];
    if (!this.state.loaded){
      return this.renderLoadingView();
    }
    // var movie = this.state.movies[0];
    
    return (
      <FlatList 
        keyExtractor={(item, index) => index.toString()}
        style={styles.list}
        data={this.state.data}
        renderItem={this.renderMovie}
      />
    );
    // return (
    //  <View style={styles.container}>
    //   <Image source={{uri:movie.posters.thumbnail}} style={styles.thumbnail}/>
    //   <View style={styles.rightContainer}>

    //   <Text style={styles.title}>{movie.title}</Text>
    //   <Text style={styles.year}>{movie.year}</Text>

    //   </View>
      
      
    //  </View>

    // );
    // oc swift js css html python java react-native

  }
}



var styles = StyleSheet.create(
  {
    container:{
      flex:1,
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#F5FCFF",
      flexDirection:'row'
    },
    thumbnail:{
      width:53,
      height:81
    },
    rightContainer:{
      flex:1,
      // backgroundColor:"#000000"
    },
    title:{
      fontSize:17,
      marginBottom:8,
      textAlign:'center',
    },
    year:{
      textAlign:'center',
      fontSize:14,
    },
    list:{
      paddingTop:20,
      backgroundColor:'#F5FCFF',
    }
  }
);

//Bananer图片类
//  class Bananer extends Component{
//   render(){
//   let pic = {
//       uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//     };
//     return (
//         <Image source={pic} style={{width:193,height:100}}/>
//       )
//   }
// }

// ===============================================
// class PizzaTranslator extends Component{

// 	constructor(props) {
// 	  super(props);
	
// 	  this.state = {text:''};
// 	}

// 	render(){
// 		return(
// 			<View style={{padding:10}}>
// 				<TextInput
// 				style={{height=40}}
// 				placeholder="点击输入文字进行替换..."
// 				onChangeText
// 				/>
// 			</View>
// 			)
// 	}


// }
 

// //闪烁文字类
// class Blink extends Component{

// constructor(Props){
// super(Props);
// this.state = {isShowingText:true};
// }

// render(){

//   return (

//     )
// }

// }
// ===============================================


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//    buttonContainer: {
//     margin: 20,
//     borderColor:'#000000',
//   },
//   alternativeLayoutButtonContainer:{
//   	margin:20,
//   	flexDirection:'row',
//   	justifyContent:'space-between',
//   },
//   button:{
//   	marginBottom: 30,
//   	width: 260,
//   	alignItems:'center',
//   	backgroundColor:'#2196F3'
//   }

// });



//   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to React Native</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //     <Text style={styles.instructions}>hello world</Text>

    //     <Bananer name='bananer' />

    //     <Button
  	// 	onPress={this._onPressButton}
 	 	// title="点我！"
		// />

		// <View style={styles.buttonContainer}>
		// 	<Button
		// 	onPress={this._onPressTwoBtn}
		// 	title="第二个按钮"	
		// 	color="#000000"
		// 	/>
		// </View>

		// <View style={styles.alternativeLayoutButtonContainer}>
		// 	<Button 
		// 		title="第三个按钮"
		// 		onPress={this._onPressButton}
		// 	/>

		// </View>
		//  <TouchableOpacity onPress={this._onPressButton} underlayColor="white">
    //       <View style={styles.button}>
    //         <Text style={styles.buttonText}>TouchableOpacity</Text>
    //       </View>
    //     </TouchableOpacity>

		// <View>
		// // 	<Text></Text>
		// // </View>


      // </View>