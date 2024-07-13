import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function MainFeed() {

  const posts = [
    { id: '1', title: 'Java', description: 'Java was developed by Sun Microsystems (acquired by Oracle Corporation) and released in 1995. It\'s designed to be platform-independent, meaning Java programs can run on any device that has a Java Virtual Machine (JVM). This feature is achieved through the principle of "write once, run anywhere" (WORA).' },
    { id: '2', title: 'JavaScript', description: 'JavaScript was developed by Netscape Communications Corporation and released in 1995. It\'s primarily used for client-side scripting in web development, where it runs in web browsers. JavaScript is known for its versatility and ability to enhance user interfaces.' },
    { id: '3', title: 'TypeScript', description: 'TypeScript was developed by Microsoft and released in 2012. It\'s a superset of JavaScript that adds static types, allowing for better tooling, error detection, and scalability in large codebases. TypeScript compiles to plain JavaScript and can run on any JavaScript engine.' },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 10,
    },
    post: {
      padding: 15,
      marginBottom: 10,
      backgroundColor: '#fff',
      borderRadius: 5,
      elevation: 2,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
      lineHeight: 20,
    },
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View style={styles.post}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
