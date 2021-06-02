import { Alert } from 'react-bootstrap'

const AlertWarn = (props) =>
<Alert variant="danger">
  <Alert.Heading>{props.title}</Alert.Heading>
  <p>
    {props.par}
  </p>
  <hr />
  <p className="mb-0">
   {props.secondPar}
  </p>
</Alert>

 export default AlertWarn