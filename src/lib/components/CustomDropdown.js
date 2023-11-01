import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CustomDropdown = ({ options, onChange }) => {
    return (
        <Dropdown onSelect={onChange}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {options.map((opt, index) => (
                    <Dropdown.Item key={index} eventKey={opt}>
                        {opt}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
};

export default CustomDropdown;