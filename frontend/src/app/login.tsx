import {ThemedText} from "@/components/themed-text";
import {StyleSheet} from "react-native";

export default function Login() {
    return (
        <ThemedText type="title" style={styles.title_text}>
            Welcome to the Login page test
        </ThemedText>
    );
}

const styles = StyleSheet.create({

    title_text: {
        fontSize: 24,
        color: "black",
        verticalAlign: "middle",
    }

})