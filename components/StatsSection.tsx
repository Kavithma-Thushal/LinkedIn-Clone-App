import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.stat}>
        <Text style={styles.statNumber}>3,227</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#fff',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
});

export default StatsSection;
