import React, { Component } from 'react';
import {Header,Icon} from 'react-native-elements'
import { View, StyleSheet, Text} from 'react-native'

const MyHeader =props=>{
    return(
        <Header
        centercomponent={{text:props.title, style:{color:"white",fontsize:20,fontweight:"bold"}}}
        backgroundcolor="orange"
        />
    )
}

export default MyHeader
