import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Button from '../components/Button';

describe('Button', () => {
  describe('Button behavior', () => {
    it('should call the onclick handler when button is clicked', () => {
      //given
        let fakeFunction = sinon.spy();

        const button = shallow(
          <Button buttonText="Search" handleClick={fakeFunction} />
        );
      //when
      button.simulate('click');

      //then
      expect(fakeFunction.called).toBe(true);
    });
  });
});