import { useState, useEffect } from "react";
import axios from "axios";
import { Modelpost } from "./Modelpost";

export function FyP(){

    const [fyp, setFyp] = useState([]);
    const [id, setId] = useState("")

    const handleFyp = () => {
        
    }




    const [posts, setPosts] = useState([]);

    
    useEffect(() => { // traer informacion de imagen de base datos 
        const GetPost = async () => {
            try{
                const response = await fetch('http://localhost:3000/social/publicaciones/');
                if(response.ok){
                    console.log(response)
                    const data = await response.json();
                    console.log(data)
                    setPosts(data);
                    
                    
                }else{
                    console.error('error');
                }
            } catch (error) {
                console.error(error);
            }
        }
        
        GetPost();
    }, []);

    console.log(posts)


    return (
        <>
            <main className="principal bg-[rgb(57,54,66)] w-[100%] lg:left-[20%] lg:w-[80%] xl:w-[60%]">
                
                <nav className="fyp-nav w-[100%] lg:w-[80%] xl:w-[60%] ">
                    <a href="" className="fyp-nav-link"><button>General</button></a>
                    <hr />
                    <a href="" className="fyp-nav-link"><button>Seguidos</button></a>
                </nav>
                <div className="fyp-area">
                    <section className="fyp-section">
                        {posts.map((post) => (
                            <Modelpost data={post}/>
                        ))}
                    </section>
                </div>
            </main>
        </>
    )
}