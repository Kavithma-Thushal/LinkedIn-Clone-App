import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

export default function ProfileHeader() {

  const { width } = Dimensions.get('window'); // Get the device width for responsive design

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
    coverPic: {
      width: width,
      height: 100,
    },
    profilePic: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginTop: -45,
      borderWidth: 2,
      borderColor: '#fff',
      marginLeft: 10,
    },
    badgeContainer: {
      alignItems: 'flex-start',
      paddingLeft: 10,
      marginTop: 10,
    },
    badge: {
      backgroundColor: '#00a400',
      color: '#fff',
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
    info: {
      marginTop: 7,
      alignItems: 'flex-start',
      paddingHorizontal: 10,
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
    statsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
    },
    stat: {
      alignItems: 'center',
    },
    statNumber: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0073b1',
    },
    statLabel: {
      fontSize: 14,
      color: '#666',
    },
  });

  return (
    <View style={styles.container}>

      <Image source={require('../assets/images/cover_pic.jpg')} style={styles.coverPic} />

      <Image source={require('../assets/images/profile_pic.jpg')} style={styles.profilePic} />

      <View style={styles.badgeContainer}>
        <Text style={styles.badge}>#OPENTOWORK</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.name}>Kavithma Thushal</Text>
        <Text style={styles.title}>Full Stack Engineer | Web Developer</Text>
        <Text style={styles.location}>Galle District, Southern Province, Sri Lanka</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>3,228</Text>
          <Text style={styles.statLabel}>Followers</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>500+</Text>
          <Text style={styles.statLabel}>Connections</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>253</Text>
          <Text style={styles.statLabel}>Profile Views</Text>
        </View>
      </View>

    </View>
  );
};
