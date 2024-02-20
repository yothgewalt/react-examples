import "./../../App.css";
import "./../../styles/Main.css";

import axios from "axios";

import { useState } from 'react'
import { AppLayout } from '../../layouts';

export default function DeleteBookByID() {
    const [SearchInput, SetSearchInput] = useState("");
    const [Deleted, SetDeleted] = useState(false);

    const DeleteBookByID = async (id) => {
        try {
            const Response = await axios.delete(`http://node41091-noderest.proen.app.ruk-com.cloud/books/${id}`, {});
            if (Response.data != null) {
                return SetDeleted(true);
            }

        } catch (error) {
            return console.err(error)
        }
    }

    return (
        <AppLayout>
            <div className="screen__default">
                <div className="search__box">
                    <span>Delete a book by ID</span>
                    <input
                        onChange={(event) => void SetSearchInput(event.target.value)}
                        className="search__field"
                        placeholder="Put an id"
                    />
                    <button
                        onClick={() => void DeleteBookByID(SearchInput)}
                        className="button__default"
                    >
                        Click
                    </button>
                </div>
                <div className="search__results">
                    {Deleted && (
                        <span style={{ color: "#7f7f7f" }}>
                            The book was deleted.
                        </span>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
