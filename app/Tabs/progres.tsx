import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { RootState } from '../store';
import { resetProgress } from '../../store/reducer/progressSlice';
import { courseData } from '../../constants/courseData';

export default function ProgressScreen() {
  const dispatch = useDispatch();
  const progress = useSelector((state: RootState) => state.progress.completed);
  const scoreCorrectIds = useSelector((state: RootState) => state.progress.scoreCorrectIds);

  const totalMateri = courseData.content.filter(item => item.type === 'materi').length;
  const totalQuiz = courseData.content.filter(item => item.type === 'quiz').length;

  const materiProgress = progress.filter(p => p.includes('materi'));
  const quizProgress = progress.filter(p => p.includes('quiz'));

  const uniqueCorrect = Array.from(new Set(scoreCorrectIds));
  const score = Math.min(uniqueCorrect.length, totalQuiz);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🎓 Progress Belajar</Text>

      <View style={styles.card}>
        <Image
          source={{ uri: courseData.image || 'https://reactjs.org/logo-og.png' }}
          style={styles.courseImage}
        />
        <Text style={styles.courseTitle}>{courseData.title}</Text>

        <View style={styles.infoGroup}>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{materiProgress.length}/{totalMateri}</Text>
            <Text style={styles.infoLabel}>Materi</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{quizProgress.length}/{totalQuiz}</Text>
            <Text style={styles.infoLabel}>Quiz</Text>
          </View>
          <View style={styles.infoBox}>
            <Text style={styles.infoValue}>{score}</Text>
            <Text style={styles.infoLabel}>Skor</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.resetButton} onPress={() => dispatch(resetProgress())}>
        <Text style={styles.resetButtonText}>🔄 Reset Progress</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9fafc',
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  courseImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  infoGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#e3f2fd',
    marginHorizontal: 5,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  infoLabel: {
    fontSize: 12,
    color: '#1976d2',
    marginTop: 4,
  },
  infoValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0d47a1',
  },
  resetButton: {
    marginTop: 30,
    backgroundColor: '#e53935',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
