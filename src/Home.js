import React from "react";
import { Text, TouchableOpacity, useWindowDimensions,View } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { decrement, increment } from "./HomeController";

export const Home = () => {
    const window = useWindowDimensions()
    const count=useSelector((state)=>state.counter?.count)
    const dispatch=useDispatch()
    return (
        <View style={{ height: window.height, width: window.width, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'#000',fontSize:16}}>{count}</Text>
            <TouchableOpacity onPress={()=>dispatch(increment(3))}>
                <Text style={{color:'#00f',marginTop:10}}>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:10}} onPress={()=>dispatch(decrement())}>
                <Text style={{color:'#f00'}}>Decrement</Text>
            </TouchableOpacity>
        </View>
    )
}