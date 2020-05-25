import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: 'rgb(16, 23, 27)'
    },

    cardsNews: {
        padding: 24,
        backgroundColor: '#4592af',
        borderRadius: 5,
        borderTopWidth: 1,
        borderTopColor: 'white',
        marginVertical: 20,
        marginHorizontal: 10
    },

    newsTitle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    
    newsResume: {
        color: 'black'
    },

    newsInfos: {
        flexDirection: "row" 
    },

    newsUser: {
        color: 'rgb(88, 86, 86)',
        fontSize: 20,
        paddingTop: 40
    }
});

export default styles;