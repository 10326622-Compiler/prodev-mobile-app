import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  Pressable, 
  Image, 
  SafeAreaView,
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { styles } from '@/styles/_ joinstyle';
import { HEROLOGOGREEN, GOOGLELOGO, FACEBOOKLOGO } from '@/constants';

export default function SignIn() {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.iconsection}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Image source={HEROLOGOGREEN} />
          <View style={{ width: 24 }} />
        </View>

        <View style={styles.titleTextGroup}>
          <Text style={styles.titleText}>Login here</Text>
          <Text style={styles.subText}>Welcome back you've been missed!</Text>
        </View>

        <View style={styles.formGroup}>
          <View>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formControl}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text style={styles.formLabel}>Password</Text>
            <View style={styles.formPasswordControl}>
              <TextInput
                style={styles.passwordControl}
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity 
                onPress={() => setPasswordVisible(!passwordVisible)}
              >
                <Ionicons 
                  name={passwordVisible ? "eye-off" : "eye"} 
                  size={24} 
                  color="#7B7B7B" 
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
        </View>

        <Pressable style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </Pressable>

        <View style={styles.dividerGroup}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.secondaryButtonGroup}>
          <Pressable style={styles.secondaryButton}>
            <Image source={GOOGLELOGO} />
            <Text style={styles.secondaryButtonText}>Sign in with Google</Text>
          </Pressable>

          <Pressable style={styles.secondaryButton}>
            <Image source={FACEBOOKLOGO} />
            <Text style={styles.secondaryButtonText}>Sign in with Facebook</Text>
          </Pressable>
        </View>

        <View style={styles.signupgroup}>
          <Text style={styles.signupTitleText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/join')}>
            <Text style={styles.signupSubTitleText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}