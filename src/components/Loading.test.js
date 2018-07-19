import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('<Loading />', () => {
  test('it renders null with nothing', () => {
    const tree = renderer
      .create(<Loading error={false} pastDelay={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with error', () => {
    const tree = renderer
      .create(<Loading error={true} pastDelay={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('it renders with pastDelay', () => {
    const tree = renderer
      .create(<Loading error={false} pastDelay={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
