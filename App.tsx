import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Profile from "./src/screens/Profile";
import Splash from "./src/screens/Splash";

const App = () => {

  const stack = createStackNavigator();
    return (

      <NavigationContainer>
        <stack.Navigator initialRouteName="Login">
          <stack.Screen name="login" component={Login} options={{headerShown: false}} />
          <stack.Screen name="signup" component={Signup} options={{headerShown: false}} />
          <stack.Screen name="profile" component={Profile} options={{headerShown: false}} />
          <stack.Screen name="splash" component={Splash} options={{headerShown: false}} />
        </stack.Navigator>
      </NavigationContainer>
      
    );
  };

 export default App;