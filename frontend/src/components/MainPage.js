import * as React from 'react';

import { request, setAuthHeader } from '../helpers/axios_helper';

export default class MainPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4">Добро пожаловать</h1>
                        <p className="lead">Выберите категорию.</p>
                        <div className="mainButts">
                        <button className="btn btn-dark" onClick={this.props.showBooks}>
                            Книги
                        </button>
                        <button className="btn btn-dark" onClick={this.props.showVisitors}>
                            Посетители
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}