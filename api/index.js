import Fastify from 'fastify'
import multipart from 'fastify-multipart'
import 'dotenv'

import student from './routes/studentRoutes.js'

const app = Fastify({
  logger: true,
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
        <li><strong>POST</strong> <code>api.radya.fun/student</code> - Menambahkan data siswa baru</li>
        <li><strong>PUT</strong> <code>api.radya.fun/student/:id</code> - Memperbarui data siswa berdasarkan ID</li>
        <li><strong>DELETE</strong> <code>api.radya.fun/student/:id</code> - Menghapus data siswa berdasarkan ID</li>
    </ul>
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
