import { ScrollView, TouchableOpacity, Text, View, FlatList } from 'react-native'
import Colors from './../utils/Colors';
import Networks from './../data/Network';
import ShowNetworks from './../components/ShowNetworks';
import GoToNotifications from './../components/GoToNotifications';

export default function Network() {
  return (
    <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
      <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 16, paddingVertical: 10, backgroundColor: Colors.WHITE, justifyContent: "space-between" }}>
        <Text style={{ fontSize: 19, fontWeight: "bold", color: Colors.BLACK }}>Manage my Network</Text>
      </TouchableOpacity>

      <GoToNotifications />

      <View style={{ flex: 1, backgroundColor: Colors.WHITE, padding: 10, marginTop: 10 }}>
        <Text style={{ fontWeight: "bold", color: Colors.BLACK, fontSize: 19, marginVertical: 10, marginHorizontal: 6 }}>People you may know</Text>

        <FlatList contentContainerStyle={{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }} data={Networks} showsVerticalScrollIndicator={false} renderItem={({ item }) => <ShowNetworks item={item} />} />
      </View>
    </ScrollView>
  )
}