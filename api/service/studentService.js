import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
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

async function getDetail(id) {
    try {
        const data = await getDoc(doc(db, 'siswa', id))
        return ({
            status: true,
            result: data.data(),
        })
    } catch (error) {
        return ({
            status: false,
            errorLocation: "Service",
            msg: {error}
        })
    }
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

async function update(id, data) {
    try {
        const newData = data
        const targetDoc = doc(db, 'siswa', id)
        await updateDoc(targetDoc, newData)
        return (
            {
                id: id,
                status: true,
                data: newData
            }
        )
    } catch (error) {
        console.log(error)
        return (
            {
                error: 'Service',
                status: false,
                msg: error
            }
        )
    }
}

async function remove(id) {
    try {
        const targetDoc = doc(db, 'siswa', id)
        await deleteDoc(targetDoc)

        return ({
            status: true,
            msg: `Berhasil hapus siswa dengan id = ${id}`
        })
    } catch (error) {
        return {
            error: 'Service',
            error
        }
    }
}

export { get, getDetail, create, update, remove }