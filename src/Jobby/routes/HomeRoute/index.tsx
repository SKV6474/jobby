import Home from "../../components/Home";
import WithHeader from "../../hocs/withHeader";

const HomeRoute = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default WithHeader(HomeRoute);
