import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "@/store/reducer/progressSlice";

interface CourseQuizProps {
  onNextContent: () => void;
  content: {
    question: string;
    options: Array<{ value: number; label: string }>;
    answer: number | null;
  };
  index: number;
}

export default function QuizTopic(props: CourseQuizProps) {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();

  const checkAnswer = () => {
    if (userAnswer === null) {
      Alert.alert("Pilih jawaban terlebih dahulu.");
      return;
    }

    if (props.content.answer === null) {
      Alert.alert("Jawaban benar tidak tersedia.");
      return;
    }

    const isCorrect = userAnswer === props.content.answer;
    const quizKey = `content-${props.index}-quiz`;

    dispatch(addScore({ key: quizKey, isCorrect }));
    setIsSubmitted(true);

    // Otomatis lanjut setelah 1.5 detik
    setTimeout(() => {
      props.onNextContent();
    }, 1500);
  };

  const getOptionStyle = (optionValue: number) => {
    if (!isSubmitted) {
      return userAnswer === optionValue ? [styles.optionCard, styles.selectedCard] : styles.optionCard;
    }

    // Saat sudah disubmit
    if (optionValue === props.content.answer) {
      return [styles.optionCard, styles.correctCard];
    }

    if (optionValue === userAnswer && userAnswer !== props.content.answer) {
      return [styles.optionCard, styles.wrongCard];
    }

    return styles.optionCard;
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.question}>{props.content.question}</Text>

        {props.content.options.map((option) => (
          <TouchableOpacity
            key={option.value}
            style={getOptionStyle(option.value)}
            disabled={isSubmitted}
            onPress={() => setUserAnswer(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {!isSubmitted && (
        <View style={styles.footer}>
          <TouchableOpacity style={styles.button} onPress={checkAnswer}>
            <Text style={styles.buttonText}>Kirim Jawaban</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F4F6F8" },
  scrollContent: { padding: 20 },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  question: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  optionCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 12,
    elevation: 2,
  },
  selectedCard: {
    borderColor: "#841584",
    backgroundColor: "#f6e6f8",
  },
  correctCard: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },
  wrongCard: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#841584",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
