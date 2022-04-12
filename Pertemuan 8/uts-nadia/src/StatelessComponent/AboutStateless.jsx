import React from "react";
import "./About.css";
import images_biodata from "./fotoku.jpeg";

const AboutStatelsss = () => {
    return (
        <div>
            <div className="wrapper">
                <div className="main_container">
                    <div className="item">
                        <div class="page-content page-container" id="page-content">
                            <div class="padding">
                                <div class="row container d-flex justify-content-center">
                                    <div class="col-xl-10 col-md-12">
                                        <div class="card user-card-full">
                                            <div class="row m-l-0 m-r-0">
                                                <div class="col-sm-4 bg-c-lite-green user-profile">
                                                    <div class="card-block text-center text-white">
                                                        <div class="m-b-25"> <img src={images_biodata} height="300px"/> </div>
                                                        <h2 class="f-w-600">Nadia Layra Aziza</h2>
                                                        <p>College Students</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                                    </div>
                                                </div>
                                                <div class="col-sm-8">
                                                    <div class="card-block">
                                                        <h3 class="m-b-20 p-b-5 b-b-default f-w-600">Information</h3>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <h4 class="m-b-10 f-w-600">Email</h4>
                                                                <h4 class="text-muted f-w-400">nadialayra15@gmail.com</h4>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <h4 class="m-b-10 f-w-600">Phone</h4>
                                                                <h4 class="text-muted f-w-400">(+62) 812-5934-7608</h4>
                                                            </div>
                                                        </div>
                                                        <h3 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Detail</h3>
                                                        <div class="row">
                                                            <div class="col-sm-6">
                                                                <h4 class="m-b-10 f-w-600">NIM</h4>
                                                                <h4 class="text-muted f-w-400">1941720061</h4>
                                                            </div>
                                                            <div class="col-sm-6">
                                                                <h4 class="m-b-10 f-w-600">Major</h4>
                                                                <h4 class="text-muted f-w-400">Information Technology</h4>
                                                            </div>
                                                            {/* <div class="col-sm-12">
                                                                <p class="m-b-10 f-w-600">Address</p>
                                                                <h6 class="text-muted f-w-400">Wijaya Kusuma Street No.9A, Sekarpuro</h6>
                                                            </div> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutStatelsss;