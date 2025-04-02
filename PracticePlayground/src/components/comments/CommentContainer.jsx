const CommentContainer = ({ data }) => {
  return data.map((comment, index) => (
    <div className="pl-10 border-l-2 border-black" key={index}>
      <div className="flex">
        <div>
          <img
            className="w-16 p-2 rounded-full"
            src="https://styles.redditmedia.com/t5_7snu6z/styles/profileIcon_edahx2qgw9zc1.jpeg?width=64&height=64&frame=1&auto=webp&crop=&s=4fb8addb78f6b6d65187ef2ac0489e26a65db6c3"
            alt="comment-image"
          />
        </div>
        <div>
          <p className="font-bold px-2 py-4">{comment.userName}</p>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      <div>
        {comment?.replies && <CommentContainer data={comment.replies} />}
      </div>
    </div>
  ));
};

export default CommentContainer;
