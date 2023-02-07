import './modal.scss'
import {useEffect, useState} from "react";

interface IProps {
    closable ?: boolean,
    title ?: string,
    transitionTime ?: string,
    children: any,
    btnContent ?: string,
    isOpen ?: boolean
}

export default function Modal({ title, transitionTime = '0', children, closable, btnContent, isOpen}: IProps) {

    let [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    useEffect(() => {
        if(isOpen) setIsModalOpen(isOpen)
    }, [isOpen])


    return (
        <>
            {btnContent && <button onClick={() => setIsModalOpen(true)}>{btnContent}</button>}
            <div className='background' style={{transition: `opacity` + transitionTime}} data-open={isModalOpen} onClick={() => setIsModalOpen(false)}>
                <div onClick={e => e.stopPropagation()} className={isModalOpen ? 'modal-open modal' : 'modal'}>
                    <div className="modal-close" onClick={close} />
                    <div className="modal-head">
                        {title && <div className='modal-title'>{title}</div> }
                    </div>
                    <div className="modal-content">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}
