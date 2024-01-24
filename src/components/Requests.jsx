import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import normalize from 'react-native-normalize'

const Requests = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonBlock}>
        <View style={styles.buttonContent}>
          <Text style={styles.requestText}>Запросы</Text>
          <View style={styles.verticalLine}></View>
          <View>
            <Text>Активен: 5</Text>
            <Text>На завершении: 2</Text>
            <Text>На ожидании: 7</Text>
            <Text>Зарегистрирован: 4</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Requests

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 10,
  },
  buttonBlock: {
    borderWidth: 1,
    borderColor: '#808080',
    width: normalize(350),
    height: normalize(100),
    justifyContent: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  verticalLine: {
    height: '100%',
    width: 1,
    backgroundColor: '#808080',
  },
  requestText: {
    fontSize: normalize(17),
    color: '#000',
    fontWeight: 'bold',
  },
})
