import { View, Image, Text, TouchableOpacity } from 'react-native'
import Colors from './../utils/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import { deviceWidth } from './Dimensions';
import Images from './../utils/Images';
import CustomIcon from './CustomIcon';

export default function ShowPosts({ item }) {
  return (
    <View style={{ backgroundColor: Colors.WHITE, marginVertical: 5, paddingVertical: 10 }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 16 }}>
        <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
          <Image source={item.profile_picture} style={{ borderRadius: 100, height: 60, width: 60, marginRight: 10 }} />
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 16, fontWeight: "bold", color: Colors.BLACK }}>{item.name}</Text>
              {
                item.connection ?
                  <Text style={{ fontWeight: "bold" }}>
                    <Icon name="dot-single" color={Colors.GRAY} size={16} />
                    <Text style={{ color: Colors.GRAY }}>{item.connection}</Text>
                  </Text> : null
              }
            </View>
            <Text style={{ width: 150 }} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
            <Text style={{ fontSize: 12 }}>{item.timeAgo}{item.timeDuration}</Text>
          </View>
        </View>
        {
          item.connection ? null : <TouchableOpacity onPress={() => { }} style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name='plus' size={15} color={Colors.BLUE} />
            <Text style={{ color: Colors.BLUE, fontSize: 15, fontWeight: "bold", marginLeft: 2 }}>Follow</Text>
          </TouchableOpacity>
        }
      </View>
      {
        item.content ? <Text style={{
          paddingHorizontal: 16, textAlign: "justify", color: Colors.BLACK, marginVertical: 10
        }} numberOfLines={5} ellipsizeMode='tail'>
          {item.content}
        </Text> : <View style={{ marginTop: 10 }} />
      }
      {
        item.hasImage ? <Image source={item.postImage} style={{ height: 300, width: deviceWidth }} /> : null
      }

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: 5, paddingHorizontal: 16 }}>

        {/* Likes  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={Images.LIKE} style={{ width: 25, height: 25, borderRadius: 100 }} />
          <Text style={{ color: Colors.GRAY }}>{item.likes} likes</Text>
        </View>

        {/* Comments  */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {
            item.comments > 0 ? <Text style={{ color: Colors.GRAY }}>{item.comments} comments</Text> : null
          }
          {
            item.comments > 0 && item.shares > 0 ? <Icon name='dot-single' size={16} color={Colors.GRAY} /> : null
          }
          {
            item.shares > 0 ? <Text style={{ color: Colors.GRAY }}>{item.shares} shares</Text> : null
          }
        </View>
      </View>
      <View style={{ borderTopColor: Colors.LIGHT_GRAY, borderTopWidth: 1, marginTop: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 30, paddingTop: 5 }}
        >
          {/* Like  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <Icon name='thumbs-up' size={22} color={item.isLiked ? Colors.BLUE : Colors.GRAY} />
            <Text style={{ color: item.isLiked ? Colors.BLUE : Colors.GRAY }}>like</Text>
          </TouchableOpacity>

          {/* Comment  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <CustomIcon name="chatbubble-ellipses-outline" size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Comment</Text>
          </TouchableOpacity>

          {/* Share  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <Icon name='share' size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Share</Text>
          </TouchableOpacity>

          {/* Send  */}
          <TouchableOpacity style={{ alignItems: "center" }} onPress={() => { }}>
            <CustomIcon name='send' size={22} color={Colors.GRAY} />
            <Text style={{ color: Colors.GRAY }}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}