import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

export const Screen: React.FC<any> = ({ children }) => {
  
  return (
    <>
    <StatusBar animated barStyle={'light-content'} />
    <SafeAreaView style={styles.full}>
      
        {children}
    </SafeAreaView>  
    </>
    );
}; 


    
      

const styles = StyleSheet.create({
  full: {
    flex: 1,
    backgroundColor: 'gray',
  },
 
  
});
