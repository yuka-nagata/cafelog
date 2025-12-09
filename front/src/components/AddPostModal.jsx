import {useEffect, useState} from "react";
import { useContext } from "react";
import { HomeContext } from "./Home";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";


const AddPostModal = () => {
    const { isOpenModal, setIsOpenModal, setData } =
        useContext(HomeContext);

    const submit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        fetch("/api/cafe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formJson),
        })
            .then(() => fetch("/api/cafe"))
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setIsOpenModal(false);
            });
    };

    return (
        <>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
                contentLabel="Example Modal"
            >
                <h2>投稿</h2>
                <form onSubmit={submit}>
                    <div>
                        <TextField id="inputName" type="text" name="name"></TextField>
                    </div>
                    <div>
                        <TextField
                            id="inputRate"
                            type="number"
                            label="評価"
                            name="rate"
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            id="inputDate"
                            type="date"
                            label="date"
                            name="visitedDate"
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            id="inputComment"
                            type="text"
                            label="comment"
                            name="comment"
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            id="inputPicture"
                            type="text"
                            label="写真"
                            name="picture"
                        ></TextField>
                    </div>
                    <div>
                        <TextField
                            id="inputMap"
                            type="text"
                            label="場所"
                            name="map"
                        ></TextField>
                    </div>
                    <button type="submit">Add Post</button>
                </form>
                <button onClick={() => setIsOpenModal(false)}>Back</button>
            </Modal>
        </>
    );
}

export default AddPostModal;