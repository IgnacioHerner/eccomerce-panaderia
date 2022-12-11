import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { useFonts } from 'expo-font';
import { styles } from './styles';
import AppNavigator from './navigation';

export default function App() {

  const [loaded] = useFonts({
    'Lato-Regular' : require('../assets/fonts/Lato-Regular.ttf'),
    'Lato-Light' : require('../assets/fonts/Lato-Light.ttf'),
    'Lato-Italic' : require('../assets/fonts/Lato-Italic.ttf'),
    'Lato-Bold' : require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Black' : require('../assets/fonts/Lato-Black.ttf'),
  });

  if (!loaded){
    return (
      <View style={styles.container}>
        <ActivityIndicator color='#DAC4F7' size='large'/>  
      </View>
    )
  }
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  )
}

