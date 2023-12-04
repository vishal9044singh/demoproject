import 'react-native-gesture-handler';
import { UserContextProvider } from './app/context/userContext';
import HomePage from './app/components/HomePage';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <UserContextProvider >
      <HomePage />
      <StatusBar style="dark" />
    </UserContextProvider>
  );
}