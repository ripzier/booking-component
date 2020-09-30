import React, {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {unfocus} from '../redux/modules/controls'

const Backdrop = () => {
  const controls = useSelector((state) => state.controls)
  const dispatch = useDispatch()

  const classes = controls.focusedInput ? 'backdrop' : 'hidden'

  const hide = useCallback(() => dispatch(unfocus()), [dispatch])

  return <div className={classes} onClick={hide} />
}

export default Backdrop
