import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import Colors from '../utils/Colors';
import CustomIcon from './CustomIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import Images from '../utils/Images';

const HeaderOptions = ({ iconLeft, navigation, isPostScreen }) => (
  <SafeAreaView
    style={[
      Styles.flexCenter,
      {
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        elevation: 4,
        paddingVertical: 12,
      },
    ]}>
    <View>
      {isPostScreen ? (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.HOME)} style={{ paddingLeft: 10 }}>
          <CustomIcon name={iconLeft} size={30} color={Colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.navigate(Screens.PROFILE)} style={{ paddingLeft: 15 }}>
          <Image
            source={Images.PROFILE_PICTURE}
            style={{ borderRadius: 50, height: 35, width: 35 }}
          />
        </TouchableOpacity>
      )}
    </View>

    {isPostScreen ? (
      <Text
        style={{
          marginHorizontal: 5,
          fontSize: 19,
          color: Colors.BLACK,
          fontWeight: 'bold',
          flex: 1
        }}>
        Share Post
      </Text>
    ) : (
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.BLACK}
        style={{
          marginHorizontal: 20,
          flex: 1,
          height: 34,
          backgroundColor: Colors.BLUE1,
          borderRadius: 5,
          paddingHorizontal: 10,
          color: Colors.BLACK,
        }}
      />
    )}

    <TouchableOpacity>
      {isPostScreen ? (
        <Text style={{ color: Colors.GRAY, fontSize: 16, fontWeight: 'bold', marginRight: 16 }}>
          Post
        </Text>
      ) : (
        <CustomIcon
          size={28}
          color={Colors.GRAY}
          name="chatbubble-ellipses-outline"
          style={{ marginRight: 13 }}
        />
      )}
    </TouchableOpacity>
  </SafeAreaView>
)

export default HeaderOptions;