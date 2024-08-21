"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const CatrgoryTable = ({  handleDelete }) => {
    const [catrgorys] = useState([
        { id: 1, name: 'Solar Panel X200', category: 'Solar PV Module', price: 199.99, inStock: true },
        { id: 2, name: 'Solar Inverter Y500', category: 'Inverters', price: 499.99, inStock: false },
        { id: 3, name: 'Battery Z1000', category: 'Batteries', price: 299.99, inStock: true },
        // Add more catrgorys as needed
    ]);

    const [filter, setFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);

    // Filtered and paginated catrgorys
    const filteredCatrgorys = catrgorys.filter(catrgory =>
        catrgory.name.toLowerCase().includes(filter.toLowerCase()) ||
        catrgory.category.toLowerCase().includes(filter.toLowerCase())
    );

    const paginatedCatrgorys = filteredCatrgorys.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredCatrgorys.length / itemsPerPage);

    // Function to handle adding a catrgory


    return (
        <div className="container-fluid my-4">
            <div className="card shadow-sm">
                <div className="card-header text-white">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="card-title mb-0">All Catrgorys</h4>
                        <div>
                            <input
                                type="text"
                                placeholder="Search Categories..."
                                className="form-control w-100"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                            />
                        </div>
                        <div>
                            <Link href="/admin/dashboard/catrgory/create"
                                className="btn btn-primary me-2"
                            >
                                Add Catrgory
                            </Link>

                        </div>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped table-hover mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th>#</th>
                                <th>Catrgory Name</th>
                              
                                <th>Stock Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedCatrgorys.map((catrgory, index) => (
                                <tr key={catrgory.id}>
                                    <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                                    <td>{catrgory.name}</td>
                                   
                                    <td>
                                        <span className={`badge ${catrgory.inStock ? 'bg-success' : 'bg-danger'}`}>
                                            {catrgory.inStock ? 'In Stock' : 'Out of Stock'}
                                        </span>
                                    </td>
                                    <td>
                                        <Link
                                            className="btn btn-outline-primary btn-sm me-2 m-1"
                                            href={`/admin/dashboard/category/edit/${catrgory.id}`}
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => handleDelete(catrgory.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="card-footer">
                    <nav>
                        <ul className="pagination justify-content-center">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                                    Previous
                                </button>
                            </li>
                            {[...Array(totalPages)].map((_, index) => (
                                <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => setCurrentPage(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                                    Next
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default CatrgoryTable;
