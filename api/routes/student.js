import { getStudent } from "../controllers/studentController"

export default async function (fastify, opts) {
    fastify.get('/', getStudent)
}