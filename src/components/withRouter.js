import { useNavigate, useParams} from 'react-router-dom'
//Used as wrapped function component in order to use react-router-dom v6 hooks class components
const withRouter = WrappedComponent => props => {
    const params = useParams();
    const navigate = useNavigate();

    return (
      <WrappedComponent
        {...props}
        params={params}
        navigate={navigate}
      />
    );
  };

  export default withRouter

