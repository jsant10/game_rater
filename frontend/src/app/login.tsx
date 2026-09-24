import {ThemedText} from "@/components/themed-text";
import {Pressable, StyleSheet, TextInput, View, Text} from "react-native";
import {ThemedView} from "@/components/themed-view";
import {SafeAreaView} from "react-native-safe-area-context";
import {useState} from "react";

export default function Login() {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('')
    const [isPasswordSecure, setIsPasswordSecure] = useState<boolean>(true)
    const [attempedSubmit, setAttemptedsubmit] = useState(false)
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text)
    const isPasswordValid = password.length >= 8
    const isFormValid = isEmailValid && isPasswordValid


    const handleSubmit = () => {
        console.log('Submitted username:', text)
        console.log('Submitted Password', password)
    };

    const handleLogin = () => {
        setAttemptedsubmit(true)
        if (!isFormValid) return;
        console.log('Logging in with:', text, password)
    };

    return (
        <ThemedView style={styles.container}>
            <SafeAreaView style={styles.safeArea}>
                <ThemedText type="title" style={styles.title_text}>
                    Welcome to the Login page
                </ThemedText>
                <View style={styles.usernameInputView}>
                    <TextInput
                        style={styles.usernameInput}
                        placeholder="Email"
                        placeholderTextColor="#888"
                        onChangeText={(value: string) => setText(value)}
                        value={text}
                        onSubmitEditing={handleSubmit}
                    />
                </View>
                <View style={styles.usernameInputView}>
                    <TextInput
                        style={styles.usernameInput}
                        placeholder="Password"
                        placeholderTextColor="#888"
                        onChangeText={(value: string) => setPassword(value)}
                        secureTextEntry={isPasswordSecure}
                        value={password}
                        onSubmitEditing={handleSubmit}
                    />
                    <Pressable
                        style={styles.securePasswordButton}
                        onPress={() => setIsPasswordSecure(!isPasswordSecure)}
                    >
                        <Text style={styles.securePasswordButtonText}>
                            {isPasswordSecure ? 'Show' : 'Hide'}
                        </Text>
                    </Pressable>
                </View>
                {attempedSubmit && !isEmailValid && (
                    <ThemedText style={styles.errorText}>
                        Enter a valid email
                    </ThemedText>
                )}
                {attempedSubmit && !isPasswordValid && (
                    <ThemedText style={styles.errorText}>
                        Enter a valid password
                    </ThemedText>
                )}
                <Pressable style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>
                        Log In
                    </Text>
                </Pressable>
            </SafeAreaView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    safeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title_text: {
        fontSize: 24,
        color: "white",
        verticalAlign: "middle",
    },

    usernameInputView: {
        justifyContent: 'center',
        padding: 16,
    },

    usernameInput: {
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        color: 'white',
    },

    securePasswordButton: {
        padding: 8,
    },

    securePasswordButtonText: {
        color: 'white',
    },

    errorText: {
        color: '#ff6b6b',
        fontSize: 12,
        marginTop: 4,
    },

    loginButton: {
        backgroundColor: '#4f8ef7',
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: 'center',
        marginHorizontal: 16,
    },

    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },

})