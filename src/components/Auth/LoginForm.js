import { useState } from 'react'
import { View, Text, TextInput, Button, Keyboard, StyleSheet } from 'react-native'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import useAuth from '../../hooks/useAuth'
const { user, userDetails } = require('../../utils/userDB')

export default function LoginForm () {
  const [error, setError] = useState('')

  console.log(useAuth)

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Username is empty'),
      password: Yup.string().required('Password is empty')
    }),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError('')
      const { username, password } = formValue

      if (username !== user.username || password !== user.password) {
        setError('Username or password incorrect')
      } else {
        console.log('login aproved')
        console.log(userDetails)
      }
    }
  })

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesion</Text>
      <TextInput
        placeholder='Username'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text)}
      />
      <TextInput
        placeholder='Password'
        style={styles.input}
        secureTextEntry
        autoCapitalize='none'
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text)}
      />
      <Button
        title='Login'
        onPress={formik.handleSubmit}
      />

      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
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
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 20
  }
})
