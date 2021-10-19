import { useState } from 'react';

import Container from 'react-bootstrap/Container';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export default function SearchBar(props) {
    const [searchInput, setSearchInput] = useState('');

    const handleChange = (e) => setSearchInput(e.target.value);
    const handleSubmit = (e) => null; //TODO: Fetch request from api, go to results page.

    return (
        //TODO:Add a submit button
        //TODO: Add autocomplete?

        <InputGroup>
            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
            <Form.Control
                onChange={handleChange}
                placeholder="Enter a name or team" />

        </InputGroup>



    )
}