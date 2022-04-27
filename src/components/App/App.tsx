type Props = {
  text: string;
};

const App = ({ text }: Props) => {
  return (
    <div>
      <header>{text}</header>
    </div>
  );
};

export { App };
