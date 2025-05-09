import { SafeAreaProvider } from 'react-native-safe-area-context';
import CourseTopic from '../components/modules/course/Topic';
import CourseQuiz from '../components/modules/course/Quiz';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View, StyleSheet, ScrollView } from "react-native";
import { router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { addProgress } from '../store/reducer/progressSlice';
import { courseData } from '../constants/courseData';

export default function Course() {
  const [activeContent, setActiveContent] = useState(0);
  const dispatch = useDispatch();

  const onNextContent = () => {
    const currentContent = courseData.content[activeContent];
    const contentKey = `content-${activeContent}-${currentContent.type}`;
    dispatch(addProgress(contentKey));

    if (activeContent < courseData.content.length - 1) {
      setActiveContent(activeContent + 1);
    } else {
      Alert.alert(
        "Selesai!",
        "Kamu sudah menyelesaikan semua materi.",
        [{ text: "OK", onPress: () => router.replace("./Tabs") }],
        { cancelable: false }
      );
    }
  };

  const CourseController = () => {
    const currentContent = courseData.content[activeContent];
    const contentKey = `content-${activeContent}-${currentContent.type}`;

    useEffect(() => {
      dispatch(addProgress(contentKey));
    }, [activeContent]);

    return (
      <View style={styles.card}>
        {currentContent.title && (
          <Text style={styles.sectionTitle}>{currentContent.title}</Text>
        )}

        {currentContent.type === 'materi' && (
          <CourseTopic
            onNextContent={onNextContent}
            topic={currentContent.value}
          />
        )}

        {currentContent.type === 'quiz' && (
          <CourseQuiz
            onNextContent={onNextContent}
            content={currentContent.value}
            index={activeContent}
          />
        )}
      </View>
    );
  };

  return (
    <SafeAreaProvider>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.courseTitle}>{courseData.title}</Text>
        <CourseController />
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 60,
    backgroundColor: '#f7f7f7',
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: '#1a1a1a',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    color: '#333',
    textAlign: 'center',
  },
  courseWrapper: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
