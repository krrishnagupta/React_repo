import Post from './post.jsx';
import { PostList } from '../store/post-list-store.jsx';
import { useContext, useEffect, useState } from 'react';
import Welcome from './welcom.jsx';
import LoadingSpinner from './loadingSpinner.jsx';

const Postlist = ({ setSelectedTab }) => {

  const { postLists, addInitailPost } = useContext(PostList);
  console.log('postLists isArray?', Array.isArray(postLists), postLists);

  const [fetching, setfetching] = useState(false);

  useEffect(() => {
    setfetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    fetch('https://dummyjson.com/posts', { signal })
      .then(res => res.json())
      .then(data => {
        addInitailPost(data.posts)
        setfetching(false);
      });

    return () => {
      console.log("cleanup the useEffect")
      controller.abort();
    }
  }, []);


  return (
    <div className="row my-2 g-3 justify-content-center">
      {fetching && <LoadingSpinner />}

      {
        !fetching && postLists.length === 0 && <Welcome setSelectedTab={setSelectedTab}/>
      }
      {!fetching && postLists.map((post) => (
        <Post key={post.id} post={post} />
      ))}

    </div>
  )
}

export default Postlist;