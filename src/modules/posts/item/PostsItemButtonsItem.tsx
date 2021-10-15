interface PostsItemButtonsItemProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  selected?: boolean;
  onClick?: () => void;
}

const PostsItemButtonsItem: React.FC<PostsItemButtonsItemProps> = ({
  Icon,
  selected = false,
  onClick,
}) => {
  return (
    <Icon
      onClick={onClick}
      className={`h-7 hover:scale-125 cursor-pointer transition-all 
      duration-150 ${selected && "!fill-current !text-red-500 "}`}
    />
  );
};

export default PostsItemButtonsItem;
