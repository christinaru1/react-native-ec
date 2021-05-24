/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Upload from '../components/upload';
import UploadHeader from '../components/header';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const SearchUploadNavigator = () => {
  return (
    <Stack.Navigator mode="modal" initialRouteName="SearchScreen">
      <Stack.Screen name="SearchScreen"
        component={VideoList}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitle: (props) => <UploadHeader {...props} title="YouTube Search" />,
        }}
      />
      <Stack.Screen name="Upload"
        component={Upload}
        options={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitle: (props) => <UploadHeader {...props} title="Upload a Video" />,
        }}
      />
    </Stack.Navigator>
  );
};

const SearchTab = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search"
        component={SearchUploadNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Detail" component={VideoDetail} />
    </Stack.Navigator>
  );
};

export default SearchTab;
