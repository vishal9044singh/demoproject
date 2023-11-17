import HomeScreen from './app/screens/HomeScreen';
import { UserContextProvider } from './app/context/userContext';

export default function App() {
  return (
    <UserContextProvider >
      <HomeScreen/>
    </UserContextProvider>
  );
}