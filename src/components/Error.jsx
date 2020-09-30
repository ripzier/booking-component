import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {closeError} from '../redux/modules/controls'

const Error = () => {
  const {errorMessage} = useSelector((state) => state.controls)
  const dispatch = useDispatch()

  const close = useCallback(() => dispatch(closeError()), [dispatch])

  return (
    (errorMessage && (
      <div
        className='fixed inset-0 z-40 w-full h-full bg-black bg-opacity-75 flex justify-center items-center'
        onClick={close}
      >
        <p className='text-white italic text-xl font-semibold cursor-pointer'>
          {errorMessage}
        </p>
      </div>
    )) ||
    null
  )
}

export default Error
