import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"; 
import Principal from "./Principal";
import CadastroMateria from "./CadastroMateria";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarStyle:{
        backgroundColor:"#002851"
    },
    tabBarActiveTintColor:"#339cff",
    tabBarInactiveTintColor:"#fff"
};


const tabs = [
    {
        id: 1,
        name: "Principal",
        component: Principal,
        icon: "home"
    },
    {
        id: 2,
        name: "CadastroMateria",
        component: CadastroMateria,
        icon: "business"
    }
]


export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions} >
            {tabs.map((tabs) =>(            
            <Tab.Screen 
                key={tabs.id}
                name={tabs.name}
                component={tabs.component} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size})=>(
                        <Ionicons name={tabs.icon} color={color} size={size} />
                    )
                }}
            />))}

            
        </Tab.Navigator>
    )
}