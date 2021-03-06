import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Controls from 'Controls';

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render Pause when started', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      var $pausebutton = $el.find('button:contains(Pause)');

      expect($pausebutton.length).toBe(1);
    });

    it('should render Start when paused', () => {
      let controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      let $el = $(ReactDOM.findDOMNode(controls));
      var $startbutton = $el.find('button:contains(Start)');

      expect($startbutton.length).toBe(1);
    });
  });
});
