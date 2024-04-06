import { View, Text, StyleSheet, Image} from 'react-native';

export default function HealthContainer(props){
    var healthPercent = props.Health + "%"
    return (
        <View style={styles.healthContainer}>
            <Image
            style={styles.heartIcon}
            source="./assets/heart.png"/>
            <View style={{flex:1, paddingLeft: 15}}>
                <View style={styles.healthBar}></View>
                <View style={[styles.activeHealthBar, {width: healthPercent}]}></View>
                <Text style={styles.healthValue}>{healthPercent}</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    healthContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 15
    },
    heartIcon:{
        height: 20,
        width: 20,
        alignSelf: "left",
    },
    healthBar: {
        backgroundColor:"rgb(69, 179, 176)",
        width:"100%",
        height: 20,
        zIndex:1,
        elevation: 1,
        position: 'absolute',
        borderRadius: 18
    },
    activeHealthBar:{
        backgroundColor:"rgb(167, 217, 175)",
        height: 20,
        zIndex:2,
        elevation:2,
        position: 'absolute',
        borderRadius: 18
    },
    healthValue:{
        color: '#FFFFFF',
        fontSize: 20,
        elevation: 3,
        zIndex:3,
        position: 'absolute',
        left: '50%',
        textAlign: 'center',

    }

    })

