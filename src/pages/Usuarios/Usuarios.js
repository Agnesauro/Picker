import { ScrollView, Text, TextInput, View } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import ComponentStorage from "../Components/ComponentStorage";

export default function Login(){
    return(
        <View>
        <ComponentStorage/>
        </View>
    )
}

    