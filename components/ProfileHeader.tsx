import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileHeader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerBanner}>
        <Image source={require('../assets/images/profile_header.jpg')} style={styles.profilePic} />
        <View style={styles.info}>
          <Text style={styles.name}>Kavithma Thushal</Text>
          <Text style={styles.title}>Full Stack Engineer | Web Developer | Java Developer</Text>
          <Text style={styles.location}>Galle District, Southern Province, Sri Lanka</Text>
        </View>
      </View>
      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>#OPENTOWORK</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  headerBanner: {
    flexDirection: 'row',
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
  badgeContainer: {
    marginTop: 5,
    alignItems: 'center',
  },
  badge: {
    backgroundColor: '#00a400',
    color: '#fff',
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
});

export default ProfileHeader;
