import { Text, View, StyleSheet, Image, Button, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";

const Home = () => {
  const ongotToDetail = () =>{
    router.push('/detail')
  }
  return (
    <SafeAreaProvider>
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.cardcontainer}>
        <View>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageStyle}/>
        </View>
        <View style={styles.cardinfo}>
          <View style={styles.infoheader}>
            <View>
              <Text style={styles.chip}>Category</Text>
            </View>
            <Text style={{ flex: 1, textAlign: 'right', color: '#999' }}>Maret 2025</Text>
          </View>
          <Text style={styles.title}>React Native Navigation</Text>
          <Text>
            When the text is rendered, the onLayout function gets called with the
            component's layout.
          </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={ongotToDetail} title="Preview" color="#841584" />
            <Button title="Mulai" />
          </View>
        </View>
      </View>

      <View style={styles.cardcontainer}>
        <View>
          <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.imageStyle}/>
        </View>
        <View style={styles.cardinfo}>
          <View style={styles.infoheader}>
            <View>
              <Text style={styles.chip}>Category</Text>
            </View>
            <Text style={{ flex: 1, textAlign: 'right', color: '#999' }}>Maret 2025</Text>
          </View>
          <Text style={styles.title}>React Native Navigation</Text>
          <Text>
            When the text is rendered, the onLayout function gets called with the
            component's layout.
          </Text>
          <View style={styles.buttonContainer}>
            <Button onPress={ongotToDetail} title="Preview" color="#841584" />
            <Button title="Mulai" />
          </View>
        </View>
      </View>
    </View>
    </ScrollView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  imageStyle: {
    width: 100,
    height: 150,
    borderRadius:10,

  },
  cardcontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 15,
    backgroundColor: 'white',
    borderColor: '#f6f7f5',
    marginTop: 5,
    padding: 10,
    alignItems: 'center'
  },
  cardinfo: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoheader: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  chip: {
    backgroundColor: '#e6e4e1',
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius:5,
    fontSize: 12,
},
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'flex-start',
    marginTop: 10,
    gap:10,
  },

});

export default Home;
