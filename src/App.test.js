import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Showone from './showone';
import App from './App';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

it('renders my app component', () => {
  shallow(<App />);
});

test('snapshot renders', () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('fetches async data', () => {
  const promise = new Promise((resolve, reject) =>
    setTimeout(
      () =>
        resolve({
          data: [
            {
              _id: '5f11a35b317b4246bc260ea9',
              title: '100 Poems by Faiz Ahmed Faiz, 1911-1984',
              dateOfPublication: '2002-01-01',
              img:
                'http://books.google.com/books/content?id=taSGbCRIW5cC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              __v: 0,
            },
            {
              _id: '5f11a373317b4246bc260eab',
              title: 'Memorials of the Hilles Family',
              dateOfPublication: '1928',
              img:
                'http://books.google.com/books/content?id=rfNUAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
              __v: 0,
            },
            {
              _id: '5f11a375317b4246bc260eac',
              title:
                "Investigation of Real Estate Bondholders' Reorganizations, Public Hearings Before a Subcommittee of ... 73:2-74:2",
              dateOfPublication: '1934',
              img:
                'http://books.google.com/books/content?id=cRoVAAAAIAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
              __v: 0,
            },
          ],
        }),
      100
    )
  );
  const wrapper = mount(<Showone />);

  expect(wrapper.find('.big-div-item').length).toEqual(0);

  promise.then(() => {
    expect(wrapper.find('.big-div-item').length).toEqual(3);
  });
});
