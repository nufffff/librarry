import * as React from "react";
import {request, setAuthHeader} from "../helpers/axios_helper";

export default class AddBook extends React.Component {
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
    onSubmitAddBook = (e) => {
        e.preventDefault();
        request(
            "POST",
            "/addBook",
            {
                title: this.state.title,
                author: this.state.author,
                year: this.state.year,
            }).then(this.props.showBooks)
    };

    render() {
        return (
            <div className="card" style={{width: "70rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Добавление книги:</h5>
                    <form onSubmit={this.onSubmitAddBook}>

                        <div className="form-outline mb-4">
                            <input type="text" id="title" name="title" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="title">Название</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="author" name="author" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="author">Автор</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="number" id="year" name="year" className="form-control"
                                   onChange={this.onChangeHandler}/>
                            <label className="form-label" htmlFor="year">Год выпуска</label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Добавить книгу</button>
                    </form>
                </div>
            </div>
        );
    };
}