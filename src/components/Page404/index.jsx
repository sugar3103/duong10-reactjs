import React from "react";

export default function Page404() {
    return (
        <div className="container pt-100 pb-100">
            <div className="row">
                <div className="col-xl-12">
                    <div className="breadcrumb-text text-center">
                        <h1>ERROR 404</h1>
                        <ul className="breadcrumb-menu">
                            <li><a href="index.html">Page not found</a></li>
                            <li><span>shop details</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}