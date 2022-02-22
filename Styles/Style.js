import React from "react";
import {
    Dimensions,
    StyleSheet
} from 'react-native'
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height;
const Style=StyleSheet.create({
    Container:{
        flex:1,
        alignItems: 'center',
        backgroundColor:"white"
    },
    input:{
        width:windowWidth/1.2,
        height:45,
        backgroundColor:'#E4E4E4',
        borderWidth:2,
        borderColor:'black',
        // marginVertical:2,
        borderRadius:5,
        elevation:20,
        color:'black',
        fontSize:13,
        fontWeight:'bold'
    },
    image:{
        width:windowWidth/7,
        height:windowHeight/7,
        resizeMode:'contain'
    },
    searchView:{
        flexDirection:'row',
        alignItems: 'center',
        borderColor:'black',
        borderBottomWidth:2,
    },
    data:{
        width:windowWidth-10,
        padding:10,
        borderBottomWidth:2,
        borderColor:'#7C7D7C',
        fontWeight:'bold',
        color:'black',
        fontSize:20,
        fontStyle:'italic'
    },
    outView:{
        // backgroundColor:'#000000aa',
        flex:1,
        justifyContent:'flex-end'
    },
    inView:{
        backgroundColor:'#74BBFC',
        height:'30%',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        alignItems: 'center',
    },
    addInput:{
        width:windowWidth-50,
        height:windowWidth/8,
        backgroundColor:'#E4E4E4',
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
        elevation:20,
        color:'black',
        fontSize:13,
        marginTop:20
    },
    btnContainer:{
        backgroundColor:'#2897FD',
        width:windowWidth-50,
        height:50,
        borderRadius:10,
        borderColor:'black',
        borderWidth:2,
        alignItems: 'center',
        justifyContent: 'center',
        elevation:10,
        marginTop:10
    },
    btnTxt:{
        fontWeight:'bold',
        color:'white',
        fontSize:15
    }
})
export default Style;