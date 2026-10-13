import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DiaryCard({ title, date, preview, moodImage, mood }) {
  
  // Fungsi untuk menentukan variasi warna border dan background berdasarkan mood
  const getMoodStyle = () => {
    switch (mood) {
      case 'happy': return { borderColor: '#10b981', backgroundColor: '#ecfdf5' }; // Hijau
      case 'focus': return { borderColor: '#3b82f6', backgroundColor: '#eff6ff' }; // Biru
      case 'calm': return { borderColor: '#8b5cf6', backgroundColor: '#f5f3ff' }; // Ungu
      case 'tired': return { borderColor: '#f59e0b', backgroundColor: '#fffbeb' }; // Kuning
      case 'relieved': return { borderColor: '#ec4899', backgroundColor: '#fdf2f8' }; // Pink
      default: return { borderColor: '#e5e7eb', backgroundColor: '#ffffff' }; // Default
    }
  };

  const moodStyle = getMoodStyle();

  return (
    // Menggabungkan style bawaan (styles.card) dengan style dinamis (moodStyle)
    <View style={[styles.card, moodStyle]}>
      {/* Menggunakan prop moodImage yang sudah mendukung URL maupun require lokal */}
      <Image source={moodImage} style={styles.mood} />
      
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview}>{preview}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    gap: 12,
    padding: 12,
    borderWidth: 1.5, // Ditebalkan sedikit agar variasi warna mood lebih terlihat
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});