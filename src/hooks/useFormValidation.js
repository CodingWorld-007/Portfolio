// Custom hook for form validation with animated feedback
export const useFormValidation = () => {
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateField = (name, value) => {
    const errors = {}

    if (name === 'email' || !name) {
      if (!value.email) {
        errors.email = 'Email is required'
      } else if (!validateEmail(value.email)) {
        errors.email = 'Please enter a valid email address'
      } else {
        errors.email = ''
      }
    }

    if (name === 'name' || !name) {
      if (!value.name) {
        errors.name = 'Name is required'
      } else if (value.name.length < 2) {
        errors.name = 'Name must be at least 2 characters'
      } else {
        errors.name = ''
      }
    }

    if (name === 'message' || !name) {
      if (!value.message) {
        errors.message = 'Message is required'
      } else if (value.message.length < 10) {
        errors.message = 'Message must be at least 10 characters'
      } else {
        errors.message = ''
      }
    }

    return errors
  }

  const isFormValid = (values, errors) => {
    return (
      values.name &&
      values.email &&
      values.message &&
      !errors.name &&
      !errors.email &&
      !errors.message
    )
  }

  const getFieldStatus = (fieldName, errors) => {
    if (!errors[fieldName]) return 'valid'
    if (errors[fieldName]) return 'invalid'
    return 'idle'
  }

  return {
    validateEmail,
    validateField,
    isFormValid,
    getFieldStatus,
  }
}

export default useFormValidation
