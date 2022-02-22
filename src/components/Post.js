import Thumbnail from '../components/Thumbnail.js';
import PostContent from '../components/PostContent.js';
import PostInfo from '../components/PostInfo.js';
import Author from '../components/Author.js';
import Likes from '../components/Likes.js';

export default function Post(props) {
  const { thumbnail, title, desc, date, comments, avatar, author, likes } =
    props;

  return `
    <article>
      ${Thumbnail({ thumbnail })}
      ${PostContent({ title, desc })}
      ${PostInfo({ date, comments })}
      <div class="author-likes">
        ${Author({ avatar, author })}
        ${Likes({ likes })}
      </div>
    </article>
  `;
}
