// App.js
import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./src/screens/MainPage";
import RegistrationPage from "./src/screens/RegistrationPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Main"
                        component={MainPage}
                        options={{
                            title: "ข้อมูลนักศึกษา",
                            headerTitleAlign: "center"
                        }}
                    />
                    <Stack.Screen
                        name="Registration"
                        component={RegistrationPage}
                        options={{
                            title: "รายวิชาที่ลงทะเบียน",
                            headerTitleAlign: "center"
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
