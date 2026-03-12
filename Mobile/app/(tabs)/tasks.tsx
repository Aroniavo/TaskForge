import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const FILTERS = ['All', 'Coding', 'Study', 'Personal'];

const MOCK_TASKS = [
  {
    id: '1',
    title: 'Complete React Component',
    time: '10:00 AM - 11:30 AM',
    tag: 'Coding',
    tagColor: '#38BDF8',
    done: false,
  },
  {
    id: '2',
    title: 'Study Algorithms',
    time: '01:00 PM - 02:30 PM',
    tag: 'Study',
    tagColor: '#A855F7',
    done: false,
  },
  {
    id: '3',
    title: 'Grocery Shopping',
    time: '05:00 PM',
    tag: 'Personal',
    tagColor: '#22C55E',
    done: true,
  },
  {
    id: '4',
    title: 'Debug API Endpoint',
    time: '08:00 PM - 09:00 PM',
    tag: 'Coding',
    tagColor: '#38BDF8',
    done: false,
  },
  {
    id: '5',
    title: 'Read Documentation',
    time: '09:30 PM',
    tag: 'Learning',
    tagColor: '#F97316',
    done: false,
  },
];

export default function TasksScreen() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredTasks =
    activeFilter === 'All'
      ? MOCK_TASKS
      : MOCK_TASKS.filter((t) => t.tag.toLowerCase() === activeFilter.toLowerCase());

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerRow}>
          <View style={styles.headerLeft}>
            <View style={styles.gridIcon}>
              <Ionicons name="grid" size={16} color="#E5E7EB" />
            </View>
            <View>
              <Text style={styles.headerLabel}>HELLO, ALEX</Text>
              <Text style={styles.headerTitle}>My Tasks</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.iconButton}
            activeOpacity={0.8}
            onPress={() => router.push('/notifications' as any)}
          >
            <Ionicons name="notifications-outline" size={18} color="#E5E7EB" />
          </TouchableOpacity>
        </View>

        {/* Progress card */}
        <View style={styles.progressCard}>
          <Text style={styles.progressLabel}>Daily Progress</Text>
          <View style={styles.progressHeaderRow}>
            <Text style={styles.progressTitle}>Good Job!</Text>
            <Text style={styles.progressPercent}>65%</Text>
          </View>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
          <Text style={styles.progressSubtitle}>12 of 18 tasks completed today</Text>
        </View>

        {/* Filter chips */}
        <View style={styles.filterRow}>
          {FILTERS.map((f) => {
            const active = f === activeFilter;
            return (
              <TouchableOpacity
                key={f}
                style={[styles.filterChip, active && styles.filterChipActive]}
                onPress={() => setActiveFilter(f)}
                activeOpacity={0.8}
              >
                <Text style={[styles.filterText, active && styles.filterTextActive]}>{f}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Today label */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.sectionLeft}>
            <Ionicons name="time-outline" size={14} color="#6366F1" />
            <Text style={styles.sectionTitle}>Today's Tasks</Text>
          </View>
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.taskCard}
              activeOpacity={0.8}
              onPress={() => router.push('/edit-task' as any)}
            >
              <View style={styles.taskRow}>
                <View style={styles.taskLeft}>
                  <View style={[styles.checkboxOuter, item.done && styles.checkboxDone]}>
                    {item.done && <Ionicons name="checkmark" size={14} color="#FFFFFF" />}
                  </View>
                  <View>
                    <Text style={[styles.taskTitle, item.done && styles.taskTitleDone]}>
                      {item.title}
                    </Text>
                    <View style={styles.taskMeta}>
                      <Ionicons name="time-outline" size={12} color="#9CA3AF" />
                      <Text style={styles.taskTime}>{item.time}</Text>
                      <Text style={styles.dot}>•</Text>
                      <Text style={[styles.taskTag, { color: item.tagColor }]}>{item.tag}</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />

        {/* Floating add button */}
        <TouchableOpacity
          style={styles.fab}
          activeOpacity={0.9}
          onPress={() => router.push('/(tabs)/add-task')}
        >
          <Ionicons name="add" size={26} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 0,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  gridIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLabel: {
    color: '#6B7280',
    fontSize: 10,
    letterSpacing: 1,
  },
  headerTitle: {
    color: '#F9FAFB',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 2,
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressCard: {
    backgroundColor: '#1D4ED8',
    borderRadius: 24,
    padding: 18,
    marginBottom: 20,
  },
  progressLabel: {
    color: '#DBEAFE',
    fontSize: 11,
    marginBottom: 4,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  progressTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },
  progressPercent: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  progressBarBackground: {
    height: 8,
    borderRadius: 999,
    backgroundColor: 'rgba(15,23,42,0.7)',
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressBarFill: {
    width: '65%',
    backgroundColor: '#F9FAFB',
    height: '100%',
    borderRadius: 999,
  },
  progressSubtitle: {
    color: '#DBEAFE',
    fontSize: 12,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  filterChipActive: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  filterText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '500',
  },
  filterTextActive: {
    color: '#FFFFFF',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '700',
  },
  listContent: {
    paddingBottom: 80,
    gap: 10,
  },
  taskCard: {
    backgroundColor: '#020617',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  checkboxOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#374151',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },
  taskTitle: {
    color: '#F9FAFB',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  taskTitleDone: {
    textDecorationLine: 'line-through',
    color: '#6B7280',
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  taskTime: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  dot: {
    color: '#6B7280',
    fontSize: 10,
  },
  taskTag: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  fab: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1D4ED8',
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.55,
    shadowRadius: 24,
    elevation: 12,
  },
});
