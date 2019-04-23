import React from 'react';
import Form from './Form';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import uiModel from './Form.test.mock';
import '../../../i18n';

Enzyme.configure({ adapter: new Adapter() });

describe('components/Form', () => {
  test('normal render', () => {
    const onModelChange = modelName => () => modelName;
    const dataModel = { title: 'hello' };
    const formControl = shallow(
      <Form
        dataModel={dataModel}
        uiModel={uiModel.form}
        onModelChange={onModelChange}
      />
    );
    expect(formControl).toMatchSnapshot();
  });
});
