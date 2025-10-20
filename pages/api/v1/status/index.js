function status(request, response) {
  response.status(200).json({ status: 'eu sou aluno do curso.dev e sou acima da média' })
}

export default status