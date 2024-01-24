import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import normalize from 'react-native-normalize'

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.headerText}>Авторизация</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Логин" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Пароль" />
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Номер телефона" />
      </View>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: normalize(15),
    width: normalize(300),
    height: normalize(40),
    fontSize: normalize(16),
    marginBottom: 30,
  },
  headerText: {
    fontSize: normalize(25),
    color: 'black',
    marginBottom: 50,
  },
  buttonView: {
    width: normalize(300),
    height: normalize(40),
    borderRadius: normalize(15),
    backgroundColor: '#0971b7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: normalize(18),
  },
})
