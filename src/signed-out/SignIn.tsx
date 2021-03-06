import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Theme, withTheme} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationParams} from 'react-natigation';
import Hero from '../components/Hero';
import ProviderButton from '../components/ProviderButton';
import EmailPassword from '../providers/EmailPassword';
import Facebook from '../providers/Facebook';
import Google from '../providers/Google';

interface Props {
  navigation: NavigationParams;
}
function SignIn({navigation, theme}: Props) {
  return (
    <>
      <Hero
        height={330}
        colors={['rgba(0, 0, 0, 0.7)', 'rgba(0, 0, 0, 0.3)']}
        image={
          'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
        }>
      </Hero>

      <View style={styles.center}>
        <Google />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  fab: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 6,
    marginTop: -25,
  },
  button: {
    marginVertical: 5,
    width: 300,
  },
  divider: {
    width: 300,
    marginVertical: 30,
    height: StyleSheet.hairlineWidth
  },
});

export default withTheme(SignIn);
