import { View, Text, StyleSheet, Image} from 'react-native';

export default function GemContainer(props){
    var gemCount = String(props.Gems)
    return(
        <View style={styles.gemContainer}>
            <Image style={styles.gemIcon}
            source="./assets/diamond.png"/>
            <Text style={styles.gemValue}>{gemCount}</Text>
        </View>
    )


}

const styles = StyleSheet.create({
    gemContainer: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 15
    },
    gemIcon: {
        height: 20,
        width: 20,
        alignSelf: "left",

    },
    gemValue: {
        color: '#45B3B0',
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 15,

    }


})
