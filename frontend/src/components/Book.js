import * as React from "react";
import {request, setAuthHeader} from "../helpers/axios_helper";
import data from "bootstrap/js/src/dom/data";

export default class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            visitor: [],
            visitors: [],
        }
    };
    componentDidMount() {
        request(
            "GET",
            "/getBook/"+this.props.book_id,
            {}).then(
            (response) => {
                this.setState({data: response.data})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }
            }
        );
        request(
            "GET",
            "/getVisitors",
            {}).then(
            (response) => {
                this.setState({visitors: response.data})
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }
            }
        );
        request(
            "GET",
            "/getBookVisitor/"+this.props.book_id,
            {}).then(
            (response) => {
                this.setState({visitor: response.data})
                console.log(this.state.visitor)
            }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }
            }
        );
    };

    releaseBook = (id) => {
        request("GET", "releaseBook/" + id, {});


        this.setState({visitor: []})
    }

    assignBook = (idBook, idVisitor) => {
        request("POST", "assignBook", {idBook: idBook, idVisitor:idVisitor})
            .then(
                (response) => {
                    this.setState({visitor: response.data})
                    console.log(this.state.visitor)
                }).catch(
            (error) => {
                if (error.response.status === 401) {
                    setAuthHeader(null);
                } else {
                    this.setState({data: error.response.code})
                }
            }
            );


    }

    handleUserChange = (event) => {
        const selectedUser = event.target.value;
        this.setState((prevState) => ({
            selectedUser: selectedUser
        }));
    }
    render() {
        return (
            <div className="card" style={{width: "70rem"}}>
                <div className="card-body">
                    <h5 className="card-title">Книга : {this.state.data.title}, {this.state.data.author}, {this.state.data.year} </h5>
                    {this.state.visitor.length ===0 ?
                        (<div><div>Эта книга сейчас свободна.</div>
                            <select value={this.state.selectedUser} onChange={this.handleUserChange}>
                                <option value="">Выберите пользователя</option>
                                {this.state.visitors.map(v => (
                                    <option key={v.id} value={v.id}>{v.lastName} {v.firstName} {v.middleName}</option>
                                ))}
                            </select>
                            <input type="submit" value="Назначить книгу" onClick={()=> this.assignBook(this.props.book_id, this.state.selectedUser)}/>
                        </div>) :
                        (<span>Книга сейчас у: {this.state.visitor.lastName}  {this.state.visitor.firstName} {this.state.visitor.middleName}
                            <input type="submit" value="Освободить книгу" onClick={() => this.releaseBook(this.state.data.id)} />
                        </span>)
                    }
                </div>
            </div>
        );
    };
}