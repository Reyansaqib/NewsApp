import React from "react";
import "./mystyl.css"

export default function Spinners() {

    return (
        <>

            <button class="btn btn-primary center" type="button" disabled>
                <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </>
    )

}