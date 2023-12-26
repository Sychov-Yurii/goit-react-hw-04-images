// import css from './Searchbar.module.css';
// import React, { Component } from 'react';
// import Button from '../Button/Button';

// export class Searchbar extends Component {
//   state = {
//     value: '',
//   };

//   handleInputChange = e => {
//     this.setState({ value: e.currentTarget.value.toLowerCase().trim() });
//   };

//   handleFormSubmit = e => {
//     e.preventDefault();
//     this.props.onSubmit(this.state.value);
//     this.setState({ value: '' });
//   };

//   render() {
//     return (
//       <header className={css.searchbar}>
//         <form className={css.searchForm} onSubmit={this.handleFormSubmit}>
//           <Button onClick={this.handleFormSubmit} label="Search" />

//           <input
//             className={css.searchForm_input}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             value={this.state.value}
//             onChange={this.handleInputChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }

// export default Searchbar;

import React, { useState } from 'react';
import css from './Searchbar.module.css';
import Button from '../Button/Button';

const Searchbar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleInputChange = e => {
    setValue(e.currentTarget.value.toLowerCase().trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(value);
    setValue('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handleFormSubmit}>
        <Button onClick={handleFormSubmit} label="Search" />

        <input
          className={css.searchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={value}
          onChange={handleInputChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;
