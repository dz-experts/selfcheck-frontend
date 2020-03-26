import api_base from './_base'

const api_questions = {
  get: () => (
    api_base().get('/questions/')
  ),
  post: (body) => (
    api_base().post('/questions/', body)
  )
}

export default api_questions
