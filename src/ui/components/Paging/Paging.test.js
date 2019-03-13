import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Paging from './Paging';
import i18n from '../../../i18n';

Enzyme.configure({ adapter: new Adapter() });

describe('Paging', () => {
  test('renders', () => {
    const pagingComponent = <Paging onPagerChange={() => {}} />;
    const paging = shallow(pagingComponent);
    expect(paging.exists()).toBe(true);
  });

  const onPagerChange = page => page;

  const pagingComponent = (
    <Paging current={5} take={3} count={28} onPagerChange={onPagerChange} />
  );

  test('snapshot', () => {
    const paging = shallow(pagingComponent);
    expect(paging).toMatchSnapshot();
  });

  test('normal view', () => {
    const pagingComponent = (
      <Paging current={1} take={3} count={10} onPagerChange={onPagerChange} />
    );
    const paging = shallow(pagingComponent);

    //Number of buttons Previous + 4 Pages + Next
    expect(paging.find('WithStyles(Button)').length).toBe(6);

    //Text for first button(Previous)
    expect(paging.first('WithStyles(Button)').props().children).toBe(
      'Previous'
    );

    //Text for last button(Next)
    expect(paging.last('WithStyles(Button)').props().children).toBe('Next');

    //onclick for previous button when current is 1
    expect(
      paging
        .find('WithStyles(Button)')
        .at(0)
        .props().onClick
    ).toBeNull();

    //onclick for current button
    expect(
      paging
        .find('WithStyles(Button)')
        .at(1)
        .props().onClick
    ).toBeNull();

    //color for current button (should be secondary)
    expect(
      paging
        .find('WithStyles(Button)')
        .at(1)
        .props().color
    ).toBe('secondary');

    //onclick for non-current button
    expect(
      paging
        .find('WithStyles(Button)')
        .at(2)
        .props().onClick
    ).toBe(2);

    //color for non-current button (should be primary)
    expect(
      paging
        .find('WithStyles(Button)')
        .at(2)
        .props().color
    ).toBe('primary');

    //onclick for Next button
    expect(paging.last('WithStyles(Button)').props().onClick).toBe('n');
  });

  test('full view', () => {
    const paging = shallow(pagingComponent);

    //Number of buttons Previous + 7 Pages + Next
    expect(paging.find('WithStyles(Button)').length).toBe(9);
    expect(paging.find('span').length).toBe(2);
    //span text should be ...
    //expect(paging.find('WithStyles(Button)').text()).toBe('...');

    //Text for first button(Previous)
    expect(paging.first('WithStyles(Button)').props().children).toBe(
      'Previous'
    );

    //Text for last button(Next)
    expect(paging.last('WithStyles(Button)').props().children).toBe('Next');

    //onclick for previous button when current is 1
    expect(
      paging
        .find('WithStyles(Button)')
        .at(0)
        .props().onClick
    ).toBe('p');

    //onclick for current button
    expect(
      paging
        .find('WithStyles(Button)')
        .at(4)
        .props().onClick
    ).toBeNull();

    //color for current button (should be secondary)
    expect(
      paging
        .find('WithStyles(Button)')
        .at(4)
        .props().color
    ).toBe('secondary');

    //onclick for non-current button
    expect(
      paging
        .find('WithStyles(Button)')
        .at(2)
        .props().onClick
    ).toBe(2);

    //color for non-current button (should be primary)
    expect(
      paging
        .find('WithStyles(Button)')
        .at(2)
        .props().color
    ).toBe('primary');

    //onclick for Next button
    expect(paging.last('WithStyles(Button)').props().onClick).toBe('n');
  });
});
