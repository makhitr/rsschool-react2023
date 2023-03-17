import React from 'react';

class SearchBar extends React.Component {


  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder='Search...' />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
