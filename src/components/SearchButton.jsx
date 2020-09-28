import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import {submit} from '../redux/modules/controls'

const SearchButton = ({className: classes}) => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()
  const search = useCallback(() => dispatch(submit(state)), [dispatch, state])

  return (
    <div
      className={`${classes}  md:text-xl text-white text-center bg-primary hover:bg-primary-dark cursor-pointer`}
      onClick={search}
    >
      Search
    </div>
  )
}

export default SearchButton
