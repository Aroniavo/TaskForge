import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const [darkMode, setDarkMode] = React.useState(true);
  const [pushNotif, setPushNotif] = React.useState(true);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.8}>
            <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Profile</Text>
          <View style={{ width: 22 }} />
        </View>

        {/* Avatar + name */}
        <View style={styles.avatarBlock}>
          <View style={styles.avatarGlow}>
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={40} color="#E5E7EB" />
              <TouchableOpacity style={styles.avatarEdit} activeOpacity={0.9}>
                <Ionicons name="pencil" size={14} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.name}>Alex Chen</Text>
          <View style={styles.levelPill}>
            <Ionicons name="trophy" size={14} color="#FACC15" />
            <Text style={styles.levelText}>Level 42 - Master</Text>
          </View>
          <Text style={styles.joinedText}>Joined Jan 2023</Text>
        </View>

        {/* Stats row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="flash" size={18} color="#3B82F6" style={styles.statIcon} />
            <Text style={styles.statValue}>42</Text>
            <Text style={styles.statLabel}>Level</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="star" size={18} color="#FACC15" style={styles.statIcon} />
            <Text style={styles.statValue}>1.2k</Text>
            <Text style={styles.statLabel}>XP Earned</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="checkmark-circle" size={18} color="#22C55E" style={styles.statIcon} />
            <Text style={styles.statValue}>89%</Text>
            <Text style={styles.statLabel}>Completed</Text>
          </View>
        </View>

        {/* Settings */}
        <Text style={styles.sectionTitle}>Settings</Text>

        <View style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: 'rgba(99,102,241,0.15)' }]}>
              <Ionicons name="moon" size={18} color="#818CF8" />
            </View>
            <Text style={styles.settingLabel}>Dark Mode</Text>
          </View>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: '#374151', true: '#2563EB' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.settingCard}>
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: 'rgba(59,130,246,0.15)' }]}>
              <Ionicons name="notifications" size={18} color="#3B82F6" />
            </View>
            <Text style={styles.settingLabel}>Push Notifications</Text>
          </View>
          <Switch
            value={pushNotif}
            onValueChange={setPushNotif}
            trackColor={{ false: '#374151', true: '#2563EB' }}
            thumbColor="#FFFFFF"
          />
        </View>

        <TouchableOpacity
          style={styles.settingCard}
          activeOpacity={0.8}
          onPress={() => {}}
        >
          <View style={styles.settingLeft}>
            <View style={[styles.settingIcon, { backgroundColor: 'rgba(107,114,128,0.15)' }]}>
              <Ionicons name="people" size={18} color="#9CA3AF" />
            </View>
            <Text style={styles.settingLabel}>Account Details</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#6B7280" />
        </TouchableOpacity>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutCard} activeOpacity={0.9}>
          <Ionicons name="log-out-outline" size={20} color="#F97316" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
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
    marginBottom: 24,
  },
  headerTitle: {
    color: '#F9FAFB',
    fontSize: 16,
    fontWeight: '600',
  },
  avatarBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarGlow: {
    marginBottom: 12,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0B1120',
    borderWidth: 3,
    borderColor: '#1E3A5F',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 20,
    elevation: 10,
  },
  avatarEdit: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: '#F9FAFB',
    fontSize: 22,
    fontWeight: '700',
  },
  levelPill: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 999,
    backgroundColor: 'rgba(37,99,235,0.2)',
    marginTop: 8,
    gap: 5,
  },
  levelText: {
    color: '#93C5FD',
    fontSize: 12,
    fontWeight: '500',
  },
  joinedText: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 6,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingVertical: 16,
    alignItems: 'center',
  },
  statIcon: {
    marginBottom: 6,
  },
  statValue: {
    color: '#F9FAFB',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    color: '#9CA3AF',
    fontSize: 11,
  },
  sectionTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  settingCard: {
    borderRadius: 18,
    backgroundColor: '#020617',
    borderWidth: 1,
    borderColor: '#1E293B',
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  settingLabel: {
    color: '#F9FAFB',
    fontSize: 14,
    fontWeight: '500',
  },
  logoutCard: {
    marginTop: 20,
    borderRadius: 18,
    backgroundColor: 'rgba(248,113,113,0.08)',
    borderWidth: 1,
    borderColor: '#7F1D1D',
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  logoutText: {
    color: '#FCA5A5',
    fontSize: 15,
    fontWeight: '600',
  },
});
