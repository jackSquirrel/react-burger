import React from 'react';
import PropTypes from 'prop-types';

import styles from './app-header-item.module.css';

// Кликабельный элемент в header'е
function HeaderItem(props) {
    return (
        <a href={ props.link } className={ styles.link }>
            <div style={{ display: 'flex' }} className="pt-4 pb-4 pr-5 pl-5">
                { props.children }
                <p className={`${ props.textClasses } ml-2`}>{ props.text }</p>
            </div>
        </a>
    )
}

// PropTypes компонента
HeaderItem.propTypes = {
    link: PropTypes.string.isRequired,
    textClasses: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.element
}

export default HeaderItem;