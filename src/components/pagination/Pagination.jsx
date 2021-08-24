import React from 'react';
import "./pagination.css";

export default function Pagination({postsPerPage, totalPosts, paginate}) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav>
            <ul className="paginaton">
                {pageNumbers.map(number => (
                    <li onClick={() => paginate(number)} key={number} className="page-item">
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}
