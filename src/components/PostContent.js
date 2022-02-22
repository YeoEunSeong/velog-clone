export default function PostContent(props) {
  const { title, desc } = props;
  return `
    <div class='post-content'>
      <h2 class='post-title'>${title}</h2>
      <p class='post-desc'>${desc}</p>
    </div>
  `;
}
