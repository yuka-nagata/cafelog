import {useEffect, useState} from "react";
import { useContext } from "react";
import { HomeContext } from "./Home";
import Modal from "react-modal";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {Rating} from "@mui/material";
import * as React from 'react';
import Typography from "@mui/material/Typography";


const AddPostModal = () => {
    const { isOpenModal, setIsOpenModal, setData } =
        useContext(HomeContext);
    const [rate, setRate] = React.useState(2);

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

    const [imageUrl, setImageUrl] = useState("");

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append("file", file);

        const res = await fetch('/api/images', {
            method: 'POST',
            body: formData,
        });
        setImageUrl(res.data);
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '500px',
            height: '600px',
        },
    };

    return (
        <>
            <Modal
                isOpen={isOpenModal}
                onRequestClose={() => setIsOpenModal(false)}
                contentLabel="Example Modal"
                style={customStyles}
            >
                <h2>投稿</h2>
                <form onSubmit={submit}>
                    <div>
                        <TextField id="inputName" type="text" label="name" name="name"></TextField>
                    </div>
                    <div>
                        <Typography component="legend">評価</Typography>
                        <Rating
                            name="rate"
                            value={rate}
                            onChange={(event, newValue) => {
                                setRate(newValue);
                            }}
                        />
                    </div>
                    <div>
                        <TextField
                            id="inputDate"
                            type="date"
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
                        {/*<input type="file" onChange={handleFileChange} />*/}
                        {/*{imageUrl && <img src={imageUrl} alt="uploaded" style={{ width: 200 }} />}*/}
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
                    <Button type="submit" sx={{ marginTop: 2 }}>Add Post</Button>
                </form>
                <Button onClick={() => setIsOpenModal(false)} sx={{ marginTop: 2 }}>Back</Button>
            </Modal>
        </>
    );
}

export default AddPostModal;