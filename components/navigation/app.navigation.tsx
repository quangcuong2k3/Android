import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';
import AppHeader from './app.header';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
        // screenOptions={{headerShown:false}}
        >

            <Stack.Screen
                name="home"
                component={HomeScreen}
                options={{ header: () => <AppHeader /> }}
            />
            <Stack.Screen
                name="review-detail"
                options={{ title: 'Chi tiết review' }}
                component={DetailScreen} />
        </Stack.Navigator>
    )
}
const AppNavigation = () => {


    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
        // screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen
                options={{ title: 'Trang chủ', header: () => <></> }}
                name="home1" component={HomeLayout} />
            <Drawer.Screen
                options={{
                    title: 'Thông tin',
                    header: () => <AppHeader />
                }}
                name="about" component={AboutScreen} />
        </Drawer.Navigator>


    )
}
export default AppNavigation;