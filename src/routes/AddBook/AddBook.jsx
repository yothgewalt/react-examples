import "./../../App.css";
import "./../../styles/Main.css";

import axios from "axios";


import { useState } from 'react'
import { AppLayout } from "../../layouts";

export default function AddBook() {
    const [Title, SetTitle] = useState("");
    const [Author, SetAuthor] = useState("");

    const [Added, SetAdded] = useState(false);

    const AddBook = async () => {
        try {
            const Response = await axios.post('http://node41091-noderest.proen.app.ruk-com.cloud/books', {
                title: Title,
                author: Author
            });

            if (Response.data != null) {
                return SetAdded(true);
            }

        } catch (error) {
            return console.err(error);
        }
    }

    return (
        <AppLayout>
            <div className="screen__default">
                <div className="search__box">
                    <div>
                        <h2>Add a book</h2>
                        <span>Put the fields for add a book.</span>
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
                        onClick={() => void AddBook()}
                        className="button__default"
                    >
                        Add the book
                    </button>
                </div>
                <div className="search__results">
                    {Added && (
                        <span style={{ color: "#7f7f7f" }}>The book was added.</span>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
