import React, { useContext, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { GlobalContext } from '../context/GlobalContextProvider';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';
import Margins from '../utils/Margins';
import Font from './Font';
import Playable from './Playable';

const SignInForm = () => {
  const { strings } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const emailError = '';

  return (
    <View style={{ marginTop: Margins.MARGINS.large * 2 }}>
      <View style={{ marginBottom: Margins.MARGINS.large }}>
        <Font type="subTitle">{strings.buttons.signIn}</Font>
      </View>
      <View>
        <TextInput
          placeholderTextColor={Colors.TEXT_VARIANT}
          style={styles.input}
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          selectionColor={Colors.TEXT_VARIANT}
        />
        <View style={{ marginLeft: Margins.MARGINS.regular }}>
          <Font size={Fonts.SIZES.small} color="danger">
            {emailError}
          </Font>
        </View>
        <TextInput
          selectionColor={Colors.TEXT_VARIANT}
          placeholderTextColor={Colors.TEXT_VARIANT}
          placeholder={strings.placeholders.password}
          style={styles.input}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <View style={styles.viewShowPassword}>
          <Font size={Fonts.SIZES.small}>{showPassword ? password : ''}</Font>
          <TouchableOpacity onPress={() => setShowPassword(v => !v)}>
            <Icon
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={Fonts.SIZES.subTitle}
              color={Colors.TEXT}
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => setRemember(v => !v)}
            style={[styles.viewShowPassword, styles.flexStart]}>
            <Icon
              name={remember ? 'checkbox' : 'square-outline'}
              size={Fonts.SIZES.subTitle}
              color={Colors.TEXT}
              style={{ marginRight: Margins.MARGINS.small }}
            />
            <Font>Remember</Font>
          </TouchableOpacity>
        </View>
      </View>
      <Playable title={strings.buttons.signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.SECUNDARY,
    borderRadius: Margins.RADIUS.max,
    marginVertical: Margins.MARGINS.medium,
    paddingVertical: Margins.MARGINS.small,
    paddingHorizontal: Margins.MARGINS.regular,
    color: Colors.TEXT,
  },
  viewShowPassword: {
    marginHorizontal: Margins.MARGINS.regular,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flexStart: {
    justifyContent: 'flex-start',
    marginTop: Margins.MARGINS.medium,
    marginBottom: Margins.MARGINS.large,
  },
});

export default SignInForm;
