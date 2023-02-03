import Radium from "radium";
import React, { useState } from "react";

export default Radium(function AddNewAlbum(props) {

    const [albumTitle, setAlbumTitle] = useState("");
    const [albumBody, setAlbumBody] = useState("");

    const style = {
        addNewAlbumButton: {
            "height": "300px",
            "width": "300px",
            "minWidth": "250px",
            "borderRadius": "0.75rem",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "center",
            "alignItems": "center",
            "cursor": "pointer",
            "border": "2px solid black",
            "transition": "all 0.25s ease-in-out",
            "background": "aliceblue",

            ':hover': {
                "boxShadow": "0 0 10px 2.5px #555",
                "transform": "scale(1.05)",
                "background": "linear-gradient(to bottom, rgb(248, 231, 200), lightpink)"
            }
        },

        addNewAlbumH1: {
            "fontWeight": "100",
            "color": "#111"
        }
    }

    async function onSubmitHandler(event) {
        event.preventDefault();

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: albumTitle,
                body: albumBody,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const responseJSON = await response.json();
        console.log(responseJSON);
        props.onAddNewAlbum(responseJSON);
        setAlbumBody('')
        setAlbumTitle('')
    }

    return (
        <React.Fragment>

            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={style.addNewAlbumButton}>
                <p>
                    <img
                        src="data:image/jpeg;base64,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"
                        width={"150px"}
                        alt="..."
                    />
                </p>
                <h1 style={style.addNewAlbumH1}>+ Add Album</h1>
            </button>

            <div className="modal fade" id="staticBackdrop" style={{"backdropFilter": "blur(5px)"}} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog" >
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title display-6 text-center w-100" id="staticBackdropLabel">Add Your Album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={onSubmitHandler}>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput2" className="form-label">Enter Title</label>
                                    <input onChange={(e) => { setAlbumTitle(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput2" value={albumTitle} placeholder="Enter Title" required></input>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="formGroupExampleInput3" className="form-label">Enter Body</label>
                                    <input onChange={(e) => { setAlbumBody(e.target.value) }} type="text" className="form-control" id="formGroupExampleInput3" value={albumBody} placeholder="Enter Body" required></input>
                                </div>
                                <div className="modal-footer d-flex flex-row justify-content-evenly ">
                                    <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
})