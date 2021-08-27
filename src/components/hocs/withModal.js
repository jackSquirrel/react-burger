import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import styles from './withModal.module.css';
import '@ya.praktikum/react-developer-burger-ui-components';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot = document.getElementById('modal-root');

// Обертка модального окна
const withModal = ({ handleModalToggle, ...props }) => WrappedComponent => function() {
    return ReactDOM.createPortal(
        (<ModalOverlay onClose={ handleModalToggle } >
            <div className={`pr-10 pl-10 ${styles.modal}`}>
                <div className={ styles.close }>
                    <CloseIcon type="primary" onClick={ handleModalToggle } />
                </div>
                <WrappedComponent { ...props } />
            </div>
        </ModalOverlay>),
        modalRoot
    )
}

// Пропсы компонента
withModal.propTypes = {
    handleModalClose: PropTypes.func.isRequired
}

export default withModal;