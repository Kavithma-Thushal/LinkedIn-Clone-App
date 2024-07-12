import { View, StyleSheet } from 'react-native';
import ProfileHeader from '@/components/ProfileHeader';
import StatsSection from '@/components/StatsSection';
import MainFeed from '@/components/MainFeed';

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
      <StatsSection />
      <MainFeed />
    </View>
  );
}
