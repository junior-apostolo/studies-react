import './App.css';
import { useState, useMemo, useEffect } from 'react';
import P from 'prop-types';
// import { Component } from 'react';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

// O componente Pai sempre sera renderizado quando o estado mudar
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  // Component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
