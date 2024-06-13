import { useEffect, useState } from 'react'
import { Button } from '../../components/button'
import { Input, Label } from '../../components/input'
import Select from '../../components/select'
import SelectDropdown from '../../components/selectDropdown'
import useApi from '../../hooks/useAPI'

function AddMovieForm() {
  const api = useApi()
  const [genreOptions, setGenreOptions] = useState([])
  const [directorOptions, setDirectorOptions] = useState([])
  const [castOptions, setCastOptions] = useState([])
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState({
    img: 'https://www.svgrepo.com/show/522152/image-picture.svg',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)

        const [genreResponse, directorResponse, castResponse] =
          await Promise.all([
            api.get('/genres'),
            api.get('/directors'),
            api.get('/casts'),
          ])

        setGenreOptions(
          genreResponse.data.genres.map((genre) => ({
            value: genre.genre_id,
            label: genre.genre_name,
          }))
        )

        setDirectorOptions(
          directorResponse.data.directors.map((director) => ({
            value: director.id,
            label: director.name,
          }))
        )
        setCastOptions(
          castResponse.data.casts.map((cast) => ({
            value: cast.id,
            label: cast.name,
          }))
        )
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])
  console.warn('genre', genreOptions)

  // console.warn('directors', directorOptions)
  // console.warn('casts', castOptions)
  const changeHanlder = (e) => {
    const datas = { ...data }
    datas[e.target.name] = e.target.value
    setData(datas)
  }

  const fileHandler = (event) => {
    const file = event.target.files[0]

    if (file) {
      const tmpdata = { ...data }
      tmpdata['image'] = file

      let reader = new FileReader()
      reader.onload = () => {
        tmpdata['img'] = reader.result
        setData(tmpdata)
      }
      reader.onerror = (error) => {
        console.error('Error reading the file:', error)
      }

      reader.readAsDataURL(file)
    } else {
      console.log('No file selected or file is not valid.')
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()

    const formData = new FormData()
    for (const key in data) {
      formData.append(`${key}`, data[key])
    }

    api({
      method: 'POST',
      url: '/movies',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    })
      .then((_) => {
        navigate('/')
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const dateOpt = ['12 April 2022', '13 April 2022', '14 April 2022']
  return (
    <section className='w-full m-auto rounded-lg shadow-sm bg-white px-14 pt-14 pb-20 max-w-3xl '>
      <div className='flex flex-col md:flex-row justify-beteween items-center w-full mb-12 gap-3'>
        <div className='flex  justify-beteween items-center w-full'>
          <h1 className='md:text-3xl text-lg md:font-bold font-semibold w-full'>
            Add New Movie
          </h1>
        </div>
      </div>
      <form
        onSubmit={submitHandler}
        className='flex flex-col w-full items-start gap-6'>
        <div className='w-[20%] '>
          <div className='flex items-center justify-center w-full'>
            <label
              htmlFor='file-upload'
              className='flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
              <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                <svg
                  className='w-8 h-8 mb-4 text-gray-500 dark:text-gray-400'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 16'>
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2'
                  />
                </svg>
                <p className='mb-2 text-sm text-center text-gray-500 dark:text-gray-400'>
                  <span className='font-semibold'>Click to upload</span> or drag
                  and drop
                </p>
                <p className='text-xs text-center text-gray-500 dark:text-gray-400'>
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id='file-upload'
                name='file-upload'
                type='file'
                className='hidden'
                onChange={fileHandler}
              />
            </label>
          </div>
          <Button className='mt-3 w-full'>Upload</Button>
        </div>

        <div className='w-full h-auto'>
          <Label for='title' className='text-titleInfo font-normal'>
            Movie Name
          </Label>
          <Input
            id='title'
            type='title'
            name='title'
            placeholder='title'
            onChange={changeHanlder}
            className='my-3 h-16 pl-6 bg-gray-50 '
            required
          />
        </div>
        <div className='w-full h-auto'>
          <Label for='genre' className='text-titleInfo font-normal'>
            Category
          </Label>
          <Input
            id='genre'
            type='genre'
            name='genre'
            placeholder='genre'
            onChange={changeHanlder}
            className='my-3 h-16 pl-6 bg-gray-50 '
            required
          />
        </div>
        <div className='flex w-full md:flex-row flex-col justify-between gap-5'>
          <div className='relative w-full h-auto '>
            <Label for='release_date' className='text-titleInfo font-normal'>
              Release date:
            </Label>
            <Input
              id='release_date'
              type='release_date'
              name='release_date'
              onChange={changeHanlder}
              placeholder='date'
              className='my-3 h-16 pr-5 pl-10 bg-gray-50 '
              required
            />
          </div>
          <div className='relative w-full h-auto'>
            <Label for='duration' className='text-titleInfo font-normal'>
              Duration
            </Label>
            <Input
              id='duration'
              type='duration'
              name='duration'
              onChange={changeHanlder}
              placeholder='minutes'
              className='my-3 h-16  pr-5 pl-10 bg-gray-50 '
              required
            />
          </div>
        </div>
        <div className='w-full h-auto'>
          <Label for='director' className='text-titleInfo font-normal'>
            Director Name
          </Label>
          <SelectDropdown />
          <Select
            name='genre'
            value={data.genre}
            options={genreOptions}
            variant='silver'
            text='lg'
            onChange={(value) =>
              setData((prevData) => ({ ...prevData, genre: value }))
            }
            placeholder='Select Genre'
            className='my-3 h-16 pl-6 bg-gray-50'
            required
          />
        </div>
        <div className='w-full h-auto'>
          <Label for='casts' className='text-titleInfo font-normal'>
            Cast
          </Label>
          <Input
            id='casts'
            type='casts'
            name='casts'
            placeholder='Director'
            onChange={changeHanlder}
            className='my-3 h-16 pl-6 bg-gray-50 '
            required
          />
        </div>
        <div className='w-full h-auto'>
          <Label for='synopsis' className='text-titleInfo font-normal'>
            Synopis
          </Label>
          <textarea
            id='synopsis'
            name='synopsis'
            onChange={changeHanlder}
            rows='4'
            className='block p-2.5 w-full text-base text-titleInfo my-3 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='Write your thoughts here...'></textarea>
        </div>
        <div className='w-full h-auto'>
          <Label for='location' className='text-titleInfo font-normal'>
            Add Location
          </Label>
          <Input
            id='location'
            type='location'
            placeholder='Location'
            className='my-3 h-16 pl-6 bg-gray-50 '
          />
        </div>

        <div className='w-[20%] '>
          <div className='w-full h-auto'>
            <Label for='location' className='text-titleInfo font-normal'>
              Select A Date
            </Label>
            {/* <div className='w-full mx-auto'>
              <Select
                options={dateOpt}
                variant='silver'
                text='lg'
                optionWeight='medium'
                value='Select Time'
                className='md:w-52 w-full my-3'
                icon={
                  <svg
                    width='24'
                    height='23'
                    viewBox='0 0 24 23'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M19 8.85303L12.0368 14.997L5.07366 8.85303'
                      stroke='#A0A3BD'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                }
                iconLeft={
                  <svg
                    width='18'
                    height='18'
                    viewBox='0 0 18 18'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M14.25 3H3.75C2.92157 3 2.25 3.67157 2.25 4.5V15C2.25 15.8284 2.92157 16.5 3.75 16.5H14.25C15.0784 16.5 15.75 15.8284 15.75 15V4.5C15.75 3.67157 15.0784 3 14.25 3Z'
                      stroke='#4E4B66'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 1.5V4.5'
                      stroke='#4E4B66'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M6 1.5V4.5'
                      stroke='#4E4B66'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M2.25 7.5H15.75'
                      stroke='#4E4B66'
                      strokeWidth='1.66667'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                }
              />
            </div> */}
          </div>
          <div className='flex justify-start items-center gap-8'>
            <Button
              size='sm'
              variant='outline'
              onClick={() => console.log('btn Add')}>
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M9 0.5625C9.24864 0.5625 9.4871 0.661272 9.66291 0.837088C9.83873 1.0129 9.9375 1.25136 9.9375 1.5V9C9.9375 9.24864 9.83873 9.4871 9.66291 9.66291C9.4871 9.83873 9.24864 9.9375 9 9.9375H1.5C1.25136 9.9375 1.0129 9.83873 0.837088 9.66291C0.661272 9.4871 0.5625 9.24864 0.5625 9C0.5625 8.75136 0.661272 8.5129 0.837088 8.33709C1.0129 8.16127 1.25136 8.0625 1.5 8.0625H8.0625V1.5C8.0625 1.25136 8.16127 1.0129 8.33709 0.837088C8.5129 0.661272 8.75136 0.5625 9 0.5625Z'
                  fill='#5F2EEA'
                />
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M8.0625 9C8.0625 8.75136 8.16127 8.5129 8.33709 8.33709C8.5129 8.16127 8.75136 8.0625 9 8.0625H16.5C16.7486 8.0625 16.9871 8.16127 17.1629 8.33709C17.3387 8.5129 17.4375 8.75136 17.4375 9C17.4375 9.24864 17.3387 9.4871 17.1629 9.66291C16.9871 9.83873 16.7486 9.9375 16.5 9.9375H9.9375V16.5C9.9375 16.7486 9.83873 16.9871 9.66291 17.1629C9.4871 17.3387 9.24864 17.4375 9 17.4375C8.75136 17.4375 8.5129 17.3387 8.33709 17.1629C8.16127 16.9871 8.0625 16.7486 8.0625 16.5V9Z'
                  fill='#5F2EEA'
                />
              </svg>
            </Button>

            <p className='text-sm text-center text-titleInfo font-medium'>
              08:30am
            </p>
            <p className='text-sm text-center text-titleInfo font-medium'>
              10:30pm
            </p>
          </div>
        </div>
        <Button
          type='submit'
          size='lg'
          className='w-full shadow-md shadow-primary/80'>
          Save Movie
        </Button>
      </form>
    </section>
  )
}
export default AddMovieForm
