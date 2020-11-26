import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, View, Text, StatusBar, FlatList, Button} from 'react-native';
import * as Contacts from 'expo-contacts';



const styles = StyleSheet.create({
    container : {
        flex : 1,
        marginTop : StatusBar.currentHeigth || 0
    },
    item : {
        backgroundColor : 'gray',
        padding : 20,
        marginVertical : 8,
        marginHorizontal : 16
    }

})

const itemContato = ({nome, id}) => {
   return(
    <View style={styles.item}>
        <Text>{nome}</Text>
        <Button name="btnId" onPress={() => alert(id)} title="Ver id"/>
    </View>
   )
}

const renderItem = ({item}) => {
    return(
        <ItemContato nome={item.nome} id={item.id} />
    )
}

const Contatos = () => {
    const [contatos, setContatos] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              fields: [Contacts.Fields.Emails],
            });
    
            if (data.length > 0) {
              setContatos(data);
            }
          }
        })();
      }, []);

    return(
        <View style={styles.container}>
            <Text>Contatos</Text>
            <FlatList 
                data={contatos}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Contatos;

