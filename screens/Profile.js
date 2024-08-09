import { View, Image, ScrollView, Text, TouchableOpacity } from 'react-native'
import Colors from './../utils/Colors';
import * as ProfileData from './../data/Profile';
import Icon from 'react-native-vector-icons/Entypo';
import CustomIcon from './../components/CustomIcon';
import Heading from '../components/Heading';

export default function Profile() {
  const DATA = ProfileData.default;

  const Analytics = ({ title, subTitle, icon }) => (
    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10 }}>
      <CustomIcon name={icon} size={28} color={Colors.GRAY} style={{ marginRight: 10 }} />
      <View>
        <TouchableOpacity onPress={() => { }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: Colors.BLACK }}>{title}</Text>
        </TouchableOpacity>
        <Text style={{ color: Colors.LIGHT_BLACK }}>{subTitle}</Text>
      </View>
    </View>
  )

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ backgroundColor: Colors.WHITE, marginBottom: 10 }}>
        <Image source={DATA.INFO.banner} style={{ width: "100%", height: 120 }} />
        <Image source={DATA.INFO.profile_picture} style={{ borderRadius: 100, height: 100, width: 100, borderColor: Colors.WHITE, borderWidth: 3, bottom: 50, left: 15 }} />

        <View style={{ marginTop: -45, paddingHorizontal: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: Colors.BLACK }}>{DATA.INFO.name}</Text>
          <Text style={{ fontSize: 16, color: Colors.BLACK }}>{DATA.INFO.bio}</Text>
          <Text style={{ marginTop: 4, marginBottom: 10, color: Colors.GRAY }}>Talks about - {DATA.INFO.talksAbout.map(item => `${item} `)}</Text>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={{ color: Colors.BLUE, fontSize: 16, fontWeight: "bold" }}>{DATA.INFO.followers} followers</Text>
            <Icon name='dot-single' size={16} color={Colors.GRAY} />
            <Text style={{ color: Colors.BLUE, fontSize: 16, fontWeight: "bold" }}>{DATA.INFO.connections > 500 ? "500+" : DATA.INFO.connections} connections</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 10, paddingVertical: 15 }}>
          <TouchableOpacity style={{ backgroundColor: Colors.BLUE, borderRadius: 100, width: 150, paddingVertical: 5, alignItems: "center" }} onPress={() => { }}>
            <Text style={{ fontSize: 19, color: Colors.WHITE }}>Open to</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ borderWidth: 1, borderColor: Colors.GRAY, borderRadius: 100, width: 150, paddingVertical: 5, alignItems: "center" }} onPress={() => { }}>
            <Text style={{ fontSize: 19, color: Colors.GRAY }}>Add Section</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { }} style={{ borderRadius: 100, borderWidth: 1, borderColor: Colors.GRAY, height: 35, width: 35, alignItems: "center", justifyContent: "center" }}>
            <Icon name='dots-three-horizontal' size={18} color={Colors.GRAY} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10 }}>
        <Heading title="Analytics" />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CustomIcon name="eye" size={19} color={Colors.GRAY} />
          <Text> Private to you</Text>
        </View>

        <Analytics
          icon="people"
          title={`${DATA.ANALYTICS.profile_views} profile views`}
          subTitle="Discover who's viewed your profile"
        />

        <Analytics
          icon="bar-chart"
          title={`${DATA.ANALYTICS.post_impressions} post impressions`}
          subTitle="Check out who's engaging with your content"
        />

        <Analytics
          icon="search"
          title={`${DATA.ANALYTICS.search_appearence} search appearence`}
          subTitle="See how often you appear in search results"
        />
      </View>

      <View style={{ backgroundColor: Colors.WHITE, marginBottom: 10, padding: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <Heading title="About" />
          <TouchableOpacity onPress={() => { }}>
            <CustomIcon name='pencil' size={22} color={Colors.GRAY} />
          </TouchableOpacity>
        </View>

        <Text style={{ textAlign: "justify", fontSize: 15, color: Colors.BLACK, paddingHorizontal: 5, marginVertical: 10 }} numberOfLines={4} ellipsizeMode='tail'>{DATA.ABOUT}</Text>
      </View>
    </ScrollView>
  )
}