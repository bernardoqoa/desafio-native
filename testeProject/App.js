import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { theme } from './src/global/styles/theme';
import { Routes } from './src/routes';

export default function App() {

  return (
    <>
      <StatusBar style="auto" />
      <Routes></Routes>
    </>
  );
}
// <ReturnPage></ReturnPage>
// <Homepage></Homepage>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  }
});
