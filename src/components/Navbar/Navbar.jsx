import "./Navbar.css";

import { useNavigate } from "react-router-dom";

const Links = [
    {
        id: 1,
        label: "Get all book",
        pathname: "/"
    },
    {
        id: 2,
        label: "Add a book",
        pathname: "/add"
    },
    {
        id: 3,
        label: "Get a book by id",
        pathname: "/searches"
    },
    {
        id: 4,
        label: "Update a book by id",
        pathname: "/searches/updates"
    },
    {
        id: 5,
        label: "Delete a book by id",
        pathname: "/searches/deletion"
    },
];

export default function Navbar() {
    const navigator = useNavigate();

    const ButtonLinkHandler = (pathname) => { return navigator(pathname); }

    return (
        <div className="navbar">
            {Links.map((element) => {
                return (
                    <button
                        key={element.id}
                        className="button__link"
                        onClick={() => void ButtonLinkHandler(element.pathname)}
                    >
                        {element.label}
                    </button>
                );
            })}
        </div>
    );
}
