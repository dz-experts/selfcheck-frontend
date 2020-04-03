import api_base from './_base'

const api_questions = {
  get: () => (
    api_base().get('/public/questions/')
  ),
  post: (answers) => (
    api_base().post('/patients/symptoms/', answers)
  )
}

export default api_questions
