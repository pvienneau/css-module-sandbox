import React from 'react';

import { Button } from 'components/button';
import styles from './app.scss';

export default class App extends React.Component{
    render() {
        return (
            <div className={styles.app}>
                <Button>
                    Click here
                </Button>
            </div>
        );
    }
}
