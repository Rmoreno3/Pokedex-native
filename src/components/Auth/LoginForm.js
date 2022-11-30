import { View, Text, TextInput, Button, Keyboard, StyleSheet } from 'react-native'

export default function LoginForm () {
  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry
        autoCapitalize='none'
      />
      <Button
        title='Login'
        onPress={() => console.log('Login')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
    textAlign: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
})
