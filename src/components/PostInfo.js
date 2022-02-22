export default function PostInfo(props) {
  const { date, comments } = props;
  const [year, month, day] = date.split('-');
  return `
    <div class='post-info'>
      <time class='write-date' datetime='${date}'>${year}년 ${month}월 ${day}일</time>
      <span class='comments'>${comments}개의 댓글</span>
    </div>
  `;
}
