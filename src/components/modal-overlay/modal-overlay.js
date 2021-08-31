import React from 'react';
import PropTypes from 'prop-types';

import styles from './modal-overlay.module.css';

// Компонент с подложкой для модального окна (затеменяет фон)
function ModalOverlay({ children, onClose }) {
    function onOverlayClose(e) {
        if (e.target === e.currentTarget) onClose();
    }

    function onKeyClose(e) {
        if (e.keyCode === 27) onClose();
    }

    React.useEffect(() => {
        document.addEventListener("keydown", onKeyClose);
        return () => {
            document.removeEventListener("keydown", onKeyClose);
        }
    })

    return (
        <div className={ styles.modal__overlay } onClick={ onOverlayClose }>
            { children }
        </div>
    )
}

// Пропсы компонента
ModalOverlay.propTypes = {
    children: PropTypes.element.isRequired,
    onClose: PropTypes.func.isRequired
}

export default ModalOverlay;