import { get, create, update, remove, getDetail } from "../service/studentService"

async function getStudent(req, reply) {
    const siswaData = await get()
    reply.send(siswaData)
}

async function getStudentDetail(req, reply) {
    try {
        const id = req.params.id
        const send = await getDetail(id)
        reply.send(send)
    } catch (error) {
        reply.send({
            status: false,
            errorLocation: 'Controller',
            msg: error
        })
    }
}

async function createStudent(req, reply) {
    const data = req.body
    const result = await create(data)
    reply.send(result)

}

async function updateStudent(req, reply) {
    try {
        const id = req.params.id
        const data = req.body
        const send = await update(id, data)
        reply.send({ send })
    } catch (err) {
        console.log(err)
        reply.send({
            error: 'Controller',
            msg: err
        })
    }
}

async function deleteStudent(req, reply) {
    try {
        const id = req.params.id
        const send = await remove(id)

        reply.send(send)
    } catch (error) {
        reply.send({
            error: 'Controller',
            msg: error
        })
    }
}

export { getStudent, getStudentDetail, createStudent, updateStudent, deleteStudent }