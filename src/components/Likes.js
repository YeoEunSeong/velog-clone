export default function Likes(props) {
  const { likes } = props;
  return `
  <div class='likes'>
    <svg class='like' width='24' height='24' viewBox='0 0 24 24'>
      <path
        fill='currentColor'
        d='M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z'
      ></path>
    </svg>
    ${likes}
  </div>
  `;
}
