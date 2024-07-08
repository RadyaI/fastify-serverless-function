import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../database/firebase'

async function get() {
    let siswaData = []
    const getData = await getDocs(collection(db, 'siswa'))
    getData.forEach((siswa) => {
        const data = siswa.data()
        siswaData.push({ ...data, id: siswa.id })
    })
    return siswaData
}

async function create(data) {
    let siswaData = data
    try {
        await addDoc(collection(db, 'siswa'), siswaData)
        return { status: true }
    } catch (error) {
        console.log(error)
        return { status: false }
    }
}

export { get, create }