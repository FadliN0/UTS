import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { setName, setAddress, setPhone, setEmail } from '../store/reducer/profileSlice';
import { router } from 'expo-router';

export default function Profile() {
  const profile = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const onSave = () => {
    router.push('/Tabs/settings');
  };

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Edit Profil</Text>

        <View style={styles.card}>
          <View style={styles.field}>
            <Text style={styles.label}>Nama Lengkap</Text>
            <TextInput
              onChangeText={(value) => dispatch(setName(value))}
              value={profile.name}
              placeholder="Masukkan nama"
              style={styles.input}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              onChangeText={(value) => dispatch(setEmail(value))}
              value={profile.email}
              placeholder="Masukkan email"
              style={styles.input}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Alamat</Text>
            <TextInput
              onChangeText={(value) => dispatch(setAddress(value))}
              value={profile.address}
              placeholder="Alamat lengkap"
              style={[styles.input, styles.textArea]}
              multiline
              numberOfLines={4}
              maxLength={100}
            />
          </View>

          <View style={styles.field}>
            <Text style={styles.label}>Nomor Telepon</Text>
            <TextInput
              onChangeText={(value) => dispatch(setPhone(value))}
              value={profile.phone}
              placeholder="0812xxxxxxx"
              style={styles.input}
              keyboardType="phone-pad"
            />
          </View>

          <TouchableOpacity style={styles.button} onPress={onSave}>
            <Text style={styles.buttonText}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F3F4F6',
    flexGrow: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  field: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  button: {
    marginTop: 12,
    backgroundColor: '#4F46E5',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
