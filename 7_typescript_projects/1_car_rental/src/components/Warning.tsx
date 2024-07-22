// Higher Order Components (HOC)
// Normal componentlardan farklı olarak hem açılış hemde kapanış etketlerli olur ve içerinde yazılan değeri otomatik olarak children propu olarak gönderir.

type Props = {
  children: string;
};

const Warning = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default Warning;
