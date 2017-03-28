import React from 'react';

import styles from './button.scss';

export default class Button extends React.Component{
    render() {
        return (
            <button className={styles.button}>
                {this.props.children}
            </button>
        );
    }
}
