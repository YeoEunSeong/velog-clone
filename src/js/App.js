import Header from '../components/Header.js';
import Post from '../components/Post.js';

export default async function App() {
  let { data: posts } = await axios.get('/posts');
  return `
    ${Header()}
    <main>
      ${posts.map(post => Post(post))}
    </main>
  `;
}
