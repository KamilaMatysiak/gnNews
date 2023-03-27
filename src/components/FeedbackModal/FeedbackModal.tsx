import React from 'react'
import { Dialog } from '@mui/material'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { toggleModal } from '../../features/feedbackSlice'
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next'
import './FeedbackModal.scss'

const FeedbackModal = () => {
    const open = useAppSelector((state) => state.feedbackModal.open)
    const lightMode = useAppSelector((state) => state.lightMode.mode)
    const {t, i18n} = useTranslation()
    const dispatch = useAppDispatch();

  return (
    <Dialog open={open} onClose={()=>dispatch(toggleModal())} className="modal">
        <div className={`modal__header modal__header${lightMode === "dark" && '--dark'}`}>
            <h1 className='modal__title'>Feedback</h1>
            <CloseIcon className='modal__icon' onClick={()=>dispatch(toggleModal())}/>
        </div>
        <div className={`modal__content modal__content${lightMode === "dark" && '--dark'}`}>
            <div className='likes-container'>
                <h1 className='likes-container__header'>{t('easy')}</h1>
                <ul className='likes-container__list'>
                    <li className='likes-container__feedback'>{t('design')}</li>
                    <li className='likes-container__feedback'>{t('implement')}</li>
                </ul>
            </div>
            <div className='dislikes-container'>
                <h1 className='dislikes-container__header'>{t('hard')}</h1>
                <ul className='dislikes-container__list'>
                    <li className='dislikes-container__feedback'>{t('redux')}</li>
                    <li className='dislikes-container__feedback'>{t('test')}</li>
                </ul>
            </div>
        </div>
    </Dialog>
  )
}

export default FeedbackModal