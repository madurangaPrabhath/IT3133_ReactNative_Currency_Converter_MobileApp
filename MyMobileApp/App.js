import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home'

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <Home />
            <StatusBar style="auto" />
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 60
  },
});
