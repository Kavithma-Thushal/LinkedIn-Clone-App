import { View, Image, Text, TouchableOpacity } from 'react-native'
import Colors from '../utils/Colors'
import Images from './../utils/Images';
import CustomIcon from './CustomIcon';
import { deviceWidth } from './Dimensions';

const width = deviceWidth / 2.25

const ShowNetworks = ({ item }) => {
  return (
    <View style={{ borderRadius: 10, borderColor: Colors.GRAY, borderWidth: 1, margin: 5, width: width, alignItems: "center" }}>
      <Image source={item.banner} style={{ height: 70, width: "100%", borderTopLeftRadius: 10, borderTopRightRadius: 10 }} />
      <Image source={item.profile_picture} style={{ height: 80, width: 80, borderRadius: 100, marginTop: -50 }} />
      <Text style={{ fontSize: 19, color: Colors.BLACK, fontWeight: "bold", marginTop: 5, paddingHorizontal: 7, textAlign: "center" }}>{item.name}</Text>
      <Text style={{ fontSize: 15, textAlign: "center", paddingHorizontal: 7, height: 35, marginBottom: 10 }}>{item.title}</Text>

      {
        item.hasSameCompany ? <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.COMPANY} style={{ height: 20, width: 20, borderRadius: 100, marginRight: 10 }} />
          <Text style={{ fontSize: 13 }}>Volkswagen</Text>
        </View> : item.mutualConnections > 0 ? <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomIcon name="ellipsis-horizontal-circle" size={20} color={Colors.GRAY} />
          <Text style={{ fontSize: 12, marginLeft: 2 }}>{item.mutualConnections} mutual connections</Text>
        </View> : (
          <View style={{ height: 20 }}></View>
        )
      }

      <TouchableOpacity onPress={() => { }} style={{
        borderRadius: 100, borderWidth: 1, borderColor: Colors.BLUE, paddingHorizontal: 30, paddingVertical: 2, marginVertical: 10
      }}>
        <Text style={{ fontSize: 19, color: Colors.BLUE, fontWeight: "bold" }}>Connect</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ShowNetworks