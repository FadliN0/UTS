import { ScrollView, TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";
import { useSelector } from 'react-redux';

const MenuItem = ({ icon, label }) => (
  <TouchableOpacity style={styles.menuItem} activeOpacity={0.8}>
    <View style={styles.iconWrapper}>{icon}</View>
    <View style={styles.labelWrapper}>
      <Text style={styles.menuLabel}>{label}</Text>
      <Feather name="chevron-right" size={20} color="#bbb" />
    </View>
  </TouchableOpacity>
);

export default function SettingsTab() {
  const profile = useSelector(state => state.profile);

  return (
    <SafeAreaProvider>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://reactjs.org/logo-og.png' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{profile.name}</Text>
          <Text style={styles.email}>{profile.email}</Text>
          <TouchableOpacity style={styles.editButton} onPress={() => router.push('/profile')}>
            <Text style={styles.editText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Pengaturan Akun</Text>
          <MenuItem icon={<Feather name="heart" size={20} color="#4F46E5" />} label="Favorit" />
          <MenuItem icon={<Feather name="download" size={20} color="#4F46E5" />} label="Unduhan" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Preferensi</Text>
          <MenuItem icon={<Feather name="globe" size={20} color="#10B981" />} label="Bahasa" />
          <MenuItem icon={<Feather name="map-pin" size={20} color="#10B981" />} label="Lokasi" />
          <MenuItem icon={<Feather name="monitor" size={20} color="#10B981" />} label="Tampilan" />
          <MenuItem icon={<Feather name="rss" size={20} color="#10B981" />} label="Preferensi Feed" />
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.menuTitle}>Langganan</Text>
          <MenuItem icon={<Feather name="credit-card" size={20} color="#F59E0B" />} label="Berlangganan" />
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9FAFB',
    flex: 1,
  },
  header: {
    backgroundColor: '#4F46E5',
    alignItems: 'center',
    paddingVertical: 36,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#fff',
  },
  cameraIcon: {
    position: 'absolute',
    top: 85,
    right: 140,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 4,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginTop: 16,
  },
  email: {
    fontSize: 14,
    color: '#e0e7ff',
    marginTop: 4,
  },
  editButton: {
    marginTop: 10,
    backgroundColor: '#10B981',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  editText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  menuSection: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#111827',
  },
  menuItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  labelWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
  },
});
