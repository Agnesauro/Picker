import { View, StyleSheet } from "react-native"; // 
import ComponentStorage from "../Components/ComponentStorage";

export default function Usuarios(){
    return(
       
        <View style={styles.container}>
            <ComponentStorage/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5', 
    }
});