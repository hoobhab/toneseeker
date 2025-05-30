import React, { useState, useEffect } from 'react';
import { supabase } from '../Client'
import Card from '../components/Card';

const Read = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // READ all adv from table
        const fetchposts = async () => {
            const { data } = await supabase
                .from('Posts')
                .select().order("created_at", {ascending: false});
                setPosts(data)
        }
        fetchposts()
    }, []);

    return (
        <div className="Read">
            {
                posts && posts.length > 0 ?
                    posts.map((post, index) =>
                        <Card
                        id={post.id}
                        title={post.title}
                        description={post.description}
                        image={post.image}
                        upvotes={post.upvotes}
                        created_at={post.created_at}
                        />
                    ) : <span class="loader"></span>
            }
        </div>
    )
}

export default Read;
