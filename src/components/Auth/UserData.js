import { StyleSheet, View, Text, Button } from 'react-native'
import useAuth from '../../hooks/useAuth'

export default function UserData() {
  const { auth, logout } = useAuth()

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido,</Text>
        <Text style={styles.title}>{`${auth.firstName} ${auth.lastName}`}</Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title="Nombre:" text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title="Usuario:" text={auth.username} />
        <ItemMenu title="Email:" text={auth.email} />
        <ItemMenu title="Total Favoritos" text={`0 Pokemons`} />
      </View>

      <Button title="Cerrar Sesion" onPress={logout} />
    </View>
  )
}

function ItemMenu(props) {
  const { title, text } = props

  return (
    <View style={styles.itenMenu}>
      <Text style={styles.itenMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itenMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itenMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 100,
  },
})
