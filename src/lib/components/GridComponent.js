import React from 'react';
import { Table } from 'react-bootstrap';


const GridComponent = ({ data }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    {/* Define columns */}
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.status}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default GridComponent;