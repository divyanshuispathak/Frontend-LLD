import CommentContainer from "./CommentContainer";

const NestedComments = () => {
  const data = [
    {
      userName: "Divyanshu Pathak",
      comment: "lorem ipsum ",
      replies: [
        {
          userName: "Muskan Sharma",
          comment: "Hello dear",
          replies: [
            {
              userName: "Divyanshu Pathak",
              comment: "Hello cutie ",
            },
          ],
        },
        {
          userName: "Reena Sharma",
          comment: "olla maa ",
        },
        {
          userName: "Divyanshu Pathak",
          comment: "Hello ",
        },
      ],
    },
    {
      userName: "Manan Pathak",
      comment: "lorem ipsum ",
      replies: [
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
      ],
    },
    {
      userName: "Shrikant Sharma",
      comment: "lorem ipsum ",
      replies: [
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
        {
          userName: "Divyanshu Pathak",
          comment: "lorem ipsum ",
        },
      ],
    },
  ];

  return <div>
    <CommentContainer data={data} />
  </div>;
};

export default NestedComments;
