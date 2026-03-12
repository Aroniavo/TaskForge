import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function SignUpScreen() {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    // TODO: plug real sign up flow
  };

  const handleGoToLogin = () => {
    // TODO: navigate to login screen when it exists
  };

  const secureEntry = !showPassword;

  return (
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
          <TouchableOpacity onPress={handleBack} style={styles.backButton} activeOpacity={0.8}>
            <Ionicons name="chevron-back" size={22} color="#E5E7EB" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Sign Up</Text>
          <View style={styles.headerRightPlaceholder} />
        </View>

        {/* Title & subtitle */}
        <View style={styles.titleBlock}>
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.subtitle}>
            Join the community to boost your productivity with gamification.
          </Text>
        </View>

        {/* Full name */}
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Full Name</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="person-outline" size={18} color="#6B7280" style={styles.inputIcon} />
            <TextInput
              value={fullName}
              onChangeText={setFullName}
              placeholder="John Doe"
              placeholderTextColor="#6B7280"
              style={styles.input}
            />
          </View>
        </View>

        {/* Email */}
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={18} color="#6B7280" style={styles.inputIcon} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="student@university.edu"
              placeholderTextColor="#6B7280"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.input}
            />
          </View>
        </View>

        {/* Password */}
        <View style={styles.fieldBlock}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="#6B7280" style={styles.inputIcon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="••••••••"
              placeholderTextColor="#6B7280"
              secureTextEntry={secureEntry}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((prev) => !prev)}
              style={styles.eyeButton}
              activeOpacity={0.8}
            >
              <Ionicons
                name={showPassword ? 'eye-off-outline' : 'eye-outline'}
                size={20}
                color="#9CA3AF"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.helperText}>Must be at least 8 characters long.</Text>
        </View>

        {/* Primary CTA */}
        <TouchableOpacity
          style={styles.primaryButton}
          activeOpacity={0.9}
          onPress={handleSubmit}
        >
          <Text style={styles.primaryButtonText}>Join the Community</Text>
        </TouchableOpacity>

        {/* Bottom text */}
        <View style={styles.bottomBlock}>
          <Text style={styles.bottomText}>
            Already have an account?{' '}
            <Text style={styles.bottomLink} onPress={handleGoToLogin}>
              Log In
            </Text>
          </Text>

          <Text style={styles.legalText}>
            By signing up, you agree to our{' '}
            <Text style={styles.legalLink}>Terms of Service</Text> and{' '}
            <Text style={styles.legalLink}>Privacy Policy</Text>.
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#020617',
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(15,23,42,0.8)',
  },
  headerTitle: {
    color: '#E5E7EB',
    fontSize: 16,
    fontWeight: '600',
  },
  headerRightPlaceholder: {
    width: 36,
    height: 36,
  },
  titleBlock: {
    marginBottom: 32,
  },
  title: {
    color: '#F9FAFB',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    lineHeight: 20,
  },
  fieldBlock: {
    marginBottom: 20,
  },
  label: {
    color: '#E5E7EB',
    fontSize: 12,
    fontWeight: '500',
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
    height: 56,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#F9FAFB',
    fontSize: 14,
  },
  eyeButton: {
    marginLeft: 8,
  },
  helperText: {
    marginTop: 6,
    color: '#6B7280',
    fontSize: 12,
  },
  primaryButton: {
    marginTop: 12,
    backgroundColor: '#2563EB',
    borderRadius: 32,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
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
  bottomBlock: {
    marginTop: 24,
    alignItems: 'center',
  },
  bottomText: {
    color: '#9CA3AF',
    fontSize: 13,
    marginBottom: 12,
  },
  bottomLink: {
    color: '#2563EB',
    fontWeight: '600',
  },
  legalText: {
    color: '#4B5563',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 16,
  },
  legalLink: {
    color: '#93C5FD',
  },
});

