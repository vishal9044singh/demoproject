import 'react-native-gesture-handler';
import { UserContextProvider } from './app/context/userContext';
import HomePage from './app/components/HomePage';

export default function App() {
  return (
    <UserContextProvider >
        <HomePage/>
    </UserContextProvider>
  );
}