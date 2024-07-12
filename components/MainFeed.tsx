import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function MainFeed() {

  const posts = [
    { id: '1', content: 'Post 1 Content' },
    { id: '2', content: 'Post 2 Content' },
    { id: '3', content: 'Post 3 Content' },
  ];

  const styles = StyleSheet.create({
    post: {
      padding: 10,
      marginVertical: 5,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 1,
    },
  });

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <View style={styles.post}>
          <Text>{item.content}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};