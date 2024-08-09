import { View, Text, ScrollView, FlatList } from 'react-native'
import Colors from './../utils/Colors';
import Jobs from './../data/Jobs';
import ShowJobs from '../components/ShowJobs';
import ItemSeparator from '../components/ItemSeparator';
import Footer from '../components/Footer';
import Premium from '../components/Premium';
import LikeDislike from '../components/LikeDislike';

export default function Job() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <View style={{
        flex: 1, backgroundColor: Colors.WHITE, marginVertical: 10
      }}>
        <Text style={{ color: Colors.BLACK, fontSize: 16, fontWeight: "bold", marginHorizontal: 16, marginBottom: 16, paddingTop: 10 }}>Recommended for you</Text>
        <FlatList
          showsVerticalScrollIndicator={false} data={Jobs}
          renderItem={ShowJobs}
          ItemSeparatorComponent={() => <ItemSeparator />}
          ListFooterComponent={() => <Footer />}
        />
      </View>
      <Premium />
      <LikeDislike />
    </ScrollView>
  )
}