import { get, create } from "../service/studentService"

async function getStudent(req, reply) {
    const siswaData = await get()
    reply.send(siswaData)
}

async function createStudent(req, reply) {
    const data = req.body
    const result = await create(data)
    reply.send(result)
    
}

export { getStudent, createStudent }