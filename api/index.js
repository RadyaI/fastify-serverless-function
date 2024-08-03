import Fastify from 'fastify'
import multipart from 'fastify-multipart'
import cors from 'fastify-cors'
import 'dotenv'

import student from './routes/studentRoutes.js'

const app = Fastify({
    logger: true,
})

app.register(cors, {
    origin: '*'
})
app.register(multipart)

app.register(student, ({ prefix: '/student' }))

app.get('/', async (req, reply) => {
    return reply.status(200).type('text/html').send(html)
})

export default async function handler(req, reply) {
    await app.ready()
    app.server.emit('request', req, reply)
}

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
    />
    <title>API untuk Latihan</title>
    <meta name="description" content="API ini untuk latihan CRUD Student/Siswa menggunakan Fastify.">
</head>
<body>
    <h1>API untuk Latihan</h1>
    <p>
        Ini API cuma buat belajar/ngetes aja sih, isinya CRUD siswa/student gitu.
    </p>
    <h2>List API</h2>
    <ul>
        <li><strong>GET</strong> <code>api.radya.fun/student</code> - Mengambil daftar semua siswa</li>
        <li><strong>GET</strong> <code>api.radya.fun/student/:id</code> - Mengambil siswa berdasarkan ID</li>
        <li><strong>POST</strong> <code>api.radya.fun/student</code> - Menambahkan data siswa baru</li>
        <li><strong>PUT</strong> <code>api.radya.fun/student/:id</code> - Memperbarui data siswa berdasarkan ID</li>
        <li><strong>DELETE</strong> <code>api.radya.fun/student/:id</code> - Menghapus data siswa berdasarkan ID</li>
    </ul>
    <h2>Detail Endpoint</h2>
    <h3>GET <code>api.radya.fun/student</code></h3>
    <p>Endpoint ini digunakan untuk mendapatkan semua data siswa.</p>
    <h3>GET <code>api.radya.fun/student/:id</code></h3>
    <p>Endpoint ini digunakan untuk mendapatkan siswa berdasarkan ID.</p>
    <h3>POST <code>api.radya.fun/student</code></h3>
    <p>Endpoint ini digunakan untuk menambahkan data siswa baru. Data yang perlu dikirim dalam request body adalah sebagai berikut:</p>
    <ul>
        <li><code>nama_siswa</code> (string) - Nama siswa</li>
        <li><code>kelas</code> (string) - Kelas siswa</li>
        <li><code>gender</code> (string) - Jenis kelamin siswa</li>
        <li><code>time</code> (string) - Waktu pendaftaran</li>
        <li><code>foto_url</code> (string) - URL atau file foto siswa</li>
    </ul>
    <h3>PUT <code>api.radya.fun/student/:id</code></h3>
    <p>Endpoint ini digunakan untuk memperbarui data siswa berdasarkan ID. Data yang dikirim bisa mencakup semua <span style="font-weight:bolder;" >atau hanya beberapa data yang ingin di-update</span>. Data yang dapat di-update adalah sebagai berikut:</p>
    <ul>
        <li><code>nama_siswa</code> (string) - Nama siswa</li>
        <li><code>kelas</code> (string) - Kelas siswa</li>
        <li><code>gender</code> (string) - Jenis kelamin siswa</li>
        <li><code>time</code> (string) - Waktu pendaftaran</li>
        <li><code>foto_url</code> (string) - URL atau file foto siswa</li>
    </ul>
    <h3>DELETE <code>api.radya.fun/student/:id</code></h3>
    <p>Endpoint ini digunakan untuk menghapus siswa menggunakan ID.</p>
    <h2>Contoh Penggunaan Fetch API</h2>
    <pre>
<code>
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
</code>
    </pre>
    <footer>
        <p style="text-align: center; font-size: small;">
            Made by <a href="https://radya.fun" target="_blank">Radya</a>
        </p>
    </footer>
</body>
</html>

`
