import { View, Text, TouchableOpacity, Image } from 'react-native'
import Colors from '../utils/Colors'
import CustomIcon from './CustomIcon'

export default function Premium() {
  return (
    <View style={{ flexDirection: "row", backgroundColor: Colors.WHITE, paddingVertical: 16 }}>
      <Image source={Images.PROFILE_PICTURE} style={{
        height: 60, width: 60, borderRadius: 100, marginHorizontal: 16
      }} />
      <View style={{ width: 270 }}>
        <Text style={{ fontSize: 17, fontWeight: "600", color: Colors.BLACK, paddingBottom: 5 }}>Try premium to see the jobs where you would be a top participant</Text>
        <TouchableOpacity style={{ backgroundColor: Colors.DARK_YELLOW, borderRadius: 100, paddingHorizontal: 16, paddingVertical: 5, alignSelf: "flex-start", marginVertical: 7 }} onPress={() => { }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.BLACK }}>Try premium for 1 month</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => { }}>
        <CustomIcon name="ellipsis-vertical" size={25} color={Colors.BLACK} />
      </TouchableOpacity>
    </View>
  )
}