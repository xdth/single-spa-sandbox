// export default function Root(props) {
//   return <section>{props.name} is mounted!</section>;
// }

import React from 'react';

export default function Root(props) {
  console.log('React Microfrontend Mounted!', props);
  return <section>{props.name} is mounted!</section>;
}
