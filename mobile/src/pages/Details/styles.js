import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container : {
        flex: 1,
        backgroundColor: 'rgb(16, 23, 27)'   
    },

    newsTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 35
    },

    newsContent: {
        color: 'white',
        textAlign: 'center',
        marginHorizontal: 35,
        marginVertical: 55
    },

    newsInfos: {
        flexDirection: "row" 
    },

    newsUser: {
        color: 'rgb(88, 86, 86)',
        fontSize: 20,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 5
    }
});

export default styles;