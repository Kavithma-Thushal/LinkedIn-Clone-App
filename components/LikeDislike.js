import { View, Text } from 'react-native'
import Colors from '../utils/Colors'
import Icon from 'react-native-vector-icons/Entypo';

export default function LikeDislike() {
  return (
    <View style={{ backgroundColor: Colors.WHITE, marginVertical: 10, padding: 10, flexDirection: "row" }}>
      <View style={{ width: 280 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.BLACK }}>Are these jobs right for you?</Text>
        <Text style={{ fontSize: 16, color: Colors.GRAY }}>We will use your feedback to improve the recommendations</Text>
      </View>
      <Icon name="thumbs-up" size={31} color={Colors.BLACK} style={{ marginRight: 10 }} />
      <Icon name="thumbs-down" size={31} color={Colors.BLACK} style={{ marginRight: 10 }} />
    </View>
  )
}