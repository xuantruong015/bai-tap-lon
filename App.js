import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import PostScreen from './screens/PostScreen';
import CommentListScreen from './screens/CommentListScreen';




const AppNavigator = StackNavigator(
  {
    home: {
      screen: HomeScreen,
      
    },
    post: {
      screen: PostScreen,
      
    },
    commentList: {
      screen: CommentListScreen,
      
    }
  },
  {
        initialRouteName: "Home",
        navigationOptions: {
          headerTitleStyle: {
            fontWeight: "bold",
            color: "#fff",
          },
          headerTintColor: "#fff"
        }
      }
  );
export default AppNavigator;
