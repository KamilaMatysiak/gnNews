import React from 'react'
import { Dialog } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleModal } from '../../features/feedbackSlice'
import CloseIcon from '@mui/icons-material/Close';
import './FeedbackModal.scss'

const FeedbackModal = () => {
    const open = useAppSelector((state) => state.feedbackModal.open)
    const lightMode = useAppSelector((state) => state.lightMode.mode)
    const dispatch = useAppDispatch();


  return (
    <Dialog open={open} onClose={()=>dispatch(toggleModal())} className="modal">
        <div className={`modal__header modal__header${lightMode === "dark" && '--dark'}`}>
            <h1 className='modal__title'>Feedback</h1>
            <CloseIcon className='modal__icon' onClick={()=>dispatch(toggleModal())}/>
        </div>
        <div className={`modal__content modal__content${lightMode === "dark" && '--dark'}`}>
            <div className='likes-container'>
                <h1 className='likes-container__header'>Easy</h1>
                <ul className='likes-container__list'>
                    <li className='likes-container__feedback'>Designin an app</li>
                    <li className='likes-container__feedback'>Implementing the UI</li>
                </ul>
            </div>
            <div className='dislikes-container'>
                <h1 className='dislikes-container__header'>Hard</h1>
                <ul className='dislikes-container__list'>
                    <li className='dislikes-container__feedback'>Figuring out how does Redux work in Typescript <i>(usually I use Javascript)</i></li>
                    <li className='dislikes-container__feedback'>Testing</li>
                </ul>
            </div>
        </div>
    </Dialog>
  )
}

export default FeedbackModal