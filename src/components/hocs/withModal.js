import React from 'react';
import ReactDOM from 'react-dom';

import styles from './withModal.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modal-root');

const withModal = ({handleModalClose, ...props}) => WrappedComponent => function() {
    return ReactDOM.createPortal(
        (<ModalOverlay onClose={ handleModalClose } >
            <div className={`pr-10 pl-10 ${styles.modal}`}>
                <div className={ styles.close }>
                    <CloseIcon type="primary" onClick={ handleModalClose } />
                </div>
                <WrappedComponent {...props}/>
            </div>
        </ModalOverlay>),
        modalRoot
    )
}

export default withModal;