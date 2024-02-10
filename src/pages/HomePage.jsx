import { useEffect, useState } from "react"
import Card from "../components/Card";
import Loading from '../components/Loading'


export default function HomePage() {
    const url = 'https://fakestoreapi.com/products'

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([]);

    async function fetchData() {
        setLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json()
            setPosts(data)
            console.log(data);
        } catch (error) {
            console.log(error);
            setPosts([])
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[])

    console.log(posts);

  return (
    <div className="home">
        {
            loading ? <Loading></Loading> : posts.length > 0 ? (posts.map((post) => {
                return <Card key={post.id} post={post}></Card>
            })) : (<p>No data found</p>)
        }
    </div>
  )
}
