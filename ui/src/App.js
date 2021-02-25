import React, { useState } from 'react';
import './App.css';
import LicensePlates from './components/LicensePlates/LicensePlates';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [lp, setLpInfo] = useState({
    userName:'',
    age:'',
    gender:'',
    registerPlace:'',
    licensePlateID:''
  });
  return (
    <div className="container">
      <div className="title">
        <span>License Plate</span>
        <br />
        <span>&#9886;Tracker&#9887;</span>
        <br />
      </div>
      <div className="forms_container">
        { isLoading ? setIsLoading( isLoading => { isLoading = true})  : <LicensePlates> </LicensePlates> } 
      </div>
      <SearchBar> </SearchBar>
    </div>
  );
};
export default App;
// class App extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       isLoading: false,
//       formData: {
//         textfield1: '',
//         textfield2: '',
//         select1: 1,
//         select2: 1,
//         select3: 1
//       },
//       result: ""
//     };
//   }

//   handleChange = (event) => {
//     const value = event.target.value;
//     const name = event.target.name;
//     var formData = this.state.formData;
//     formData[name] = value;
//     this.setState({
//       formData
//     });
//   }

//   handlePredictClick = (event) => {
//     const formData = this.state.formData;
//     this.setState({ isLoading: true });
//     fetch('http://127.0.0.1:5000/prediction/', 
//       {
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         },
//         method: 'POST',
//         body: JSON.stringify(formData)
//       })
//       .then(response => response.json())
//       .then(response => {
//         this.setState({
//           result: response.result,
//           isLoading: false
//         });
//       });
//   }

//   handleCancelClick = (event) => {
//     this.setState({ result: "" });
//   }

//   render() {
//     const isLoading = this.state.isLoading;
//     const formData = this.state.formData;
//     const result = this.state.result;

//     return (
//       <Container>
//         <div>
//           <h1 className="title">ML React App</h1>
//         </div>
//         <div className="content">
//           <Form>
//             <Form.Row>
//               <Form.Group as={Col}>
//                 <Form.Label>Text Field 1</Form.Label>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Text Field 1" 
//                   name="textfield1"
//                   value={formData.textfield1}
//                   onChange={this.handleChange} />
//               </Form.Group>
//               <Form.Group as={Col}>
//                 <Form.Label>Text Field 2</Form.Label>
//                 <Form.Control 
//                   type="text" 
//                   placeholder="Text Field 2" 
//                   name="textfield2"
//                   value={formData.textfield2}
//                   onChange={this.handleChange} />
//               </Form.Group>
//             </Form.Row>
//             <Form.Row>
//               <Form.Group as={Col}>
//                 <Form.Label>Select 1</Form.Label>
//                 <Form.Control 
//                   as="select"
//                   value={formData.select1}
//                   name="select1"
//                   onChange={this.handleChange}>
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group as={Col}>
//                 <Form.Label>Select 2</Form.Label>
//                 <Form.Control 
//                   as="select"
//                   value={formData.select2}
//                   name="select2"
//                   onChange={this.handleChange}>
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                 </Form.Control>
//               </Form.Group>
//               <Form.Group as={Col}>
//                 <Form.Label>Select 3</Form.Label>
//                 <Form.Control 
//                   as="select"
//                   value={formData.select3}
//                   name="select3"
//                   onChange={this.handleChange}>
//                   <option>1</option>
//                   <option>2</option>
//                   <option>3</option>
//                   <option>4</option>
//                 </Form.Control>
//               </Form.Group>
//             </Form.Row>
//             <Row>
//               <Col>
//                 <Button
//                   block
//                   variant="success"
//                   disabled={isLoading}
//                   onClick={!isLoading ? this.handlePredictClick : null}>
//                   { isLoading ? 'Making prediction' : 'Predict' }
//                 </Button>
//               </Col>
//               <Col>
//                 <Button
//                   block
//                   variant="danger"
//                   disabled={isLoading}
//                   onClick={this.handleCancelClick}>
//                   Reset prediction
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//           {result === "" ? null :
//             (<Row>
//               <Col className="result-container">
//                 <h5 id="result">{result}</h5>
//               </Col>
//             </Row>)
//           }
//         </div>
//       </Container>
//     );
//   }
// }
