 /* global describe it assert */

import React from 'react';
import ReactDOM from 'react-dom';
import {Radio} from '../dist/react-onsenui.js';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import rendersToComponent from './testUtil.js';

describe('Radio', function() {
  rendersToComponent(
    <Radio />,
    'ons-radio'
  );
});
