import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-container" data-testid="loader">
      <ThreeDots color="#fff" height={50} width={50} />
    </div>
  );
};

export default Loader;
