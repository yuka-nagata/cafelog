import {useEffect, useState} from "react";

export default function Home() {
    const [data, setData] = useState("")

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
    <h1>Home</h1>
    <div>{JSON.stringify(data)}</div>
    <button onClick={()=>addCafe()}>Add</button>
    </>
    );
}