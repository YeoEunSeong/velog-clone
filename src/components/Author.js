export default function Author(props) {
  const { avatar, author } = props;
  return `
    <div class='author'>
      <img src='${avatar}' alt='avatar' class='info-avatar' />
      <span class='author-info'>
        by
        <span class='author-name'>${author}</span>
      </span>
    </div>
  `;
}
