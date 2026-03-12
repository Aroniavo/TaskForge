import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function generateCalendar(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const rows: (number | null)[][] = [];
  let current = 1;
  for (let week = 0; week < 6 && current <= daysInMonth; week++) {
    const row: (number | null)[] = [];
    for (let day = 0; day < 7; day++) {
      if (week === 0 && day < firstDay) {
        row.push(null);
      } else if (current <= daysInMonth) {
        row.push(current++);
      } else {
        row.push(null);
      }
    }
    rows.push(row);
  }
  return rows;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

export default function EditTaskScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('Refactor API Authentication');
  const [description, setDescription] = useState(
    'Update the OAuth2 flow to handle refresh tokens more securely. Need to check the expiration times on the JWT tokens and implement the silent refresh strategy.'
  );
  const [calYear, setCalYear] = useState(2023);
  const [calMonth, setCalMonth] = useState(9); // October
  const [selectedDay, setSelectedDay] = useState(5);

  const calendar = generateCalendar(calYear, calMonth);

  const handleSave = () => router.back();

  const prevMonth = () => {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  };
  const nextMonth = () => {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
              <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Edit Task</Text>
            <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
              <Text style={styles.headerAction}>Save</Text>
            </TouchableOpacity>
          </View>

          {/* Task Title */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Task Title</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.input}
                placeholderTextColor="#6B7280"
              />
            </View>
          </View>

          {/* Description */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Description</Text>
            <View style={[styles.inputWrapper, styles.multilineWrapper]}>
              <TextInput
                value={description}
                onChangeText={setDescription}
                style={[styles.input, styles.multilineInput]}
                multiline
                placeholderTextColor="#6B7280"
              />
            </View>
          </View>

          {/* Categories & Priority */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Categories & Priority</Text>
            <View style={styles.tagsRow}>
              <View style={[styles.tagChip, { backgroundColor: 'rgba(239,68,68,0.15)', borderColor: '#EF4444' }]}>
                <Text style={[styles.tagChipText, { color: '#F87171' }]}>HTML Development</Text>
              </View>
              <View style={[styles.tagChip, { backgroundColor: 'rgba(168,85,247,0.15)', borderColor: '#A855F7' }]}>
                <Ionicons name="school-outline" size={12} color="#A855F7" />
                <Text style={[styles.tagChipText, { color: '#A855F7' }]}>Study</Text>
              </View>
            </View>
            <View style={styles.tagsRow}>
              <View style={[styles.tagChip, { backgroundColor: 'rgba(239,68,68,0.15)', borderColor: '#EF4444' }]}>
                <Ionicons name="flag" size={12} color="#F87171" />
                <Text style={[styles.tagChipText, { color: '#F87171' }]}>High Priority</Text>
              </View>
              <View style={[styles.tagChip, { backgroundColor: 'rgba(251,191,36,0.15)', borderColor: '#FBBF24' }]}>
                <Ionicons name="warning" size={12} color="#FBBF24" />
                <Text style={[styles.tagChipText, { color: '#FBBF24' }]}>Urgent</Text>
              </View>
            </View>
          </View>

          {/* Calendar */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Due Date</Text>
            <View style={styles.calendarCard}>
              <View style={styles.calendarHeader}>
                <TouchableOpacity onPress={prevMonth} activeOpacity={0.7}>
                  <Ionicons name="chevron-back" size={18} color="#E5E7EB" />
                </TouchableOpacity>
                <Text style={styles.calendarMonth}>
                  {MONTHS[calMonth]} {calYear}
                </Text>
                <TouchableOpacity onPress={nextMonth} activeOpacity={0.7}>
                  <Ionicons name="chevron-forward" size={18} color="#E5E7EB" />
                </TouchableOpacity>
              </View>
              <View style={styles.calendarDaysHeader}>
                {DAYS.map((d, i) => (
                  <Text key={i} style={styles.calendarDayLabel}>{d}</Text>
                ))}
              </View>
              {calendar.map((week, wi) => (
                <View key={wi} style={styles.calendarWeek}>
                  {week.map((day, di) => {
                    const isSelected = day === selectedDay;
                    return (
                      <TouchableOpacity
                        key={di}
                        style={[styles.calendarDay, isSelected && styles.calendarDaySelected]}
                        onPress={() => day && setSelectedDay(day)}
                        activeOpacity={0.7}
                      >
                        <Text
                          style={[
                            styles.calendarDayText,
                            isSelected && styles.calendarDayTextSelected,
                          ]}
                        >
                          {day ?? ''}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              ))}
            </View>
          </View>

          {/* Delete button */}
          <TouchableOpacity style={styles.deleteButton} activeOpacity={0.9}>
            <Ionicons name="trash-outline" size={18} color="#FCA5A5" />
            <Text style={styles.deleteText}>Delete Task</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
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
    paddingBottom: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: '600',
  },
  headerAction: {
    color: '#60A5FA',
    fontSize: 14,
    fontWeight: '600',
  },
  fieldBlock: {
    marginBottom: 20,
  },
  label: {
    color: '#9CA3AF',
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 8,
  },
  inputWrapper: {
    backgroundColor: '#020617',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    paddingHorizontal: 14,
    minHeight: 56,
    justifyContent: 'center',
  },
  multilineWrapper: {
    paddingVertical: 12,
  },
  input: {
    color: '#F9FAFB',
    fontSize: 14,
  },
  multilineInput: {
    minHeight: 80,
    textAlignVertical: 'top',
    lineHeight: 22,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 10,
  },
  tagChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    borderWidth: 1,
  },
  tagChipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  calendarCard: {
    borderRadius: 20,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    padding: 16,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  calendarMonth: {
    color: '#F9FAFB',
    fontSize: 15,
    fontWeight: '600',
  },
  calendarDaysHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  calendarDayLabel: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '600',
    width: 30,
    textAlign: 'center',
  },
  calendarWeek: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 4,
  },
  calendarDay: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarDaySelected: {
    backgroundColor: '#2563EB',
  },
  calendarDayText: {
    color: '#E5E7EB',
    fontSize: 13,
  },
  calendarDayTextSelected: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  deleteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(248,113,113,0.08)',
    borderWidth: 1,
    borderColor: '#B91C1C',
    paddingVertical: 16,
    marginTop: 12,
  },
  deleteText: {
    color: '#FCA5A5',
    fontSize: 15,
    fontWeight: '600',
  },
});
