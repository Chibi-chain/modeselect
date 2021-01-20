import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Screen } from '../components/screen'; 
import { useColorScheme } from 'react-native-appearance';


export const Home = () => {
  const mode = useColorScheme();

  const styles = StyleSheet.create({
    text: {
      fontSize: 20,
      color: mode === 'dark' ? 'blue' : 'orange'
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  });
  

  return ( 
    <Screen>
        <View style={styles.center}>
            <Text style={styles.text}>
                {`You selected ${mode === 'dark' ? '🌑' : '🌕'} mode`}
            </Text>
        </View>
    </Screen>

    );
}; 
export default Home;


    
      

