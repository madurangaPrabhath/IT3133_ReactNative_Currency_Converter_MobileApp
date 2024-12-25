import { StyleSheet, View } from 'react-native';
import { PaperProvider, Text, Divider, TextInput } from 'react-native-paper';

export default function Home() {
  return (
    <View>
      <Text variant="displayMedium">Currency Converter</Text>
      <Divider />

      <Text style={styles.label}>Base Currency:</Text>
      <TextInput
        label="Base Currency"
        mode="outlined"
        value={''}
        onChangeText={''}
        style={styles.input} />

      <Text style={styles.label}>Target Currency:</Text>
      <TextInput
        label="Target Currency"
        mode="outlined"
        value={''}
        onChangeText={''}
        style={styles.input} />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        label="Amount"
        mode="outlined"
        value={''}
        onChangeText={''}
        style={styles.input} />
    </View>
  )
}