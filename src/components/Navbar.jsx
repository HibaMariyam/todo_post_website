import { useNavigate } from "react-router-dom";

function Navbar(){
    const navigate= useNavigate()
    return (
        <>
        <div className="flex gap-10 justify-center text-4xl">
            <p onClick={()=>{navigate("/")}}>Todo</p>
            <p onClick={()=>{navigate("/post")}}>Post</p>
        </div>
        </>
    );
}

export default Navbar