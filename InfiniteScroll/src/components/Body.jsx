import { useState } from "react";
import MemesCard from "./MemesCard";

const Body = () => {
    const [memes, setMemes] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://meme-api.com/gimme/100");
            const data = await response.json();
            console.log(data.memes);
            setMemes(data.memes)
        } catch (error) {
            console.log(error)
            console.error(error)
        }
    }

    useState(() => {
        fetchData();
    }, []);

    return (
        <div className="min-h-screen w-full bg-amber-300">
            <h1 className="m-4 p-4 text-center font-bold text-4xl">Memes Listing</h1>
            <ul className="flex flex-wrap gap-5 justify-center items-start">
            {
                memes.map((meme, index) => (
                    <MemesCard key={index} memesData={meme} />
                ))
            }
            </ul>
        </div>
    )
}

export default Body;