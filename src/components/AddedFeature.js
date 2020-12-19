// import React from 'react';

// const AddedFeature = props => {
//   return (
//     <li>
//       {/* Add an onClick to run a function to remove a feature */}
//       {/* onClick = {() => props.} */}
//       <button className="button">X</button>
//       {props.feature.name}
//     </li>
//   );
// };

// export default AddedFeature;

import React from 'react';

const AddedFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick = {()=>props.remove(props.feature) }className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;