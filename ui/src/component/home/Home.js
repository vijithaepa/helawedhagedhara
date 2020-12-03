import React, {Component} from 'react'
import NavBar from "../../common/component/NavBar";
import Banner from "./Banner";

class Home extends Component {

    render() {
        return (
            <div className="container p-3 my-3 border">

                <NavBar />
                <Banner />

            </div>
        );
    }
}

export default Home
