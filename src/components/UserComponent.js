import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount() {
        UserService.getUsers().then(response => {
            this.setState({users : response.data})
        });
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Users List</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>User Id</tr>
                        <tr>User First Name</tr>
                        <tr>User Last Name</tr>
                        <tr>User Email Id</tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                <tr key = {user.id}>
                                    <td> {user.id} </td>
                                    <td> {user.firstName} </td>
                                    <td> {user.lastName} </td>
                                    <td> {user.emailId} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;