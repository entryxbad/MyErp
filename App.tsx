import {SafeAreaView, StyleSheet} from 'react-native'

import LoginScreen from './src/auth/LoginScreen'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
