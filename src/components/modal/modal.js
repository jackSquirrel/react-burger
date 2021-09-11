import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import '@ya.praktikum/react-developer-burger-ui-components';

const modalRoot = document.getElementById('modal-root');

// ОБЕРТКА МОДАЛЬНОГО ОКНА
function Modal ({ children, onClose }) {
    return ReactDOM.createPortal(
        (<ModalOverlay onClose={ onClose } >
            <div className={`pr-10 pl-10 ${styles.modal}`}>
                <div className={ styles.close }>
                    <CloseIcon type="primary" onClick={ onClose } />
                </div>
                { children }
            </div>
        </ModalOverlay>),
        modalRoot
    )
}

// Пропсы компонента
Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired
}

export default Modal;