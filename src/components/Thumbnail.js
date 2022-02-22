export default function Thumbnail(props) {
  const { thumbnail } = props;
  return `
    <img class='post-thumbnail' src='${thumbnail}' alt='post thumbnail' />
  `;
}
