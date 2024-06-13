import React, { useEffect, useState } from 'react'
import useApi from '../hooks/useAPI'

const HashtagInput = () => {
  const [hashtags, setHashtags] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const api = useApi()
  useEffect(() => {
    // Load hashtags from server
    api
      .get('/casts')
      .then((response) => {
        setSuggestions(response.data.casts)
      })
      .catch((error) => {
        console.error('Error fetching hashtags:', error)
      })
  }, [])

  const handleChange = (e) => {
    setInputValue(e.target.value)
    // Split hashtags by comma and trim spaces
    const inputHashtags = e.target.value.split(',').map((tag) => tag.trim())
    setHashtags(inputHashtags)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault()
      // Clear input value
      setInputValue('')
    }
  }

  const handleSubmit = () => {
    // Send hashtags to server
    console.log('Sending hashtags:', hashtags)
    // Clear input value after submission
    setInputValue('')
  }

  const handleSuggestionClick = (name) => {
    setInputValue(inputValue + (inputValue ? ', ' : '') + name)
  }

  return (
    <div className='flex flex-col'>
      <input
        type='text'
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder='Type hashtags...'
        className='border border-gray-300 p-2 rounded-md mb-2'
      />
      {suggestions.length > 0 && inputValue && !inputValue.includes(',') && (
        <ul className='border border-gray-300 rounded-md max-h-40 overflow-y-auto'>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion.name)}
              className='p-2 cursor-pointer hover:bg-gray-100'>
              {suggestion.name}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleSubmit}
        className='bg-blue-500 text-white py-2 px-4 rounded-md'>
        Submit
      </button>
    </div>
  )
}

export default HashtagInput
