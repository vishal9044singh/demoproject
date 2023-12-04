import { StyleSheet, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NewPostScreenNavbar from '../navbars/NewPostScreenNavbar';
import { StripeProvider } from '@stripe/stripe-react-native';
import CheckoutScreen from './CheckoutScreen';

export default function NewPostScreen() {

    return (
        <StripeProvider publishableKey='pk_test_51OFGqHSHwrFWfvIREDEsUgHfhz2xdZVo9DO7yKKxtEkLGlFg96EUa814mCi82KeMquq2bhd4U0HTqeyRFEYO7Mth00ZqFtsBNM'
        // merchantIdentifier="merchant.identifier" // required for Apple Pay
        // urlScheme="your-url-scheme"
        >
            <SafeAreaView style={styles.container}>
                <NewPostScreenNavbar />
                <ScrollView >
                    <Text style={styles.about}>This is New Post Screen!</Text>
                    <CheckoutScreen />
                </ScrollView>
            </SafeAreaView>
        </StripeProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    about: {
        textAlign: 'center',
        marginTop: 250
    }
});
