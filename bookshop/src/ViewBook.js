import React, { Component } from 'react';

class ViewBook extends React.Component {
    render() {
      const { books, location } = this.props;
  
      if (!books.length || !location) {
          return (<div>Loading...</div>);
      }
  
      const book = books.find(p => p.id == location.query.id);
  
      return book ? (
        <div>
          <h1>{book.title}</h1>
          <p>{book.price}</p>
        </div>
      ) : (
        <div>Error: Book doesn't exist</div>
      );
    }
  }

export default ViewBook;
