export interface HeaderOptionsItemProps {
  Icon: (props: React.ComponentProps<"svg">) => JSX.Element;
  IconClass?: string;
  count?: number;
}

const HeaderOptionsItem: React.FC<HeaderOptionsItemProps> = ({
  Icon,
  IconClass,
  count = 0,
}) => {
  return (
    <div className="relative hidden md:inline-flex">
      <Icon
        className={`h-6 cursor-pointer hover:scale-125 transition-all duration-150 ease-out 
        ${IconClass}`}
      />
      {count > 0 && (
        <div
          role="count"
          className="absolute -top-2 -right-2 text-xs w-5 h-5
          bg-red-500 rounded-full flex items-center justify-center
          animate-pulse text-white"
        >
          {count}
        </div>
      )}
    </div>
  );
};

export default HeaderOptionsItem;
