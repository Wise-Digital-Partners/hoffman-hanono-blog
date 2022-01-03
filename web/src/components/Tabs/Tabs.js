import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import tw from 'twin.macro'

import Tab from './Tab';

const StyledTabs = styled.ul`
    .tab-list {
        ${tw`flex justify-between max-w-lg mx-auto mb-20`}
    }
    .tab-list-item {
        ${tw`relative text-sm text-gray-900 md:text-xl font-semibold pb-3 cursor-pointer transition-all duration-300 ease-linear`}
        &.active,
        &:hover {
            &:after {
                ${tw`w-full`}
            }
        }
        &:after {
            ${tw`absolute bg-primary_600 left-0 right-0 bottom-0 w-0 h-2px mx-auto transition-all duration-300 ease-linear`}
            content: '';
        }
    }
`

export default class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <StyledTabs className="tabs">
        <ul className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ul>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </StyledTabs>
    );
  }
}