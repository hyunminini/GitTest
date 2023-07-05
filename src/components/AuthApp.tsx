import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import useAuthActions from '../../hooks/useAuthActions';
import useUser from '../../hooks/useUser';

function AuthStatus() {
  const user = useUser();
  return (
    <View style={styles.status}>
      <Text style={styles.text}>
        {user ? user.displayName : '로그인하세요'}
      </Text>
    </View>
  );
}

function AuthButtons() {
  const {authorize, logout} = useAuthActions();
  const onPressLogin = () => {
    authorize({
      id: 1,
      userName: '김현민',
      displayName: 'hyunmins',
    });
  };

  return (
    <View>
      <TouchableOpacity style={styles.AuthBtn} onPress={onPressLogin}>
        <Text style={styles.BtnText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.AuthBtn} onPress={logout}>
        <Text style={styles.BtnText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}

function AuthApp() {
  return (
    <SafeAreaView style={styles.block}>
      <AuthStatus />
      <AuthButtons />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {flex: 1},
  status: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20},
  AuthBtn: {
    backgroundColor: '#385999',
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 5,
  },
  BtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AuthApp;
