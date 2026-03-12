import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const ICON_MAP: Record<string, { name: keyof typeof Ionicons.glyphMap; color: string }> = {
  'Daily Reminders': { name: 'notifications', color: '#FACC15' },
  'Deadline Alerts': { name: 'time', color: '#3B82F6' },
  'Team Comments': { name: 'people', color: '#A855F7' },
  'Streak Alerts': { name: 'flame', color: '#F97316' },
  'Smart Motivation': { name: 'bulb', color: '#A855F7' },
  'Achievements Unlocked': { name: 'trophy', color: '#FACC15' },
  'Haptic Feedback': { name: 'radio', color: '#E5E7EB' },
};

const GROUPS = [
  {
    title: 'Task Updates',
    items: [
      { title: 'Daily Reminders', subtitle: 'Get a summary of your tasks at 8:00 AM', on: true },
      { title: 'Deadline Alerts', subtitle: 'Receive notifications 1 hour before due time', on: true },
      { title: 'Team Comments', subtitle: 'When someone mentions you in a task', on: false },
    ],
  },
  {
    title: 'Gamification',
    items: [
      { title: 'Streak Alerts', subtitle: 'Keep your coding streak alive!', on: true },
      { title: 'Smart Motivation', subtitle: 'AI-driven nudges when you procrastinate', on: true },
      { title: 'Achievements Unlocked', subtitle: 'Celebrate when you level up', on: true },
    ],
  },
  {
    title: 'System',
    items: [{ title: 'Haptic Feedback', subtitle: 'Vibrate when completing tasks', on: true }],
  },
];

export default function NotificationSettingsScreen() {
  const router = useRouter();
  const [settings, setSettings] = React.useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    GROUPS.forEach((g) => g.items.forEach((item) => { initial[item.title] = item.on; }));
    return initial;
  });

  const toggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
            <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Notifications</Text>
          <View style={{ width: 22 }} />
        </View>

        {GROUPS.map((group) => (
          <View key={group.title} style={styles.groupBlock}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            {group.items.map((item) => {
              const iconInfo = ICON_MAP[item.title];
              return (
                <View key={item.title} style={styles.card}>
                  <View style={[styles.iconCircle, { backgroundColor: (iconInfo?.color ?? '#6B7280') + '1A' }]}>
                    <Ionicons name={iconInfo?.name ?? 'settings'} size={18} color={iconInfo?.color ?? '#6B7280'} />
                  </View>
                  <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                  </View>
                  <Switch
                    value={settings[item.title]}
                    onValueChange={() => toggle(item.title)}
                    trackColor={{ false: '#374151', true: '#2563EB' }}
                    thumbColor="#FFFFFF"
                  />
                </View>
              );
            })}
          </View>
        ))}

        <Text style={styles.footerText}>
          Push notifications are currently enabled for this device.
        </Text>
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
    marginBottom: 20,
  },
  headerTitle: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: '600',
  },
  groupBlock: {
    marginBottom: 18,
  },
  groupTitle: {
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 10,
  },
  card: {
    borderRadius: 18,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconCircle: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    marginRight: 12,
  },
  cardTitle: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '600',
  },
  cardSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 3,
  },
  footerText: {
    marginTop: 12,
    color: '#6B7280',
    fontSize: 11,
    textAlign: 'center',
  },
});
