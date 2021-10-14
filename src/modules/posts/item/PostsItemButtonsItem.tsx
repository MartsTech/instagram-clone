interface PostsItemButtonsItemProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
}

const PostsItemButtonsItem: React.FC<PostsItemButtonsItemProps> = ({
  Icon,
}) => {
  return (
    <Icon
      className="h-7 hover:scale-125 cursor-pointer transition-all 
      duration-150"
    />
  );
};

export default PostsItemButtonsItem;
