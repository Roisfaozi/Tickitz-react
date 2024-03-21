import { useState } from 'react'
import { Link } from 'react-router-dom'
import background from '../assets/background.png'
import logo from '../assets/tickitz 1.png'
import AuthForn from '../components/organism/AuthForn'
import Steps from '../components/organism/Steps'
import { LoginHeader } from './AuthPages'

const AuthPages = ({ authAction }) => {
  const bgUrl = `url(${background})`
  const [currentStep, setCurrentStep] = useState(1)
  const NUMBER_OF_STEPS = 3

  // State for form input values
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  // State for handling loading state during API request
  const [loading, setLoading] = useState(false)

  // Handler for updating form input values
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Perform API request based on authAction (login/register)
    try {
      if (authAction === 'login') {
        // Make login API request using formData
        const response = await fetch('login_api_endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        // Handle response accordingly
      } else if (authAction === 'register') {
        // Make register API request using formData
        const response = await fetch('register_api_endpoint', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        // Handle response accordingly
      }
    } catch (error) {
      console.error('Error occurred:', error)
      // Handle error accordingly
    }
    setLoading(false)
  }

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1))
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1))

  return (
    <div
      className='w-full h-screen bg-no-repeat bg-cover bg-center '
      style={{ backgroundImage: bgUrl }}>
      <div className='flex flex-col items-center relative top-[90px]'>
        <div className='logo'>
          <Link to='/' rel='noopener noreferrer'>
            <img src={logo} alt='Tickitz' />
          </Link>
        </div>
        <div className='bg-white rounded-md py-7 px-16 w-full max-w-lg'>
          {authAction === 'register' ? (
            <Steps currentStep={currentStep} stepTotal={NUMBER_OF_STEPS} />
          ) : (
            <LoginHeader />
          )}
          <AuthForn
            authAction={authAction}
            formData={formData}
            loading={loading}
            onInputChange={handleInputChange}
            onSubmit={handleSubmit}
          />
          {/* Rest of the component */}
        </div>
      </div>
    </div>
  )
}

export default AuthPages
