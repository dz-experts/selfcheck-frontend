import api_base from './_base'

const api_questions = {
  get: () => (
    api_base().get('/questions/')
  )
}

export default api_questions
