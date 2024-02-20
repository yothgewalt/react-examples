import "./../../App.css";
import "./../../styles/Main.css";

import axios from "axios";

import { useState } from 'react'
import { AppLayout } from '../../layouts';

export default function GetBookByID() {
    const [SearchInput, SetSearchInput] = useState("");
    const [Book, SetBook] = useState([]);

    const GetBookByID = async (id) => {
        try {
            const Response = await axios.get(`http://node41091-noderest.proen.app.ruk-com.cloud/books/${id}`, {});
            return SetBook(Response.data);

        } catch (error) {
            return console.err(error)
        }
    }

    return (
        <AppLayout>
            <div className="screen__default">
                <div className="search__box">
                    <span>Search a book by ID</span>
                    <input
                        onChange={(event) => void SetSearchInput(event.target.value)}
                        className="search__field"
                        placeholder="Put an id"
                    />
                    <button
                        onClick={() => void GetBookByID(SearchInput)}
                        className="button__default"
                    >
                        Search
                    </button>
                </div>
                <div className="search__results">
                    <h1>Results:</h1>
                    {Book.id != null ? (
                        <div style={{ color: "#7f7f7f" }}>
                            <span>{Book.title} ({Book.id})</span>
                            <span>{Book.author}</span>
                        </div>
                    ) : (
                        <span style={{ color: "#7f7f7f" }}>No search result</span>
                    )}
                </div>
            </div>
        </AppLayout>
    )
}
