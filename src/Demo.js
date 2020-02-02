import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
//import Tree, { TreeNode } from 'rc-tree'
import Tree from 'rc-tree'
import './Demo.css'


const treeData = [
  { key: '0-0', title: 'Server', children:
    [
      { key: '0-0-0', title: 'Proliant DL', children:
        [
          { key: '0-0-0-0', title: 'Gen6' },
          { key: '0-0-0-1', title: 'Gen7' },
          { key: '0-0-0-2', title: 'Gen8' },
          { key: '0-0-0-3', title: 'Gen9' },
          { key: '0-0-0-4', title: 'Gen10' },
        ],
      },
      { key: '0-0-1', title: 'Blade', disableCheckbox: true, children:
          [
            { key: '0-0-1-0', title: 'BL460' },
            { key: '0-0-1-1', title: 'BL6xx' },
          ],
      },
    ],
  },
]

class Demo extends React.Component {
  static propTypes = {
    keys: PropTypes.array,
  };
  static defaultProps = {
    keys: ['0-0-1-0'],
  };
  constructor(props) {
    super(props);
    const keys = props.keys;
    this.state = {
      defaultExpandedKeys: keys,
      defaultSelectedKeys: keys,
      defaultCheckedKeys: keys,
    };
  }
  onExpand = (...args) => {
    console.log('onExpand', ...args);
  };
  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
    //this.selKey = info.node.props.eventKey;

    if (this.tree) {
      console.log(
      //  'Selected DOM node:',
      selectedKeys.map(key => ReactDOM.findDOMNode(this.tree.domTreeNodes[key])),
      );
    }
  };
  onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  onEdit = () => {
    setTimeout(() => {
      console.log('current key: ', this.selKey);
    }, 0);
  };
  onDel = (e) => {
    if (!window.confirm('sure to delete?')) {
      return;
    }
    e.stopPropagation();
  };
  setTreeRef = (tree) => {
    this.tree = tree;
  };
  render() {
    return (
      <div style={{ margin: '0 20px' }}>
        <Tree
          className="myCls"
          showLine={ true }
          showIcon={false}
          checkable
          selectable={ false }
          defaultExpandAll={ true }
          onExpand={this.onExpand}
          defaultSelectedKeys={this.state.defaultSelectedKeys}
          defaultCheckedKeys={this.state.defaultCheckedKeys}
          onSelect={this.onSelect}
          onCheck={this.onCheck}
          treeData={treeData}
        />
      </div>
    );
  }
}
export default Demo