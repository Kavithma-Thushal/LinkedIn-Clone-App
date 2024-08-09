import { View, FlatList } from 'react-native'
import Colors from './../utils/Colors';
import Notifications from '../data/Notifications';
import ShowNotifications from '../components/ShowNotifications';

export default function Notification() {
  return (
    <View style={{ backgroundColor: Colors.WHITE, marginTop: 10, paddingHorizontal: 10 }}>
      <FlatList
        data={Notifications}
        showsVerticalScrollIndicator={false}
        renderItem={ShowNotifications}
      />
    </View>
  )
}