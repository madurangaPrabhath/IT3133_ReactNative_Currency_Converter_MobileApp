import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Text, Divider, TextInput } from 'react-native-paper';

export default function Home() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(null);

  return (
    <View>
      <Text variant="displayMedium">Currency Converter</Text>
      <Divider />

      <Text style={styles.label}>Base Currency:</Text>
      <TextInput
        label="Base Currency"
        mode="outlined"
        value={baseCurrency}
        onChangeText={setBaseCurrency}
        style={styles.input} />

      <Text style={styles.label}>Target Currency:</Text>
      <TextInput
        label="Target Currency"
        mode="outlined"
        value={targetCurrency}
        onChangeText={setTargetCurrency}
        style={styles.input} />

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        label="Amount"
        mode="outlined"
        value={amount}
        onChangeText={setAmount}
        style={styles.input} />
    </View>
  )
}