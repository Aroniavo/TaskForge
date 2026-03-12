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

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // TODO: plug real auth
    router.replace('/(tabs)');
  };

  const handleGoToSignUp = () => {
    router.push('/sign-up');
  };

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
        {/* Logo */}
        <View style={styles.logoBlock}>
          <View style={styles.logoSquare}>
            <Ionicons name="rocket" size={36} color="#FFFFFF" />
          </View>
        </View>

        {/* Title */}
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to access your{'\n'}workspace
        </Text>

        {/* Email */}
        <View style={styles.fieldBlock}>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={18} color="#6B7280" style={styles.inputIcon} />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Email address"
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
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={18} color="#6B7280" style={styles.inputIcon} />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#6B7280"
              secureTextEntry={!showPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setShowPassword((p) => !p)}
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
          <TouchableOpacity activeOpacity={0.7} style={styles.forgotRow}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Log In Button */}
        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} activeOpacity={0.9}>
          <Text style={styles.primaryButtonText}>Log In →</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerRow}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social buttons */}
        <View style={styles.socialRow}>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Ionicons name="logo-google" size={18} color="#E5E7EB" />
            <Text style={styles.socialText}>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
            <Ionicons name="logo-apple" size={18} color="#E5E7EB" />
            <Text style={styles.socialText}>Apple</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footerBlock}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text style={styles.footerLink} onPress={handleGoToSignUp}>
              Sign Up
            </Text>
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
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    justifyContent: 'center',
  },
  logoBlock: {
    alignItems: 'center',
    marginBottom: 24,
  },
  logoSquare: {
    width: 72,
    height: 72,
    borderRadius: 20,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#F9FAFB',
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    color: '#9CA3AF',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 32,
  },
  fieldBlock: {
    marginBottom: 16,
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
  forgotRow: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  forgotText: {
    color: '#60A5FA',
    fontSize: 13,
    fontWeight: '500',
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
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#1F2937',
  },
  dividerText: {
    color: '#6B7280',
    fontSize: 12,
    marginHorizontal: 12,
  },
  socialRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: 48,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#1F2937',
    backgroundColor: '#020617',
  },
  socialText: {
    color: '#E5E7EB',
    fontSize: 14,
    fontWeight: '500',
  },
  footerBlock: {
    alignItems: 'center',
  },
  footerText: {
    color: '#9CA3AF',
    fontSize: 13,
  },
  footerLink: {
    color: '#60A5FA',
    fontWeight: '600',
  },
});
