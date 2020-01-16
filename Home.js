import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
  let pic = {
    uri:
      'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  return (
    <View style={styles.basic}>
      <Text>Hello, World!</Text>
      <Image source={pic} style={styles.basicImage} />
      <Button title="Go To Docs" onPress={() => navigation.navigate('Docs')} />
    </View>
  );
};

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  basic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  basicImage: {
    width: 193,
    height: 110,
  },
});

export default Home;
