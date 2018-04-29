import React from 'react';

import Body from '../md/body.md';

export default class Home extends React.Component {
    static async getInitialProps() {
        return { stars: 20 };
    };

    render() {
        const { stars } = this.props;
        return (
            <Body {...stars}/>
        );
    };
};