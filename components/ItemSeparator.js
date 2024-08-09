import { View } from 'react-native'
import Colors from '../utils/Colors'

export default function ItemSeparator() {
  return (
    <View style={{
      borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, width: "75%", marginLeft: "25%"
    }} />
  )
}