import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProgress } from '../../../store/reducer/progressSlice';

interface CourseTopicProps {
  onNextContent: () => void;
  topic: { id: number; description: string; }[];
}

export default function CourseTopic(props: CourseTopicProps) {
  const [activeTopic, setActiveTopic] = useState(0);
  const isShowNext = props.topic.length === activeTopic;
  const dispatch = useDispatch();

  const onContinue = () => {
    if (activeTopic < props.topic.length) {
      setActiveTopic(activeTopic + 1);
    }
  };

  const onNextTopic = () => {
    dispatch(addProgress(`content-${props.topic[0].id}-materi`));
    setActiveTopic(0);
    props.onNextContent();
  };

  const progressWidth = (activeTopic / props.topic.length) * 100;

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: 'https://reactjs.org/logo-og.png' }} style={styles.banner} />
        
        {/* Progress Bar */}
        <View style={styles.progressBackground}>
          <View style={[styles.progressFill, { width: `${progressWidth}%` }]} />
        </View>

        {/* Materi */}
        <View style={styles.contentWrapper}>
          {props.topic.map((item, index) => (
            <View key={index}>
              {index <= activeTopic && (
                <View style={styles.card}>
                  <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Tombol Navigasi */}
      <View style={styles.buttonContainer}>
        {!isShowNext && (
          <Button onPress={onContinue} title="Lanjutkan Materi" color="#841584" />
        )}
        {isShowNext && (
          <Button onPress={onNextTopic} title="Lanjut ke Topik Berikutnya" color="#4287f5" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F8' },
  banner: { width: '100%', height: 200, resizeMode: 'cover' },
  progressBackground: {
    height: 8,
    backgroundColor: '#ddd',
    borderRadius: 4,
    margin: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#841584',
  },
  contentWrapper: {
    padding: 15,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  descriptionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  buttonContainer: {
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#e0e0e0',
    backgroundColor: '#fff',
  },
});
