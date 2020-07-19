import React from 'react';
import axios from 'axios';
import cors from 'cors';

//showone component => show divs contains result of searching
class Showone extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { titles } = this.props;
    return (
      <div id='s'>
        <div>
          {titles &&
            titles.map((element, index) => {
              return (
                //main div which show the result
                <div key={index} id={`bigDiv-${index}`} class='big-div-item'>
                  <br></br>
                  <div class='txt'>
                    Title: {element.volumeInfo.title}
                    <br />
                    Authors: {element.volumeInfo.authors}
                    <br />
                    Published Date:{element.volumeInfo.publishedDate}
                    <br />
                  </div>
                  <br />
                  <div>
                    {' '}
                    <a
                      href={element.accessInfo.webReaderLink}
                      rel='noopener noreferrer'
                      target='_blank'
                    >
                      <img
                        src={element.volumeInfo.imageLinks.smallThumbnail}
                        alt='new'
                        class='sora'
                      />
                    </a>
                    <br />
                    <br />
                    <button
                      class='zeren'
                      onClick={() => {
                        console.log(element.volumeInfo);
                        var a = element.volumeInfo.title;
                        var b = element.volumeInfo.authors;
                        var c = element.volumeInfo.publishedDate;
                        var d = element.volumeInfo.imageLinks.smallThumbnail;
                        const data = {
                          title: a,
                          author: b,
                          dateOfPublication: c,
                          img: d,
                        };
                        console.log(data);
                        //add one element to favorite list
                        axios
                          .post('http://localhost:5000/book', data)
                          .then((res) => {
                            console.log(res.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      {' '}
                      Add to favorite{' '}
                    </button>
                    <br></br>{' '}
                  </div>
                  <br />
                  <div>
                    {' '}
                    <button
                      class='zeren'
                      onClick={() => {
                        console.log(element.volumeInfo);
                        var a = element.volumeInfo.title;
                        var c = element.volumeInfo.publishedDate;
                        var d = element.volumeInfo.imageLinks.smallThumbnail;
                        const data = {
                          title: a,
                          dateOfPublication: c,
                          img: d,
                        };
                        console.log(data);
                        //add one element to read later list
                        axios
                          .post('http://localhost:5000/readbook', data)
                          .then((res) => {
                            console.log(res.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }}
                    >
                      {' '}
                      READ Later{' '}
                    </button>
                    <br />
                    <hr />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default Showone;
