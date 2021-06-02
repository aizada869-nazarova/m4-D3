import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertWarn  from './components/WarningSign';
import MyBadge from './components/MyBadge'
import SingleBook from './components/SingleBook'

function App() {
  return (
    <div >
      <AlertWarn title='Hi there' par= 'something' secondPar='I am here'/>
      <MyBadge text='My badge' color= 'secondary'/>
      <SingleBook/>
    </div>
  );
}

export default App;