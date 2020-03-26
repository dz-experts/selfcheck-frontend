import api_base from './_base'

const api_questions = {
  get: () => (
    api_base().get('/questions/')
  ),
  post: (answers) => (
    api_base().post('/questions/', answers)
  )
}

export default api_questions
