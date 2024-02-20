/* eslint-disable react/prop-types */

import { Navbar } from "../../components";

export default function AppLayout({ children }) {


    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
