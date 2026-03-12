import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const NOTIFICATION_ICONS: Record<string, { name: keyof typeof Ionicons.glyphMap; color: string }> = {
  'Task Completed!': { name: 'checkmark-circle', color: '#22C55E' },
  'New Badge Earned': { name: 'trophy', color: '#F97316' },
  'AI Quote': { name: 'chatbubble-ellipses', color: '#6366F1' },
  'Upcoming Deadline': { name: 'time', color: '#0EA5E9' },
  'Streak Update': { name: 'flame', color: '#F97316' },
  'Community Meetup': { name: 'people', color: '#A855F7' },
};

const MOCK_NOTIFICATIONS = [
  {
    id: '1',
    title: 'Task Completed!',
    body: '"Finish React Component" was marked as done. Great job!',
    time: '2M AGO',
    unread: true,
  },
  {
    id: '2',
    title: 'New Badge Earned',
    body: "You've unlocked the Streak Master badge for 5 consecutive days.",
    time: '1H AGO',
    unread: true,
  },
  {
    id: '3',
    title: 'AI Quote',
    body: '"Stay focused! You are 75% through your daily goal. Just a little more to go."',
    time: '3H AGO',
    unread: false,
  },
  {
    id: '4',
    title: 'Upcoming Deadline',
    body: 'Review UX Research is due in 1 hour. Get ready!',
    time: '5H AGO',
    unread: false,
  },
  {
    id: '5',
    title: 'Streak Update',
    body: 'Alex, you reached a 5-day streak! Keep the momentum going.',
    time: 'YESTERDAY',
    unread: false,
  },
];

export default function NotificationsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity
            style={styles.headerIcon}
            onPress={() => router.back()}
            activeOpacity={0.8}
          >
            <Ionicons name="chevron-back" size={20} color="#E5E7EB" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={{ width: 32 }} />
        </View>

        {/* Action row */}
        <View style={styles.actionRow}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.actionLink}>✓✓ Mark all as read</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.clearAll}>🗑 Clear All</Text>
          </TouchableOpacity>
        </View>

        {MOCK_NOTIFICATIONS.map((item) => {
          const iconInfo = NOTIFICATION_ICONS[item.title] || { name: 'notifications' as const, color: '#6366F1' };
          return (
            <View key={item.id} style={styles.card}>
              <View style={[styles.iconCircle, { backgroundColor: iconInfo.color + '26' }]}>
                <Ionicons name={iconInfo.name} size={20} color={iconInfo.color} />
              </View>
              <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardText}>{item.body}</Text>
              </View>
              <View style={styles.metaCol}>
                <Text style={styles.metaTime}>{item.time}</Text>
                {item.unread && <View style={styles.unreadDot} />}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#020617',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    marginBottom: 16,
  },
  actionLink: {
    color: '#60A5FA',
    fontSize: 12,
    fontWeight: '500',
  },
  clearAll: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#111827',
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 12,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBody: {
    flex: 1,
    marginHorizontal: 12,
  },
  cardTitle: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
  },
  cardText: {
    color: '#9CA3AF',
    fontSize: 13,
    lineHeight: 18,
  },
  metaCol: {
    alignItems: 'flex-end',
    gap: 6,
  },
  metaTime: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#2563EB',
  },
});
