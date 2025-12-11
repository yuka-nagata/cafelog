import {useEffect, useState, createContext} from "react";
import AddPostModal from "./AddPostModal";
import Modal from "react-modal";
import PostList from "./PostList";
import NavBar from "./NavBar.jsx";

Modal.setAppElement("#root");

export const HomeContext = createContext();

export default function Home() {
    const [data, setData] = useState([])
    const [isOpenModal, setIsOpenModal] = useState(false);
    const value = { isOpenModal, setIsOpenModal, data, setData };

    useEffect(() => {
        async function getData(){
            const res = await fetch(`/api/cafe`);
            const dataFromBack = await res.json()
            setData(dataFromBack)
        }
        getData()
    },[])

    const addCafe = () => {
        fetch("/api/cafe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({name:"testName2",rate:2,
                visitedDate: "2025-12-01",
                comment: "testComment",picture:"testPicture", map:"testMap" }),
        })
            .then(() => fetch("/api/cafe"))
            .then((res) => res.json())
            .then((data) => {
                setData(data)
            });
    }

    return (<>
    <HomeContext.Provider value={value}>
     <NavBar/>
        <PostList />
        <AddPostModal />
    </HomeContext.Provider>
    </>
    );
}