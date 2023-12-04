import { useStripe } from "@stripe/stripe-react-native";
import { useState, useEffect } from "react";
import { Screen } from "react-native-screens";
import { Button, Alert } from "react-native";

export default function CheckoutScreen() {
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    const [loading, setLoading] = useState(false);

    const fetchPaymentSheetParams = async () => {
        try {
            const API_URL = 'http://192.168.1.7:3000/checkout';
            const response = await fetch(`${API_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ currency: 'inr', amount: 10000 })
            });
            const { paymentIntent, ephemeralKey, customer } = await response.json();
            return { paymentIntent,ephemeralKey,customer};
        }
        catch (err) {
            console.log('Value of error at line 28 is', err)
        }
    };

    const initializePaymentSheet = async () => {
        const { paymentIntent, ephemeralKey, customer, publishableKey } = await fetchPaymentSheetParams();

        const { error } = await initPaymentSheet({
            merchantDisplayName: "Example, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails: {
                name: 'Jane Doe',
            }
        });
        if (!error) {
            setLoading(true);
        }
    };

    const openPaymentSheet = async () => {
        const { error } = await presentPaymentSheet();
        
        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Your order is confirmed!');
        }
    };

    useEffect(() => {
        initializePaymentSheet();
    }, []);

    return (
        <Screen>
            <Button
                variant="primary"
                disabled={!loading}
                title="Checkout"
                onPress={openPaymentSheet}
            />
        </Screen>
    );
}