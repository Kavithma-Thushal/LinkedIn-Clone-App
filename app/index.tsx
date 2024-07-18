import { View, StyleSheet } from 'react-native';
import MainFeed from '../components/MainFeed';
import ProfileHeader from '../components/ProfileHeader';

export default function Index() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
  });

  return (
    <View style={styles.container}>
      <ProfileHeader />
      <MainFeed />
    </View>
  );
}
