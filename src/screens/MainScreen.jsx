import {StyleSheet, View} from 'react-native'

import Requests from '../components/Requests'

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <Requests />
    </View>
  )
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
