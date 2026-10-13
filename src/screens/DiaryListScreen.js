import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image, 
} from 'react-native';
import DiaryCard from '../components/DiaryCard';

const diaryEntries = [
  {
    id: 1,
    title: 'Pagi yang Tenang',
    date: '2025-10-06',
    preview: 'Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...',
    moodImage: { uri: 'https://picsum.photos/seed/happy/80' },
    mood: 'happy', 
  },
  {
    id: 2,
    title: 'Produktif di Kampus',
    date: '2025-10-05',
    preview: 'Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...',
    moodImage: { uri: 'https://picsum.photos/seed/focus/80' },
    mood: 'focus',
  },
  {
    id: 3,
    title: 'Senja di Taman',
    date: '2025-10-04',
    preview: 'Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...',
    moodImage: { uri: 'https://picsum.photos/seed/calm/80' },
    mood: 'calm',
  },
  {
    id: 4,
    title: 'Nugas Web di Kampus',
    date: '2025-10-07',
    preview: 'Melanjutkan proyek aplikasi pengembalian buku dan kalkulasi denda. Agak pusing di bagian logika tanggalnya.',
    // URL diperbaiki agar gambar tidak kosong
    moodImage: { uri: 'https://picsum.photos/id/237/80/80' }, 
    mood: 'tired',
  },
  {
    id: 5,
    title: 'Debugging Berhasil!',
    date: '2025-10-08',
    preview: 'Akhirnya nemu penyebab error di terminal Expo gara-gara typo nama package. Lega banget!',
    // Menggunakan gambar lokal yang Anda miliki
    moodImage: require('../../assets/moods/lega.png'), 
    mood: 'relieved',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Buku Harian</Text>
        <Image 
          // URL Avatar diperbarui ke URL yang lebih stabil (Sanji)
          source={{ uri: 'https://i.imgur.com/G36m2dJ.jpeg' }} 
          style={styles.avatar} 
        />
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodImage={entry.moodImage} 
          mood={entry.mood} 
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    padding: 16,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '700',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: '#e5e7eb',
  }
});