import React from 'react';
import {Image, ImageBackground, Text, TextInput, TouchableOpacity, View} from 'react-native';
 
const WelcomeScreen = () => {
  return (
    <View style={{flex: 1,}}>
<ImageBackground style={{minHeight:600,alignItems:'center',justifyContent:'center'}} source={require('../assets/Image/bgimage222.jpeg')}>
<View style={{width:'80%',backgroundColor:'white',borderRadius:20,padding:20}}>
<Text style={{color:'purple',textAlign:'center',fontSize:24,fontWeight:'500',marginTop:30}}>WELCOME</Text>
<Text style={{color:'purple',textAlign:'center',fontSize:17 }}>we are glad to see you here </Text>
<Text style={{color:'purple',textAlign:'center',fontSize:17, marginTop:25}}>Select Your Type  </Text>


<View style={{flexDirection:'row',marginTop:20,justifyContent:'center',}}>
    <View style={{width:'50%',}}>
     <Image style={{height:60,width:50,borderRadius:30,alignSelf:'center'}} source={require('../assets/Image/seller.png')}/>
    <Text style={{color:'purple',textAlign:'center',fontSize:17,marginTop:15 }}>Seller</Text>
    </View>
<View style={{width:'50%',alignSelf:'center'}}>
<Image style={{height:60,width:50,borderRadius:30,alignSelf:'center'}} source={require('../assets/Image/logistics.png')}/>
<Text style={{color:'purple',textAlign:'center',fontSize:17,marginTop:15 }}>Sogistics</Text>
</View>
</View>
 
<View style={{position:'relative',marginTop:20}}>
<TextInput style={{backgroundColor:'white',borderWidth:2,borderRadius:20,borderColor:'purple',paddingLeft:40,fontSize:20}} placeholder='Enter Phone No'/>
<Image style={{height:25,width:25,position:'absolute',top:14,tintColor:'black',marginLeft:10}} source={require('../assets/Image/call.png')}/>
</View>
 <View style={{flexDirection:'row',marginTop:10}}>
 <Image style={{height:25,width:25}} source={require('../assets/Image/checkbox.png')}/>
 <View >
 <Text style={{color:'gray',fontSize:17 }}>I have read agreed to all the tems & </Text>
 <Text style={{color:'purple',fontSize:17 }}>we are glad to see you here </Text>
 </View>
 </View>

 <TouchableOpacity style={{ backgroundColor:'purple', padding: 10, marginTop: 20 ,borderRadius:30}}>
 <Text style={{ fontSize: 18, color: 'white', textAlign: 'center' }}>SUBMIT</Text>
   </TouchableOpacity>



</View>
</ImageBackground>







      </View>
  );
};

export default WelcomeScreen;