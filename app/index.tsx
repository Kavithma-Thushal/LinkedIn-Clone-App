import { View, StyleSheet } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import StatsSection from '@/components/StatsSection';
import MainFeed from '@/components/MainFeed';

export default function Index() {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <StatsSection />
      <MainFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
