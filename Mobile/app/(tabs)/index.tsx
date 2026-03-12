import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const PRIORITIES = [
  {
    id: '1',
    title: 'Finish React Component',
    tag: 'Development',
    tagColor: '#38BDF8',
    time: '2:00 PM',
    accent: '#EF4444',
  },
  {
    id: '2',
    title: 'Review UX Research',
    tag: 'Study',
    tagColor: '#A855F7',
    time: '4:30 PM',
    accent: '#F59E0B',
  },
  {
    id: '3',
    title: 'Update Documentation',
    tag: 'Docs',
    tagColor: '#22C55E',
    time: '6:00 PM',
    accent: '#22C55E',
  },
];

const CATEGORIES = [
  { label: 'Dev', icon: 'code-slash-outline' as const, color: '#3B82F6' },
  { label: 'Design', icon: 'brush-outline' as const, color: '#EC4899' },
  { label: 'Study', icon: 'book-outline' as const, color: '#A855F7' },
  { label: 'Health', icon: 'fitness-outline' as const, color: '#EF4444' },
];

export default function DashboardScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Top header */}
        <View style={styles.topRow}>
          <View style={styles.userRow}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={20} color="#E5E7EB" />
            </View>
            <View>
              <Text style={styles.welcomeLabel}>Welcome back</Text>
              <Text style={styles.userName}>Alex Hunter</Text>
            </View>
          </View>
          <View style={styles.topRight}>
            <View style={styles.streakBadge}>
              <Ionicons name="flame" size={14} color="#F59E0B" />
              <Text style={styles.streakText}>5 Days</Text>
            </View>
            <TouchableOpacity
              style={styles.bellButton}
              onPress={() => router.push('/notifications')}
              activeOpacity={0.8}
            >
              <Ionicons name="notifications-outline" size={18} color="#E5E7EB" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Greeting */}
        <Text style={styles.greeting}>Good Morning!</Text>
        <Text style={styles.greetingSub}>Ready to crush your goals today?</Text>

        {/* Motivational quote card */}
        <View style={styles.quoteCard}>
          <Text style={styles.quoteText}>
            "Success is the sum of small efforts, repeated day in and day out."
          </Text>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statCardLarge}>
            <Text style={styles.statLabel}>Daily Progress</Text>
            <View style={styles.circleProgress}>
              <Text style={styles.circleText}>75%</Text>
            </View>
            <Text style={styles.statHint}>6 of 8 tasks</Text>
          </View>
          <View style={styles.statColRight}>
            <View style={styles.statCardSmall}>
              <View style={styles.statIconRow}>
                <Ionicons name="checkmark-circle" size={18} color="#22C55E" />
                <Text style={styles.statBigNum}>12</Text>
              </View>
              <Text style={styles.statSmallLabel}>Completed this week</Text>
            </View>
            <View style={styles.statCardSmall}>
              <View style={styles.statIconRow}>
                <Ionicons name="timer-outline" size={18} color="#F59E0B" />
                <Text style={styles.statBigNum}>4.5h</Text>
              </View>
              <Text style={styles.statSmallLabel}>Focus time today</Text>
            </View>
          </View>
        </View>

        {/* Today's Priorities */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today's Priorities</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {PRIORITIES.map((task) => (
          <View key={task.id} style={styles.priorityCard}>
            <View style={[styles.priorityAccent, { backgroundColor: task.accent }]} />
            <View style={styles.priorityContent}>
              <Text style={styles.priorityTitle}>{task.title}</Text>
              <View style={styles.priorityMeta}>
                <View style={[styles.tagPill, { backgroundColor: task.tagColor + '26' }]}>
                  <Text style={[styles.tagText, { color: task.tagColor }]}>{task.tag}</Text>
                </View>
                <View style={styles.timeRow}>
                  <Ionicons name="time-outline" size={12} color="#9CA3AF" />
                  <Text style={styles.timeText}>{task.time}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.checkCircle} activeOpacity={0.7}>
              <Ionicons name="checkmark" size={16} color="#6B7280" />
            </TouchableOpacity>
          </View>
        ))}

        {/* Categories */}
        <Text style={[styles.sectionTitle, { marginTop: 8 }]}>Categories</Text>
        <View style={styles.categoriesRow}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity key={cat.label} style={styles.categoryItem} activeOpacity={0.8}>
              <View style={[styles.categoryIcon, { backgroundColor: cat.color + '1A' }]}>
                <Ionicons name={cat.icon} size={22} color={cat.color} />
              </View>
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
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
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0B1120',
    borderWidth: 2,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeLabel: {
    color: '#9CA3AF',
    fontSize: 11,
  },
  userName: {
    color: '#F9FAFB',
    fontSize: 15,
    fontWeight: '600',
  },
  topRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: 'rgba(245,158,11,0.15)',
    borderWidth: 1,
    borderColor: 'rgba(245,158,11,0.3)',
  },
  streakText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '600',
  },
  bellButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    color: '#F9FAFB',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 4,
  },
  greetingSub: {
    color: '#9CA3AF',
    fontSize: 14,
    marginBottom: 20,
  },
  quoteCard: {
    borderRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 32,
    marginBottom: 20,
    backgroundColor: '#7C3AED',
    overflow: 'hidden',
  },
  quoteText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 26,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCardLarge: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    padding: 16,
    alignItems: 'center',
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 10,
  },
  circleProgress: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 5,
    borderColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  circleText: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: '700',
  },
  statHint: {
    color: '#6B7280',
    fontSize: 11,
  },
  statColRight: {
    flex: 1,
    gap: 12,
  },
  statCardSmall: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    padding: 14,
    justifyContent: 'center',
  },
  statIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 4,
  },
  statBigNum: {
    color: '#F9FAFB',
    fontSize: 20,
    fontWeight: '700',
  },
  statSmallLabel: {
    color: '#9CA3AF',
    fontSize: 11,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#F9FAFB',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  viewAll: {
    color: '#60A5FA',
    fontSize: 13,
    fontWeight: '500',
  },
  priorityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#111827',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  priorityAccent: {
    width: 4,
    height: '100%',
    borderRadius: 999,
    marginRight: 14,
    minHeight: 40,
  },
  priorityContent: {
    flex: 1,
  },
  priorityTitle: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  priorityMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  tagPill: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 999,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '600',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    color: '#9CA3AF',
    fontSize: 11,
  },
  checkCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoriesRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  categoryItem: {
    alignItems: 'center',
    gap: 6,
  },
  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryLabel: {
    color: '#9CA3AF',
    fontSize: 11,
    fontWeight: '500',
  },
});
