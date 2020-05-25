import React from 'react';
import { View, Text, FlatList, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import styles from './styles.js';


function Main(){
    const navigation = useNavigation();
  
      function Item() {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details')}>
                <View style={styles.cardsNews} >
                    <Text style={styles.newsTitle}>
                        Titulo de teste
                    </Text>
                    <Text style={styles.newsResume}>
                        Teste campo de resumo
                    </Text>

                    <View style={styles.newsInfos} 
                        onPress={() => navigation.navigate('Details')}>
                            <Icon name="user" style={styles.newsUser}> <Text>Luiz Adalberto </Text></Icon>
                            <Icon name="clock" style={styles.newsUser}> <Text>30/12/2000 </Text></Icon>
                    </View>
                </View>
            </TouchableOpacity>

        );
      }
    return(
       
        
          
          
                <FlatList
                  data={'dataa'}
                  style={styles.container}
                  renderItem={({ item }) => <Item title={item.title} />}
                  keyExtractor={item => item.id}
                />
          



    )
}

export default Main;