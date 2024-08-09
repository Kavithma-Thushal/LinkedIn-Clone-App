import { View, FlatList } from 'react-native'
import Posts from './../data/Posts';
import ShowPosts from '../components/ShowPosts';

export default function Home() {
  return (
    <View>
      <FlatList data={Posts} showsVerticalScrollIndicator={false} renderItem={({ item }) => <ShowPosts item={item} />} />
    </View>
  )
}