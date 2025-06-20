// constants/courseData.ts

export const courseData = {
  title: "Expo for React Native",
  content: [
    {
      type: "materi",
      title: "Pengenalan Expo",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Expo adalah framework dan platform untuk pengembangan aplikasi React Native yang menyederhanakan proses teknis." },
        { id: 2, description: "Dengan Expo, kamu bisa membangun aplikasi mobile tanpa menulis kode native untuk Android dan iOS." },
        { id: 3, description: "Expo menyediakan tools seperti Expo CLI dan Expo Go untuk mempermudah preview dan debugging." },
        { id: 4, description: "Expo mendukung Over-the-Air (OTA) updates untuk memperbarui aplikasi tanpa store." },
        { id: 5, description: "Sangat cocok untuk pemula dan tim kecil yang ingin fokus pada fitur aplikasi." }
      ]
    },
    {
      type: "materi",
      title: "Instalasi dan Setup Expo CLI",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Instalasi Expo CLI dapat dilakukan dengan perintah `npm install -g expo-cli` atau gunakan `npx`." },
        { id: 2, description: "Pastikan Node.js dan npm/yarn sudah terinstal di sistem kamu." },
        { id: 3, description: "Buat akun Expo untuk mengakses fitur cloud build dan dashboard." },
        { id: 4, description: "Gunakan Expo Go di perangkat fisik untuk menjalankan dan menguji aplikasi dengan cepat." }
      ]
    },
    {
      type: "materi",
      title: "Membuat Proyek Expo",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Gunakan perintah `npx create-expo-app nama-aplikasi` untuk membuat proyek baru." },
        { id: 2, description: "Pilih template seperti `blank`, `with-router`, atau `with-navigation` sesuai kebutuhan." },
        { id: 3, description: "Jalankan proyek dengan `npx expo start` dan scan QR code untuk menjalankannya di Expo Go." },
        { id: 4, description: "Struktur folder yang rapi memudahkan pengelolaan file dan assets." }
      ]
    },
    {
      type: "materi",
      title: "Memahami Managed Workflow",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Managed workflow memungkinkan kamu membangun aplikasi tanpa menyentuh kode native." },
        { id: 2, description: "Konfigurasi dilakukan melalui file `app.json` atau `app.config.js`." },
        { id: 3, description: "Aset seperti gambar, font, dan video otomatis dibundling menggunakan `expo-asset`." },
        { id: 4, description: "Mendukung pembaruan aplikasi melalui OTA updates." }
      ]
    },
    {
      type: "materi",
      title: "Menggunakan Fitur Expo SDK",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Expo SDK menyediakan modul siap pakai seperti kamera, lokasi, media, dan autentikasi." },
        { id: 2, description: "Contoh modul: `expo-camera`, `expo-location`, `expo-media-library`." },
        { id: 3, description: "Instalasi mudah dengan npm/yarn tanpa konfigurasi native tambahan." },
        { id: 4, description: "Dokumentasi lengkap dan didukung oleh komunitas aktif." }
      ]
    },
    {
      type: "materi",
      title: "Build dan Publish Aplikasi",
      ilustration: "https://cdn.prod.website-files.com/5e740d74e6787687577e9b38/63978bf83d789b4602145daf_maximizing-efficiency-and-productivity-with-expo-dev-tools-2.png",
      value: [
        { id: 1, description: "Gunakan `npx expo build:android` atau `npx expo build:ios` untuk membuat APK/IPA." },
        { id: 2, description: "Gunakan `eas build` untuk build modern yang lebih fleksibel." },
        { id: 3, description: "Unduh file hasil build atau unggah langsung ke Play Store dan App Store." },
        { id: 4, description: "Monitor status build melalui dashboard Expo online." }
      ]
    },
    {
      type: "quiz",
      title: "Quiz: Pengenalan Expo",
      ilustration: null,
      value: {
        question: "Apa manfaat utama dari penggunaan Expo dalam pengembangan React Native?",
        options: [
          { value: 1, label: "Menambah kompleksitas pengembangan" },
          { value: 2, label: "Mengharuskan konfigurasi native manual" },
          { value: 3, label: "Mempermudah pengembangan tanpa konfigurasi native" },
          { value: 4, label: "Hanya untuk aplikasi iOS saja" }
        ],
        answer: 3
      }
    },
    {
      type: "quiz",
      title: "Quiz: Membuat Proyek Expo",
      ilustration: null,
      value: {
        question: "Perintah apa yang digunakan untuk membuat proyek baru dengan Expo?",
        options: [
          { value: 1, label: "expo init" },
          { value: 2, label: "npx create-expo-app" },
          { value: 3, label: "expo start" },
          { value: 4, label: "expo new project" }
        ],
        answer: 2
      }
    },
    {
      type: "quiz",
      title: "Quiz: Menjalankan Proyek Expo",
      ilustration: null,
      value: {
        question: "Apa fungsi dari perintah `npx expo start`?",
        options: [
          { value: 1, label: "Menghapus proyek" },
          { value: 2, label: "Menjalankan server pengembangan" },
          { value: 3, label: "Build aplikasi untuk production" },
          { value: 4, label: "Menginstal modul Expo" }
        ],
        answer: 2
      }
    },
    {
      type: "quiz",
      title: "Quiz: Managed Workflow",
      ilustration: null,
      value: {
        question: "Apa yang dimaksud dengan managed workflow di Expo?",
        options: [
          { value: 1, label: "Akses penuh ke kode native" },
          { value: 2, label: "Harus menggunakan Xcode dan Android Studio" },
          { value: 3, label: "Expo menangani semua konfigurasi native" },
          { value: 4, label: "Hanya bisa digunakan di Android" }
        ],
        answer: 3
      }
    },
    {
      type: "quiz",
      title: "Quiz: Expo SDK",
      ilustration: null,
      value: {
        question: "Apa itu Expo SDK?",
        options: [
          { value: 1, label: "Kumpulan tools untuk membuat website" },
          { value: 2, label: "Kumpulan API siap pakai untuk aplikasi React Native" },
          { value: 3, label: "Framework untuk aplikasi desktop" },
          { value: 4, label: "Tool pengganti React Native" }
        ],
        answer: 2
      }
    },
    {
      type: "quiz",
      title: "Quiz: Akses Kamera",
      ilustration: null,
      value: {
        question: "Modul apa yang digunakan untuk mengakses kamera dalam Expo?",
        options: [
          { value: 1, label: "expo-image" },
          { value: 2, label: "expo-camera" },
          { value: 3, label: "expo-media-library" },
          { value: 4, label: "expo-photos" }
        ],
        answer: 2
      }
    },
    {
      type: "quiz",
      title: "Quiz: Lokasi Pengguna",
      ilustration: null,
      value: {
        question: "Modul mana yang digunakan untuk mendapatkan lokasi pengguna?",
        options: [
          { value: 1, label: "expo-map" },
          { value: 2, label: "expo-geo" },
          { value: 3, label: "expo-location" },
          { value: 4, label: "expo-gps" }
        ],
        answer: 3
      }
    },
    {
      type: "quiz",
      title: "Quiz: Notifikasi di Expo",
      ilustration: null,
      value: {
        question: "Modul yang digunakan untuk mengirim notifikasi di Expo adalah?",
        options: [
          { value: 1, label: "expo-message" },
          { value: 2, label: "expo-notify" },
          { value: 3, label: "expo-notifications" },
          { value: 4, label: "expo-alert" }
        ],
        answer: 3
      }
    },
    {
      type: "quiz",
      title: "Quiz: Build App dengan Expo",
      ilustration: null,
      value: {
        question: "Perintah yang digunakan untuk membangun aplikasi Android atau iOS di Expo adalah?",
        options: [
          { value: 1, label: "expo dev" },
          { value: 2, label: "npx expo build" },
          { value: 3, label: "expo run" },
          { value: 4, label: "expo create" }
        ],
        answer: 2
      }
    },
    {
      type: "quiz",
      title: "Quiz: Over-the-Air Updates",
      ilustration: null,
      value: {
        question: "Apa keuntungan fitur Over-the-Air (OTA) updates di Expo?",
        options: [
          { value: 1, label: "Perlu persetujuan Play Store setiap update" },
          { value: 2, label: "Update aplikasi tanpa publish ulang ke store" },
          { value: 3, label: "Menghapus file yang tidak terpakai secara otomatis" },
          { value: 4, label: "Menginstal ulang Expo Go setiap kali update" }
        ],
        answer: 2
      }
    }
  ]
};
