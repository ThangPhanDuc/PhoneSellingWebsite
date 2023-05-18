import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from '../components/product';
import product from '../components/product';


function ListLaptop() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/product')
            .then(response => {
                setData(response.data);
                console.log(data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div id="layoutSidenav_content">
            <main>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Danh sách điện thoại</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item">
                            <a href="index.html">Dashboard</a>
                        </li>
                        <li className="breadcrumb-item active">Tables</li>
                    </ol>
                    <div className="card mb-4">
                        <div className="card-body">
                            DataTables is a third party plugin that is used to generate the demo
                            table below. For more information about DataTables, please visit the
                            <a target="_blank" href="https://datatables.net/">
                                official DataTables documentation
                            </a>
                            .
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-header">
                            <i className="fas fa-table me-1" />
                            DataTable Example
                        </div>
                        <div className="card-body">
                            <table id="datatablesSimple">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <th>Name</th>
                                        <th>Position</th>
                                        <th>Office</th>
                                        <th>Age</th>
                                        <th>Start date</th>
                                        <th>Salary</th>
                                    </tr>
                                </tfoot>
                                <tbody>
                                    <ul>
                                        {data.map(item => (
                                            <tr>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td></td>
                                            </tr>
                                        ))}
                                    </ul>


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="py-4 bg-light mt-auto">
                <div className="container-fluid px-4">
                    <div className="d-flex align-items-center justify-content-between small">
                        <div className="text-muted">Copyright © Your Website 2022</div>
                        <div>
                            <a href="#">Privacy Policy</a>·<a href="#">Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default ListLaptop;

