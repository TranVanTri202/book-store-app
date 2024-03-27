interface Children {
  children: any;
}

const LayoutSignIn: React.FC<Children> = ({ children }) => {
  return <>{children}</>;
};

export default LayoutSignIn;
