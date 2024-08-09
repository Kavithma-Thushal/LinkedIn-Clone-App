import { StatusBar } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./screens/Profile";
import Home from "./screens/Home";
import Network from "./screens/Network";
import Post from "./screens/Post";
import Notification from "./screens/Notification";
import Job from "./screens/Job";
import Screens from "./utils/Screens";
import Colors from "./utils/Colors";
import CustomIcon from "./components/CustomIcon";
import HeaderOptions from "./components/HeaderOptions";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const NetworkStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const JobStack = createNativeStackNavigator();

const showTabBar = (route) => {
  const routeName = getFocusedRouteNameFromRoute(route);
  return routeName == Screens.PROFILE ? "none" : "flex";
};

const HomeScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={Screens.HOME} component={Home} />
      <HomeStack.Screen name={Screens.PROFILE} component={Profile} />
    </HomeStack.Navigator>
  );
};

const NetworkScreen = () => {
  return (
    <NetworkStack.Navigator screenOptions={{ headerShown: false }}>
      <NetworkStack.Screen name={Screens.NETWORK} component={Network} />
    </NetworkStack.Navigator>
  );
};

const PostScreen = () => {
  return (
    <PostStack.Navigator screenOptions={{ headerShown: false }}>
      <PostStack.Screen name={Screens.POST} component={Post} />
    </PostStack.Navigator>
  );
};

const NotificationScreen = () => {
  return (
    <NotificationStack.Navigator screenOptions={{ headerShown: false }}>
      <NotificationStack.Screen
        name={Screens.NOTIFICATION}
        component={Notification}
      />
    </NotificationStack.Navigator>
  );
};

const JobScreen = () => {
  return (
    <JobStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name={Screens.JOB} component={Job} />
    </JobStack.Navigator>
  );
};

const header = (
  navigation,
  route,
  icon,
  title,
  iconLeft,
  isPostScreen,
  isNotificationScreen
) => ({
  title: title,
  tabBarStyle: { display: showTabBar(route), height: 70 },
  tabBarBadge: isNotificationScreen ? 99 : null,
  tabBarIcon: ({ focused }) => (
    <CustomIcon
      name={icon}
      size={28}
      color={focused ? Colors.BLACK : Colors.GRAY}
    />
  ),
  header: () => (
    <HeaderOptions
      iconLeft={iconLeft}
      navigation={navigation}
      isPostScreen={isPostScreen}
    />
  ),
});

const screenOptions = {
  tabBarStyle: {
    height: 70,
  },
  tabBarItemStyle: {
    margin: 10,
  },
  tabBarActiveTintColor: Colors.BLACK,
  tabBarInActiveTintColor: Colors.GRAY,
  tabBarLabelStyle: { fontWeight: "bold", fontSize: 12 },
  headerStyle: { elevation: 10 },
};

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.WHITE} barStyle="dark-content" />
      <Tab.Navigator {...{ screenOptions }}>
        <Tab.Screen
          name={Screens.HOME_STACK}
          component={HomeScreen}
          options={({ navigation, route }) =>
            header(navigation, route, "home", "Home")
          }
        />
        <Tab.Screen
          name={Screens.NETWORK_STACK}
          component={NetworkScreen}
          options={({ navigation, route }) =>
            header(navigation, route, "people", "Network")
          }
        />
        <Tab.Screen
          name={Screens.POST_STACK}
          component={PostScreen}
          options={({ navigation, route }) =>
            header(navigation, route, "add-circle", "Post", "close", true)
          }
        />
        <Tab.Screen
          name={Screens.NOTIFICATION_STACK}
          component={NotificationScreen}
          options={({ navigation, route }) =>
            header(
              navigation,
              route,
              "notifications",
              "Notifications",
              "",
              false,
              true
            )
          }
        />
        <Tab.Screen
          name={Screens.JOB_STACK}
          component={JobScreen}
          options={({ navigation, route }) =>
            header(navigation, route, "briefcase", "Jobs")
          }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
