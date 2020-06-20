import auth from '@react-native-firebase/auth';
import React, {useContext, useEffect, useState} from 'react';
import {Alert,Button} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-community/google-signin';
import {UserContext} from '../App';
import ProviderButton from '../components/ProviderButton';
import {getProviderButtonTitle} from '../util/helpers';

GoogleSignin.configure({
  scopes: ['profile', 'email'],
  // TODO change me
  webClientId: '478021106242-k0ubf98g1vhfo35ffb1deiggutlfie3i.apps.googleusercontent.com'
});

//com.googleusercontent.apps.478021106242-657nej3r7hen0i6ar88bc6tqme080kml
function Google() {
  async function onGoogleButtonPress() {
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the file 
    const credential = auth.GoogleAuthProvider.credential(idToken);

    // Sign in the user with the credential 
    return auth().signInWithCredential(credential);
  }

  return (
    <Button 
      title='Google SignIn'
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  )

}
export default Google;

/*
const PROVIDER_ID = 'google.com';

function Google() {
  const [loading, setLoading] = useState(false);
  const user = useContext(UserContext);

  const {isOnlyProvider, title, variant} = getProviderButtonTitle(
    user,
    PROVIDER_ID,
  );

  async function handleGoogle() {
    if (!loading && user) {
      setLoading(true);
      console.log
      try {
        await GoogleSignIn.hasPlayServices();
          
        if (variant === 'UNLINK') {
          await user.unlink(PROVIDER_ID);
        } else {
          await GoogleSignin.signIn();
          const [accessToken, idToken] = await GoogleSignin.getTokens();
          const credential = auth.GoogleAuthProvider.credential(
            idToken,
            accessToken,
          );
            
          if (variant === 'LINK') {
            await user.linkWithCredential(credential);
          } else if (variant === 'SIGN_IN') {
            await auth().signInWithCredential(credential);
          }
        }
      } catch (error) {
        switch (error.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            return Alert.alert('Google Auth Canceled');
          case statusCodes.IN_PROGRESS:
            return Alert.alert('Google Auth Already In Progress');
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            return Alert.alert('Google Auth Requires Play Services');
          default:
            Alert.alert('Google Auth Error', error.message);
        }
      } finally {
        setLoading(false);
      }
    }
  }


  if (isOnlyProvider) {
    return null;
  }


  return (
    <ProviderButton loading={loading} type="google" onPress={handleGoogle}>
      {title}
    </ProviderButton>
  );

*/