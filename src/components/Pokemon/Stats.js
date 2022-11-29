import { View, Text, StyleSheet } from 'react-native'
import { capitalize } from 'lodash'

export default function Stats (props) {
  const { stats } = props

  const barStyles = (number) => {
    const color = number > 49 ? '#00ac17' : '#ff3e3e'
    return {
      backgroundColor: color,
      width: `${number}%`
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stats</Text>
      {stats.map((item, index) => (
        <View key={index} style={styles.blockStats}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[styles.bar, barStyles(item.base_stat)]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 5
  },
  blockStats: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 5
  },
  blockTitle: {
    width: '30%'
  },
  statName: {
    fontSize: 13,
    color: 'gray'
  },
  blockInfo: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  number: {
    width: '12%',
    fontSize: 13
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden'
  },
  bar: {
    // backgroundColor: 'red',
    // width: '100%',
    height: 5,
    borderRadius: 20
  }
})
