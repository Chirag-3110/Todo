import React,{Component, useState} from "react";
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';
import Style from "./Styles/Style";
let num = 5;
const Data=[
    {   id:1,
        items:'Milk'
    },
    {   id:2,
        items:'Coffee'
    },
    {   id:3,
        items:'Bread'
    },
    {   id:4,
        items:'Biscuit'
    },
];
const App=()=>{
    
    
    const [data,setData]=useState(Data)
    const [visible,setVisible]=useState(false)
    const [newItem,setNewitem]=useState(null);
    const [refreshing,setRefreshing]=useState(false);
    const handleRefresh=()=>{
        setRefreshing(true);
        num++;
        setData([...data,{id:num,items:newItem}])
       setRefreshing(false);
    }
        return(
            <View style={Style.Container}>
                <View style={Style.searchView}>
                    <TextInput style={Style.input} 
                            placeholder="Search"
                            placeholderTextColor="black"
                    />
                    <TouchableOpacity
                        onPress={()=>setVisible(true)}
                    >
                        <Image
                            style={Style.image}
                            source={{uri:"https://preview.pixlr.com/images/800wm/100/1/1001390142.jpg"}}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList style={{marginTop:20}}
                    keyExtractor={item=>item.id}
                    data={data}            
                    renderItem={({item})=>(
                        <Text style={Style.data}>{item.items}</Text>
                    )}
                    refreshing={refreshing}
                    onRefresh={()=>{
                        handleRefresh();
                    }}
                />
                <Modal visible={visible} animationType="slide" transparent={true}>
                    <View style={Style.outView}
                    >
                        <View style={Style.inView}>
                            <Text style={{fontWeight:'bold',fontSize:15}}>
                                Enter your items for list
                            </Text>
                            <TextInput 
                                style={Style.addInput}
                                placeholder="Enter Item for List"
                                placeholderTextColor="black"
                                onChangeText={(newItem)=>setNewitem(newItem)}
                            />
                            <TouchableOpacity
                                style={Style.btnContainer}
                                onPress={()=>{
                                    setVisible(false)
                                    handleRefresh()
                                }}
                            >
                                <Text style={Style.btnTxt}>
                                    Add Item
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    
}
export default App;