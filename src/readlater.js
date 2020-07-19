import React from 'react';
import axios from 'axios';
import cors from 'cors';
import { Link, withRouter } from 'react-router-dom';

//read later component
class Readlater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      read: [],
    };
  }
  //got read later list from db
  readlater() {
    axios
      .get('http://localhost:5000/readlater')
      .then((result) => {
        console.log(result.data);
        const readlater = result.data;
        this.setState({ read: readlater });
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }

  render() {
    console.log(this.state.read);
    return (
      <div id='zerinmidel'>
        <button onClick={this.readlater.bind(this)} class='favpage'>
          {' '}
          Read later{' '}
        </button>
        <Link to='/auth/Search'>
          {' '}
          <button class='favpage_'>HOME</button>
        </Link>
        <br />
        <br />
        <hr />
        <br />
        {this.state.read.map((element, index) => {
          return (
            <div key={index} id='bigDiv'>
              <br></br>
              <div class='txt'>
                Title: {element.title} <br></br>
                publishedDate:{element.dateOfPublication}
              </div>
              <br />
              <img src={element.img} alt='new' class='sora' />
              <br />
              <br />
              <button
                onClick={() => {
                  //delete one element from read later list
                  axios
                    .delete('http://localhost:5000/removeread')
                    .then((res) => {
                      console.log('DELETED');
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                class='zer'
              >
                {' '}
                Remove{' '}
              </button>
              <br />
              <br /> <hr />
            </div>
          );
        })}
        <br />
      </div>
    );
  }
}

export default withRouter(Readlater);
