import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import nxPipe from '@feizheng/next-pipe';

const CLASS_NAME = 'react-filter';

export default class extends Component {
  static displayName = CLASS_NAME;

  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  render() {
    const { children, items } = this.props;
    return nxPipe(children, items);
  }
}
