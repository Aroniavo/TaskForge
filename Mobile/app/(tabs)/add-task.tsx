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

const CATEGORIES = [
  { label: 'Coding', icon: 'code-slash-outline' as const },
  { label: 'Study', icon: 'school-outline' as const },
  { label: 'Personal', icon: 'person-outline' as const },
  { label: 'Work', icon: 'briefcase-outline' as const },
];

const PRIORITIES = ['Low', 'Medium', 'High'] as const;

export default function AddTaskScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Coding');
  const [priority, setPriority] = useState<'Low' | 'Medium' | 'High'>('Medium');

  const handleSave = () => {
    // TODO: wire real persistence
    router.back();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.root}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity
              style={styles.iconButton}
              activeOpacity={0.8}
              onPress={() => router.back()}
            >
              <Ionicons name="chevron-back" size={20} color="#E5E7EB" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Add New Task</Text>
            <TouchableOpacity onPress={handleSave} activeOpacity={0.8}>
              <Text style={styles.headerAction}>Save</Text>
            </TouchableOpacity>
          </View>

          {/* Task name */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Task Name</Text>
            <View style={styles.inputWrapper}>
              <Ionicons name="create-outline" size={18} color="#6B7280" style={styles.inputIcon} />
              <TextInput
                value={title}
                onChangeText={setTitle}
                placeholder="e.g., Finish React Project"
                placeholderTextColor="#6B7280"
                style={styles.input}
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
                placeholder="Add details about the task..."
                placeholderTextColor="#6B7280"
                style={[styles.input, styles.multilineInput]}
                multiline
              />
            </View>
          </View>

          {/* Category */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.chipRow}>
              {CATEGORIES.map((cat) => {
                const active = cat.label === category;
                return (
                  <TouchableOpacity
                    key={cat.label}
                    style={[styles.chip, active && styles.chipActive]}
                    onPress={() => setCategory(cat.label)}
                    activeOpacity={0.85}
                  >
                    <Ionicons
                      name={cat.icon}
                      size={16}
                      color={active ? '#FFFFFF' : '#9CA3AF'}
                    />
                    <Text style={[styles.chipText, active && styles.chipTextActive]}>
                      {cat.label}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Priority */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Priority</Text>
            <View style={styles.priorityRow}>
              {PRIORITIES.map((p) => {
                const active = p === priority;
                return (
                  <TouchableOpacity
                    key={p}
                    style={[styles.priorityChip, active && styles.priorityChipActive]}
                    onPress={() => setPriority(p)}
                    activeOpacity={0.85}
                  >
                    <Text style={[styles.priorityText, active && styles.priorityTextActive]}>
                      {p}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Due time */}
          <View style={styles.fieldBlock}>
            <Text style={styles.label}>Due Time</Text>
            <View style={styles.row}>
              <View style={styles.smallCard}>
                <Text style={styles.smallLabel}>DATE</Text>
                <View style={styles.smallValueRow}>
                  <Ionicons name="calendar-outline" size={16} color="#E5E7EB" />
                  <Text style={styles.smallValue}>Today</Text>
                </View>
              </View>
              <View style={styles.smallCard}>
                <Text style={styles.smallLabel}>TIME</Text>
                <View style={styles.smallValueRow}>
                  <Ionicons name="time-outline" size={16} color="#E5E7EB" />
                  <Text style={styles.smallValue}>14:00</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton} onPress={handleSave} activeOpacity={0.9}>
            <Ionicons name="add-circle-outline" size={18} color="#FFFFFF" />
            <Text style={styles.primaryButtonText}>Create Task</Text>
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
  root: {
    flex: 1,
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
    marginBottom: 24,
  },
  iconButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(15,23,42,0.9)',
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
    color: '#E5E7EB',
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 8,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#020617',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    paddingHorizontal: 14,
    minHeight: 56,
  },
  multilineWrapper: {
    paddingTop: 12,
    paddingBottom: 12,
    alignItems: 'flex-start',
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#F9FAFB',
    fontSize: 14,
  },
  multilineInput: {
    minHeight: 72,
    textAlignVertical: 'top',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 16,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  chipActive: {
    backgroundColor: '#1D4ED8',
    borderColor: '#2563EB',
  },
  chipText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '500',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  priorityRow: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    overflow: 'hidden',
  },
  priorityChip: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  priorityChipActive: {
    backgroundColor: '#2563EB',
    borderRadius: 14,
  },
  priorityText: {
    color: '#9CA3AF',
    fontSize: 13,
    fontWeight: '600',
  },
  priorityTextActive: {
    color: '#FFFFFF',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
  },
  smallCard: {
    flex: 1,
    borderRadius: 16,
    backgroundColor: '#0F172A',
    borderWidth: 1,
    borderColor: '#1F2937',
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  smallLabel: {
    color: '#6B7280',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  smallValueRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  smallValue: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '600',
  },
  primaryButton: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#2563EB',
    borderRadius: 32,
    height: 56,
    shadowColor: '#1D4ED8',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
