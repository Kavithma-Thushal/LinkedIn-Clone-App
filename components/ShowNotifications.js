import { View, Image, Text, TouchableOpacity } from 'react-native'
import Colors from './../utils/Colors';
import CustomIcon from './CustomIcon';

export default function ShowNotifications({ item }) {
  const CTAButton = ({ title }) => (
    <TouchableOpacity onPress={() => { }} style={{ borderRadius: 50, borderColor: Colors.BLUE, borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5, marginTop: 10, alignSelf: "flex-start", width: "auto" }}>
      <Text style={{ fontSize: 16, color: Colors.BLUE }}>{title}</Text>
    </TouchableOpacity>
  )

  return (
    <>
      <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, justifyContent: "space-between" }}>
        <Image source={item.logo} style={{ width: 50, height: 50, borderRadius: 100 }} />
        <View>
          <Text style={{ fontSize: 16, color: Colors.BLACK, width: 240, marginRight: 5 }}>
            {item.description}
          </Text>
          {
            item.isNewJob ? <CTAButton title="View Job" /> : item.isAView ? <CTAButton title="See all views" /> : item.isJobAlert ? <CTAButton title="See 30+ Jobs" /> : item.isBirthday ? <CTAButton title="Say Happy Birthday" /> : item.isConnectionAccepted ? <CTAButton title="message" /> : item.isTrending ? <Text style={{ marginVertical: 5 }}>{item.trendingCount} reactions</Text> : null
          }
        </View>


        <View>
          <Text style={{ fontSize: 13, marginBottom: 10 }}>{item.notificationTime}d</Text>
          <TouchableOpacity onPress={() => { }}>
            <CustomIcon name="ellipsis-vertical" size={22} color={Colors.BLACK} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  )
}