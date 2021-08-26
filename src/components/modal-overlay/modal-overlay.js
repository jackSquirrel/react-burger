import React from 'react';

import styles from './modal-overlay.module.css';

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

export default ModalOverlay;