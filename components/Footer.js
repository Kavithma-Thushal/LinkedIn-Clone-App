import { View, Text, TouchableOpacity } from 'react-native'
import CustomIcon from './CustomIcon'
import Colors from '../utils/Colors'

export default function Footer() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, paddingVertical: 4 }}>
      <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={{ fontSize: 19, color: Colors.BLUE, fontWeight: "bold" }}>Show All</Text>
        <CustomIcon
          name="arrow-forward"
          size={19}
          color={Colors.BLUE}
        />
      </TouchableOpacity>
    </View>
  )
}