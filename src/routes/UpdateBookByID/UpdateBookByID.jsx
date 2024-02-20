import "./../../App.css";
import "./../../styles/Main.css";

import axios from "axios";

import { useState } from 'react'
import { AppLayout } from '../../layouts';

export default function UpdateBookByID() {
    const [SearchInput, SetSearchInput] = useState("");
    const [Title, SetTitle] = useState("");
    const [Author, SetAuthor] = useState("");

    const [Updated, SetUpdated] = useState(false);

    const UpdateBookByID = async (id) => {
        try {
            const Response = await axios.put(`http://node41091-noderest.proen.app.ruk-com.cloud/books/${id}`, {
                title: Title,
                author: Author
            });
            return SetUpdated(Response.data);

        } catch (error) {
            return console.err(error);
        }
    }

    return (
        <AppLayout>
            <div className="screen__default">
                <div className="search__box">
                    <div style={{ marginBottom: 16 }}>
                        <h2>ID</h2>
                        <span>Filter by id</span>
                        <input
                            onChange={(event) => void SetSearchInput(event.target.value)}
                            className="search__field"
                            placeholder="Put an id"
                        />
                    </div>
                    <div>
                        <h2>Updates</h2>
                        <span>Put the fields for updates.</span>
                        <input
                            onChange={(event) => void SetTitle(event.target.value)}
                            className="search__field"
                            placeholder="Put a title"
                        />
                        <input
                            onChange={(event) => void SetAuthor(event.target.value)}
                            className="search__field"
                            placeholder="Put an author"
                        />
                    </div>
                    <button
                        style={{ marginTop: 32 }}
                        onClick={() => void UpdateBookByID(SearchInput)}
                        className="button__default"
                    >
                        Update
                    </button>
                </div>
                <div className="search__results">
                    {Updated && (
                        <span style={{ color: "#7f7f7f" }}>The book was updated.</span>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
