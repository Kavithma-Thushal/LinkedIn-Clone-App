import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const posts = [
  { id: '1', content: 'Post 1 content...' },
  { id: '2', content: 'Post 2 content...' },
  { id: '3', content: 'Post 3 content...' },
];

const MainFeed: React.FC = () => {
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

const styles = StyleSheet.create({
  post: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 1,
  },
});

export default MainFeed;
