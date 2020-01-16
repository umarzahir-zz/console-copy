import React, {Component} from "react";
import { Link } from "react-router-dom";
export default class Navigation extends Component {
    render(){
        return(
            <div className="side-menu">
                <ul className="side-menu-list">
                    <li className="side-menu-item">
                        <Link to="">manage admin</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">manage agency</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">profile</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">dashboard</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">manage opportunity</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">manage volunteer</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">manage skills</Link>
                    </li>
                    <li className="side-menu-item">
                        <Link to="">manage tasks</Link>
                    </li>
                </ul>
            </div>
        )
    }
}