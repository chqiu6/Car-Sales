// import React from 'react';

// import Header from './components/Header';
// import AddedFeatures from './components/AddedFeatures';
// import AdditionalFeatures from './components/AdditionalFeatures';
// import Total from './components/Total';

// const App = () => {
//   // const state = {
//   //   additionalPrice: 0,
//   //   car: {
//   //     price: 26395,
//   //     name: '2019 Ford Mustang',
//   //     image:
//   //       'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
//   //     features: []
//   //   },
//   //   additionalFeatures: [
//   //     { id: 1, name: 'V-6 engine', price: 1500 },
//   //     { id: 2, name: 'Racing detail package', price: 1500 },
//   //     { id: 3, name: 'Premium sound system', price: 500 },
//   //     { id: 4, name: 'Rear spoiler', price: 250 }
//   //   ]
//   // };

//   return (
//     <div className="boxes">
//       <div className="box">
//         <Header car={state.car} />
//         <AddedFeatures car={state.car} />
//       </div>
//       <div className="box">
//         <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
//         <Total car={state.car} additionalPrice={state.additionalPrice} />
//       </div>
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { connect } from "react-redux";
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { addFeature,removeFeature } from "./actions/index";

const App = (props) => {
 
console.log("app check", props);
  // const removeFeature = item => {
    
  // };

  // const buyItem = item => {
  //   dispatch({type:"ADD_FEATURE",payload:item});
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures remove = {props.removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures addFeature = {props.addFeature} additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
  return{
  additionalPrice:state.additionalPrice,
  additionalFeatures: state.additionalFeatures,
  car: state.car
  }
}

export default connect(mapStateToProps,{addFeature,removeFeature})(App);
