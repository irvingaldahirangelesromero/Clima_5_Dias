import { StyleSheet, View } from 'react-native';
import Header from '../Components/Header';
import Footer from '../Components/Foother';
import Contenido from '../Components/Contenido';

const App = () => {
  return (
    <View style={styles.container}>
      <Header
        titulo="Pronóstico del Clima"
        nombre="Irving Aldahir Angeles Romero"
        imagen={require('../img/myAvatar.png')}
      />
      <Contenido />
      <Footer fecha={new Date().toLocaleDateString()} grupo="5B" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;