import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CHART_DATA = [
  { day: 'M', height: 50 },
  { day: 'T', height: 85 },
  { day: 'W', height: 70 },
  { day: 'T', height: 55 },
  { day: 'F', height: 60 },
  { day: 'S', height: 80 },
  { day: 'S', height: 25 },
];

const MILESTONES = [
  {
    id: '1',
    title: 'Master Achieved',
    subtitle: 'Completed 100 tasks in a month',
    time: '2d ago',
    color: '#FACC15',
    icon: 'trophy' as const,
  },
  {
    id: '2',
    title: 'Deep Focus',
    subtitle: '4 hours of uninterrupted work',
    time: '1w ago',
    color: '#22C55E',
    icon: 'sunny' as const,
  },
];

export default function ProductivityStatsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
            <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Productivity Stats</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Ionicons name="calendar-outline" size={20} color="#E5E7EB" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Weekly Progress</Text>

        {/* Chart card */}
        <View style={styles.chartCard}>
          <View style={styles.chartHeaderRow}>
            <View>
              <Text style={styles.chartLabel}>Tasks Completed</Text>
              <Text style={styles.chartValue}>32 Tasks</Text>
            </View>
            <View style={styles.badge}>
              <Ionicons name="trending-up" size={14} color="#22C55E" />
              <Text style={styles.badgeText}>+12%</Text>
            </View>
          </View>
          <Text style={styles.vsLabel}>vs last week</Text>

          <View style={styles.chartBarsRow}>
            {CHART_DATA.map((bar, index) => (
              <View key={index} style={styles.chartBarContainer}>
                <View
                  style={[
                    styles.chartBar,
                    { height: bar.height },
                    index === CHART_DATA.length - 1 && styles.chartBarInactive,
                  ]}
                />
              </View>
            ))}
          </View>
          <View style={styles.chartDaysRow}>
            {CHART_DATA.map((bar, index) => (
              <Text key={index} style={styles.chartDay}>
                {bar.day}
              </Text>
            ))}
          </View>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Ionicons name="pie-chart-outline" size={14} color="#A855F7" />
              <Text style={styles.statTinyLabel}>DAILY RATE</Text>
            </View>
            <Text style={styles.statValue}>84%</Text>
            <Text style={styles.statHint}>Completion rate</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statIconRow}>
              <Ionicons name="time-outline" size={14} color="#3B82F6" />
              <Text style={styles.statTinyLabel}>FOCUS TIME</Text>
            </View>
            <Text style={styles.statValue}>34.5h</Text>
            <Text style={styles.statHint}>Total hours</Text>
          </View>
        </View>

        {/* Milestones */}
        <View style={styles.milestonesHeader}>
          <Text style={styles.sectionTitle}>Milestones</Text>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.linkText}>View All</Text>
          </TouchableOpacity>
        </View>

        {MILESTONES.map((ms) => (
          <View key={ms.id} style={styles.milestoneCard}>
            <View style={[styles.milestoneIcon, { backgroundColor: ms.color + '1A' }]}>
              <Ionicons name={ms.icon} size={18} color={ms.color} />
            </View>
            <View style={styles.milestoneContent}>
              <Text style={styles.milestoneTitle}>{ms.title}</Text>
              <Text style={styles.milestoneSubtitle}>{ms.subtitle}</Text>
            </View>
            <Text style={styles.milestoneMeta}>{ms.time}</Text>
          </View>
        ))}
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
  sectionTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
  },
  chartCard: {
    borderRadius: 24,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1E293B',
    padding: 18,
    marginBottom: 20,
  },
  chartHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  chartLabel: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  chartValue: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 2,
  },
  vsLabel: {
    color: '#6B7280',
    fontSize: 11,
    marginBottom: 16,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    backgroundColor: 'rgba(22,163,74,0.15)',
    gap: 4,
  },
  badgeText: {
    color: '#22C55E',
    fontSize: 12,
    fontWeight: '600',
  },
  chartBarsRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingHorizontal: 6,
    height: 100,
  },
  chartBarContainer: {
    flex: 1,
    alignItems: 'center',
  },
  chartBar: {
    width: 24,
    borderRadius: 8,
    backgroundColor: '#3B82F6',
  },
  chartBarInactive: {
    backgroundColor: '#374151',
  },
  chartDaysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
  },
  chartDay: {
    color: '#9CA3AF',
    fontSize: 11,
    flex: 1,
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  statIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 6,
  },
  statTinyLabel: {
    color: '#9CA3AF',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  statValue: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: '700',
  },
  statHint: {
    color: '#6B7280',
    fontSize: 12,
    marginTop: 4,
  },
  milestonesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  linkText: {
    color: '#60A5FA',
    fontSize: 13,
    fontWeight: '500',
  },
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
  },
  milestoneIcon: {
    width: 40,
    height: 40,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  milestoneContent: {
    flex: 1,
  },
  milestoneTitle: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '600',
  },
  milestoneSubtitle: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 2,
  },
  milestoneMeta: {
    color: '#6B7280',
    fontSize: 11,
    marginLeft: 8,
  },
});
