import React from 'react'

function forecast() {
    return (
        <div>
            <section  class="bgcolor">
                <div className="container-fluid">
                    <div className="row p-2 ">
                        <div className="col d-flex align-items-center justify-content-between gap-3 head-block ">
                            <div className="d-flex align-items-center gap-3">
                                <img src="images/adlogo.png" alt="" />
                                <p>Demand Forecasting</p>
                            </div>

                            <div className="logoutbtn d-flex flex-column align-items-center">
                                <img src="images/logout.png" alt="" />
                                <a href="">Log Out</a>
                            </div>
                        </div>
                    </div>
                    <div className="row  ">
                        <nav className="p-0 ">
                            <div className="nav nav-tabs navtable" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Forecast</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>

                            </div>
                        </nav>
                        <div className="tab-content content-tbl" id="nav-tabContent">
                            <div className="tab-pane fade show active pt-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                                <div className="row bg-color-forecast ">
                                    <div className="col-11 radio-btn d-flex justify-content-center align-items-center gap-3 p-2">

                                        <div className="active-circle "></div>
                                        <label for="">Daily</label>
                                        <div className="circle"></div>
                                        <label for="">Weekly</label>
                                        <div className="circle"></div>
                                        <label for="">Monthly</label>

                                    </div>
                                    <div className="col-1 ">
                                        <i className=" fs-4 fw-bold  text-light bi bi-download"></i>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="left-tabs">
                                            <div className="vertical-tabs">
                                                <p>Filters</p>
                                                <i className="bi bi-arrow-left-circle fs-4 fw-bold ps-5 text-light"></i>

                                            </div>
                                            <div className="d-flex align-items-start">

                                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                                    <div className="data-icons">
                                                        <img src="images/data-icon2.png" alt="" />
                                                        <button className="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Family <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Channel-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Channel" type="button" role="tab" aria-controls="v-pills-Channel" aria-selected="false">Channel <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Channel-type-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Channel-type" type="button" role="tab" aria-controls="v-pills-Channel-type" aria-selected="false">Channel Type <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-State-tab" data-bs-toggle="pill" data-bs-target="#v-pills-State" type="button" role="tab" aria-controls="v-pills-State" aria-selected="false">State <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Region-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Region" type="button" role="tab" aria-controls="v-pills-Region" aria-selected="false">Region <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-DC-tab" data-bs-toggle="pill" data-bs-target="#v-pills-DC" type="button" role="tab" aria-controls="v-pills-DC" aria-selected="false">DC <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Format-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Format" type="button" role="tab" aria-controls="v-pills-Format" aria-selected="false">Format<i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Store-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Store" type="button" role="tab" aria-controls="v-pills-Store" aria-selected="false">Store <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Brand-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Brand" type="button" role="tab" aria-controls="v-pills-Brand" aria-selected="false">Brand <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-SD-tab" data-bs-toggle="pill" data-bs-target="#v-pills-SD" type="button" role="tab" aria-controls="v-pills-SD" aria-selected="false">SD <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-SKU-tab" data-bs-toggle="pill" data-bs-target="#v-pills-SKU" type="button" role="tab" aria-controls="v-pills-SKU" aria-selected="false">SKU <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                    <div className="data-icons"><img src="images/data-icon.png" alt="" />
                                                        <button className="nav-link" id="v-pills-Category-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Category" type="button" role="tab" aria-controls="v-pills-Category" aria-selected="false">Category <i className="bi bi-arrow-right-short fw-bold fs-5 text-light "></i></button>
                                                    </div>
                                                </div>
                                                <div className="tab-content tbl-arrange" id="v-pills-tabContent">
                                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabindex="0">

                                                        <table className="table tbl-border caption-top  ">
                                                            <thead>
                                                                <tr className="">
                                                                    <th scope="col " className="column12 m-0 ">Family</th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1 ">
                                                                            <h1> WK1</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK2</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK3</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK4</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK5</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK6</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK7</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK8</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK9</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK10</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK11</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK12</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr >
                                                                    <th scope="row" className="first-colmn p-1 colmn-bg">Food
                                                                        Preservation</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr >
                                                                    <td scope="row" className="first-colmn p-1">Wireless
                                                                        Phone</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="first-colmn pt-3 pb-3 colmn-bg">High End TV</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <div className="pasition-tab pb-2 ps-3 d-flex align-items-center justify-content-between">
                                                            <div className="arrow-number d-flex align-items-center gap-3">
                                                                <div className="left-arrow-nmbr d-flex align-items-center gap-3 ">
                                                                    <i className="bi bi-arrow-left-circle"></i>
                                                                    <div className="circle-nmbr d-flex align-items-center justify-content-center">1</div>

                                                                </div>
                                                                <span>2</span>
                                                                <span>3</span>
                                                                <span>4</span>
                                                                <span>5</span>
                                                                <span>...</span>
                                                                <i className="bi bi-arrow-right-circle"></i>
                                                            </div>
                                                            <div className=" d-flex align-items-center gap-2">
                                                                <span>Go To Page</span>
                                                                <div className="page-change d-flex align-items-center justify-content-center">
                                                                    4
                                                                </div>
                                                            </div>
                                                        </div>



                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-Channel" role="tabpanel" aria-labelledby="v-pills-Channel-tab" tabindex="0">
                                                        <table className="table tbl-border  ">
                                                            <thead>
                                                                <tr className="">
                                                                    <th scope="col " className="column12 m-0 ">Channel</th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1 ">
                                                                            <h1> WK1</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK2</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK3</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK4</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK5</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK6</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK7</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK8</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK9</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK10</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK11</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK12</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr >
                                                                    <th scope="row" className="first-colmn p-1 colmn-bg">Food
                                                                        Preservation</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr >
                                                                    <td scope="row" className="first-colmn p-1">Wireless
                                                                        Phone</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="first-colmn pt-3 pb-3 colmn-bg">High End TV</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-Channel-type" role="tabpanel" aria-labelledby="v-pills-Channel-type-tab" tabindex="0">
                                                        <table className="table tbl-border caption-top  ">
                                                            <thead>
                                                                <tr className="">
                                                                    <th scope="col " className="column12 m-0 ">Family</th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1 ">
                                                                            <h1> WK1</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK2</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK3</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK4</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK5</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK6</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK7</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK8</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK9</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK10</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK11</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                    <th scope="col" className="pb-4">
                                                                        <div className="column1">
                                                                            <h1> WK12</h1>
                                                                            <span>03 jun 24</span>
                                                                        </div>
                                                                    </th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr >
                                                                    <th scope="row" className="first-colmn p-1 colmn-bg">Food
                                                                        Preservation</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr >
                                                                    <td scope="row" className="first-colmn p-1">Wireless
                                                                        Phone</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                    <td className="pt-3">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row" className="first-colmn pt-3 pb-3 colmn-bg">High End TV</th>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                    <td className="pt-3 colmn-bg">11219</td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn"></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                    <td></td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="first-colmn colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                    <td className="colmn-bg"></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="tab-pane fade" id="v-pills-State" role="tabpanel" aria-labelledby="v-pills-State-tab" tabindex="0">.dsdc..</div>
                                                    <div className="tab-pane fade" id="v-pills-Region" role="tabpanel" aria-labelledby="v-pills-Region-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-DC" role="tabpanel" aria-labelledby="v-pills-DC-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-Format" role="tabpanel" aria-labelledby="v-pills-Format-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-Store" role="tabpanel" aria-labelledby="v-pills-Store-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-Brand" role="tabpanel" aria-labelledby="v-pills-Brand-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-SD" role="tabpanel" aria-labelledby="v-pills-SD-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-SKU" role="tabpanel" aria-labelledby="v-pills-SKU-tab" tabindex="0"> </div>
                                                    <div className="tab-pane fade" id="v-pills-Category" role="tabpanel" aria-labelledby="v-pills-Category-tab" tabindex="0"> </div>
                                                </div>
                                            </div>

                                            <div className="apply-reset-bttn">
                                                <button className="apply">Apply</button>
                                                <button className="reset">Reset All</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>











                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                                <div className="row">
                                    <div className="col-12">
                                        <input type="radio" />
                                        <label for="">Daily</label>
                                        <input type="radio" />
                                        <label for="">Daily</label>
                                        <input type="radio" />
                                        <label for="">Daily</label>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
                            <div className="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default forecast
