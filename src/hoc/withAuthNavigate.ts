import { AppStateType } from 'redux/store/reduxStore';

type MapStateToProps = {
  isAuth: boolean;
};
const mapStateToProps = (state: AppStateType): MapStateToProps => ({
  isAuth: state.auth.isAuth,
});

/*
export function WithAuthNavigate<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToProps) => {
        let {isAuth, ...restProps} = props
              if (!isAuth) return <Navigate to='/login'/>
              return <Component {...restProps}/>
    }

    let ConnectedNavigateComponent = connect(mapStateToProps)(RedirectComponent)
    return ConnectedNavigateComponent;
};
*/
