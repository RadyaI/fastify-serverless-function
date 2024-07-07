# API untuk Latihan

API ini dibuat untuk keperluan belajar saja. API ini menyediakan operasi CRUD (Create, Read, Update, Delete) untuk entitas student/siswa.

## List API

- **GET** `api.radya.fun/student` - Mengambil daftar semua siswa
- **POST** `api.radya.fun/student` - Menambahkan data siswa baru
- **PUT** `api.radya.fun/student/:id` - Memperbarui data siswa berdasarkan ID
- **DELETE** `api.radya.fun/student/:id` - Menghapus data siswa berdasarkan ID

## Contoh Penggunaan Fetch API

```javascript
async function fetchStudents() {
    try {
        const response = await fetch('https://api.radya.fun/student');
        const students = await response.json();
        console.log(students);
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

fetchStudents();
```

Made by [Radya](https://radya.fun)