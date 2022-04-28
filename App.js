import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import LocalAuthentication from "rn-local-authentication";

export default function App() {
	useEffect(() => {
		LocalAuthentication.authenticateAsync({
			fallbackToPinCodeAction: true,
			fallbackEnabled: true,
			reason: "Authorize please!",
		}).then((response) => {
			if (response.success) {
				console.log("Authorized successfully!");
			} else {
				console.log(`Something went wrong. Error: ${response.error}`);
			}
		});
	}, []);

	return (
		<View style={styles.container}>
			<Text>Open up App.js to start working on your app!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
