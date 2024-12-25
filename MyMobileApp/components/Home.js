import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Divider, TextInput } from 'react-native-paper';

export default function Home() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("LKR");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [error, setError] = useState("");

  const [fromCurrencyOpen, setFromCurrencyOpen] = useState(false);
  const [toCurrencyOpen, setToCurrencyOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>

      <Text style={styles.label}>Amount:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <Text style={styles.label}>From Currency:</Text>
      <DropDownPicker
        open={fromCurrencyOpen}
        value={fromCurrency}
        items={currencyOptions}
        setOpen={setFromCurrencyOpen}
        setValue={setFromCurrency}
        setItems={() => {}}
        style={styles.dropdown}
        placeholder="Select currency"
        dropDownContainerStyle={styles.dropdownContainer}
      />

      <Text style={styles.label}>To Currency:</Text>
      <DropDownPicker
        open={toCurrencyOpen}
        value={toCurrency}
        items={currencyOptions}
        setOpen={setToCurrencyOpen}
        setValue={setToCurrency}
        setItems={() => {}}
        style={styles.dropdown}
        placeholder="Select currency"
        dropDownContainerStyle={styles.dropdownContainer}
      />

    </View>
  );
}