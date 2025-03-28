const MemesCard = ({memesData}) => {
    return (
        <div className="border-2 rounded-xl p-2 h-60 w-44 bg-emerald-500 shadow-lg hover:bg-violet-600">
            <img src={memesData.url} alt="meme-image" className="h-40 w-full object-cover rounded-lg"></img>
            <h1 className="text-sm font-bold">{memesData.author}</h1>
            <p className="text-gray-800 text-sm">{memesData.title}</p>
        </div>
    )
}

export default MemesCard;