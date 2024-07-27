type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  designs?: string;
};

const Container = ({ children, designs }: Props) => {
  return (
    <div className={`max-w-[1440px] mx-auto p-5 ${designs}`}>
      {children}
    </div>
  );
};

export default Container;
