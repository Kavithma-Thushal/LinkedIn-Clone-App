import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profilePic} />
      <View style={styles.info}>
        <Text style={styles.name}>Kavithma Thushal</Text>
        <Text style={styles.title}>Full Stack Engineer | Web Developer | Java Developer</Text>
        <Text style={styles.location}>Galle District, Southern Province, Sri Lanka</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  profilePic: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#888',
  },
});

export default ProfileHeader;
