import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useContext } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Font from '../components/Font';
import Logo from '../components/Logo';
import Main from '../components/Main';
import SignUpForm from '../components/SignUpForm ';
import { GlobalContext } from '../context/GlobalContextProvider';
import { RootStackParamList } from '../router/Router';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import Margins from '../utils/Margins';

interface ISignUpProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
}

const SignUp = ({ navigation }: ISignUpProps) => {
  const { strings } = useContext(GlobalContext);

  return (
    <View style={styles.main}>
      <View>
        <Logo size={100} radius />
      </View>
      <Main>
        <ScrollView keyboardShouldPersistTaps="handled">
          <KeyboardAvoidingView>
            <View>
              <SignUpForm />
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => navigation.goBack()}>
            <Font>Dont have account?</Font>
            <Text
              style={{
                color: Colors.VARIANT,
                fontFamily: Fonts.MONTSERRAT.regular,
                fontSize: Fonts.SIZES.regular,
              }}>
              {' '.concat(strings.buttons.signIn)}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </Main>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.PRIMARY,
    paddingTop: Margins.MARGINS.statusBar,
  },
  signIn: {
    marginTop: Margins.MARGINS.large * 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: Margins.MARGINS.large,
  },
});

export default SignUp;
