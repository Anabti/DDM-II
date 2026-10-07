import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView style={styles.srcst}>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.
        </Text>

      </ScrollView>
      <Text>Open up App.js to start working on your app!</Text>
      <TextInput placeholder="teste"></TextInput>
      <Button onPress={''} title='Botão'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  srcst:{
     backgroundColor: '#db28a0',
     maxHeight:'20%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
