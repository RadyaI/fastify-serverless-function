function getStudent(req, reply) {
    reply.send(
        [
            {
                nama: "Muhammad",
                sekolah: "SMK Telkom Malang"
            },
            {
                nama: "Radya",
                sekolah: "SMk Telkom Bandung"
            }
        ]
    )
}

export { getStudent }