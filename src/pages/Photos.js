import React,{useContext} from "react"
import {Context} from "../Context"
import Image from "../Components/Image"
import {getClass} from "../Utils/Index"

function Photos() {
    const {allPhotos} = useContext(Context)

    const imageElements = allPhotos.map((item, i) =>(
        <Image key = {item.id} item = {item} className = {getClass(i)} />
    ))
    return (
<main  className="photos">
    {imageElements}
</main>
    

    )
}
export default Photos 