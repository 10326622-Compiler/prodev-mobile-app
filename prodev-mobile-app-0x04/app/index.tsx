import { View, Text, ImageBackground, Image, Pressable } from 'react-native';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={BACKGROUNDIMAGE} 
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Discover Your</Text>
          <Text style={styles.titleText}>Dream Job here</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Explore all the existing job roles based on your
          </Text>
          <Text style={styles.titleSubText}>
            interest and study major
          </Text>
        </View>

        <View style={{ flex: 1 }} />

        <View style={styles.buttonGroup}>
          <Pressable 
            style={styles.buttonPrimary}
            onPress={() => router.push('/signin')}
          >
            <Text style={styles.buttonPrimaryText}>Login</Text>
          </Pressable>

          <Pressable 
            style={styles.buttonSecondary}
            onPress={() => router.push('/join')}
          >
            <Text style={styles.buttonSecondaryText}>Register</Text>
          </Pressable>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={styles.buttonSecondaryText}>
            Already have an account?
          </Text>
        </View>
        <View style={{ height: 40 }} />
      </ImageBackground>
    </View>
  );
}