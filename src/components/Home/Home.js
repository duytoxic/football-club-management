import React from 'react'
import Content from "./Content";
import "./Home.scss";

function Home() {
    return (
        <div>
            <Content />
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        Div 1
                    </div>
                    <div className="col-lg-4">
                        Div 2
                    </div>
                    <div className="col-lg-4">
                        Div 3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
