import Home from "../../components/Home";
import WithHeader from "../../hocs/withHeader";
import { Props } from "../../interface";

const HomeRoute = (props: Props) => {
  return (
    <div>
      <Home {...props} />
    </div>
  );
};

export default WithHeader(HomeRoute);
