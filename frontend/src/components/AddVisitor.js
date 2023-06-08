import * as React from "react";
import {request} from "../helpers/axios_helper";

export default class AddVisitor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    };

    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({[name]: value});
    };
    onSubmitAddVisitor = (e) => {
        e.preventDefault();
        request(
            "POST",
            "/addVisitor",
            {
                lastName: this.state.lastName,
                firstName: this.state.firstName,
                middleName: this.state.middleName,
            }).then(this.props.showVisitors)
    };

    render() {
        return (
            <div className="card" style={{width: "70rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Добавление посетителя:</h5>
                    <form onSubmit={this.onSubmitAddVisitor}>

                        <div className="form-outline mb-4">
                            <input type="text" id="lastName" name="lastName" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="lastName">Фамилия</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="firstName" name="firstName" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="firstName">Имя</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="middleName" name="middleName" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="middleName">Отчество</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Зарегистрировать посетителя</button>
                    </form>
                </div>
            </div>
        );
    };
}