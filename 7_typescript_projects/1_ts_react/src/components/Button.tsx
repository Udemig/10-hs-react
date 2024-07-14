interface Props {
  title: string;
  designs?: string;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
}

const Button = ({ title, designs, disabled, type }: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`custom-btn bg-primary-blue rounded-full hover:bg-blue-800 text-white transition ${designs}`}
    >
      {title}
    </button>
  );
};

export default Button;
