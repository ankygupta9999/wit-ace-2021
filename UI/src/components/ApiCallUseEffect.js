import React,{useState,useEffect} from 'react'
import axios from 'axios'


const ApiCallUseEffect = () => {

    const [posts,setPosts] = useState([]);

    useEffect(() => {
        axios.get("http://169.51.204.210:31776/rest")
                        .then(res => {
                            console.log(res);
                            setPosts(res.data);
                        })
                        .catch(err => {
                            console.log(err);
                        });

    },[])

    return(
            <div>
                <ul>
                    {
                        posts.map(x => <li key={x.id}>{x.title}</li>)
                    }
                </ul>

            </div>
    );
}

export default ApiCallUseEffect;
