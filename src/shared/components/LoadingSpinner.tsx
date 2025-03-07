import { FiRefreshCcw } from 'react-icons/fi'

export const LoadingSpinner = () => {
  return (
    <div className='loading'>
      <div className='justify-center items-center flex w-full h-52'>
        <FiRefreshCcw size={40} className='animate-spin' />
      </div>
    </div>
  )
}
