import React from 'react'
import { Dialog } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleModal } from '../../features/feedbackSlice'

const FeedbackModal = () => {
    const open = useAppSelector((state) => state.feedbackModal.open)
    const dispatch = useAppDispatch();

  return (
    <Dialog open={open} onClose={()=>dispatch(toggleModal())}>
        <p>Happy</p>
        <p>Not happy</p>
    </Dialog>
  )
}

export default FeedbackModal