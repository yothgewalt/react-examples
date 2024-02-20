import './App.css'

import axios from "axios";

import { useEffect, useState } from 'react'
import { AppLayout } from './layouts';

export default function App() {
    const [Books, SetBooks] = useState([]);
    const GetAllBook = async () => {
        try {
            const Response = await axios.get("http://node41091-noderest.proen.app.ruk-com.cloud/books", {});
            return SetBooks(Response.data);

        } catch (err) {
            return console.err(err)
        }
    };

    useEffect(() => { GetAllBook() }, []);

    return (
        <AppLayout>
            <div className="screen__default">
                <h1>Results:</h1>
                {Books.map((element) => {
                    return (
                        <div key={element.id} className="book__element">
                            <h3>Title: {element.title} ({element.id})</h3>
                            <p>Author: {element.author}</p>
                        </div>
                    );
                })}
            </div>
        </AppLayout>
    )
}
