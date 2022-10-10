import { connect } from 'react-redux';
import Dashboard from './component/Dashboard';
import Login from './component/Login';
import { mapDispatchToProps, mapStateToProps } from './redux/selector';



function App(props) {
  
  return (
    props.userData.token === undefined ? <Login /> : <Dashboard />
  )
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)





