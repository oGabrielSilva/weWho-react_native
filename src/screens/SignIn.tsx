import React, { useContext } from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import Font from '../components/Font';
import Main from '../components/Main';
import SignInForm from '../components/SignInForm';
import { GlobalContext } from '../context/GlobalContextProvider';
import Strings from '../resources/Strings';
import Margins from '../utils/Margins';

const SignIn = () => {
  const { strings } = useContext(GlobalContext);

  return (
    <Main>
      <View style={{ paddingTop: Margins.MARGINS.statusBar * 2 }}>
        <Font type="title">{Strings.APP_NAME}</Font>
      </View>
      <ScrollView keyboardShouldPersistTaps="handled">
        <KeyboardAvoidingView>
          <View>
            <SignInForm />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </Main>
  );
};

export default SignIn;
