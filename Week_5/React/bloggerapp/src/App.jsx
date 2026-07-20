import React from 'react';
const blogs = [
  { id: 1, title: 'React Basics', content: 'Learn React from scratch.' },
  { id: 2, title: 'React Hooks', content: 'Understanding useState and useEffect.' }
];

function Blog({ title, content }) {
  return (
    <div style={{borderBottom: '1px solid gray'}}>
      <h3>{title}</h3><p>{content}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h2>Blogger App</h2>
      {blogs.map(blog => <Blog key={blog.id} title={blog.title} content={blog.content} />)}
    </div>
  );
}
export default App;
