import { View, Text, Image, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Colors from '../utils/Colors';
import Images from '../utils/Images';
import Styles from '../utils/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Post() {
  const list = [
    { title: 'Add a photo', icon: 'photo' },
    { title: 'Take a video', icon: 'video-camera' },
    { title: 'Celebrate an occasion', icon: 'sun-o' },
    { title: 'Add a document', icon: 'newspaper-o' },
    { title: "Share that you're hiring", icon: 'briefcase' },
    { title: 'Find an expert', icon: 'angellist' },
    { title: 'Create apoll', icon: 'bar-chart' },
    { title: 'Create an event', icon: 'calendar' },
  ];

  const ListItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => { }}
      style={[Styles.flexCenter, {
        display: 'flex',
        marginVertical: 7,
      }]}>
      <Icon
        name={item.icon}
        size={25}
        color={Colors.GRAY}
        style={{ marginHorizontal: 20 }}
      />
      <Text style={{ color: Colors.GRAY, fontWeight: 'bold', fontSize: 16 }}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: Colors.WHITE, flex: 1 }}>
      <View
        style={{ paddingHorizontal: 20, marginTop: 20, height: 250, flex: 1 }}>
        <Image
          source={Images.PROFILE_PICTURE}
          style={{ height: 46, width: 46 }}
        />

        <TextInput placeholder='What do you want to talk about?' style={{ color: Colors.BLACK, fontSize: 19, paddingTop: 16 }} placeholderTextColor={{ color: Colors.GRAY }} />
      </View>
      <View
        style={{
          borderTopEndRadius: 30,
          borderTopLeftRadius: 30,
          elevation: 1,
          paddingVertical: 20,
        }}>
        <FlatList data={list} renderItem={ListItem} />
      </View>
    </View>
  );
}