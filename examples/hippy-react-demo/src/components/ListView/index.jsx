import React from 'react';
import { ListView, View, StyleSheet, Text } from '@hippy/react';

const STYLE_LOADING = 100;
const mockDataArray = [{ style: 1 }, { style: 6 }, { style: 5 }];

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    collapsable: false,
  },
  itemContainer: {
    padding: 12,
  },
  separatorLine: {
    marginLeft: 12,
    marginRight: 12,
    height: 1,
    backgroundColor: '#e5e5e5',
  },
  loading: {
    fontSize: 11,
    color: '#aaaaaa',
    alignSelf: 'center',
  },
});

function Style1({ index }) {
  return (
    <View style={{ ...styles.container, height: 100 }}>
      <Text numberOfLines={1}>{`${index}: Style 1 UI`}</Text>
    </View>
  );
}

function Style2({ index }) {
  return (
    <View style={{ ...styles.container, height: 100 }}>
      <Text numberOfLines={1}>{`${index}: Style 2 UI`}</Text>
    </View>
  );
}

function Style5({ index }) {
  return (
    <View style={{ ...styles.container, height: 700 }}>
      <Text numberOfLines={1}>{`${index}: Style 5 UI`}</Text>
    </View>
  );
}

export default class ListExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: mockDataArray,
      fetchingDataFlag: false,
      horizontal: undefined,
    };
    this.getRenderRow = this.getRenderRow.bind(this);
    this.getRowType = this.getRowType.bind(this);
    this.getRowKey = this.getRowKey.bind(this);
    this.getRowShouldSticky = this.getRowShouldSticky.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      // 往列表前面插入 item
      const newArray = [{ style: 1 }, ...this.state.dataSource];
      // const newArray = [...this.state.dataSource, { style: 1 }];
      this.setState({
        dataSource: newArray,
      });
    }, 2000);
  }

  onDelete({ index }) {
    const { dataSource } = this.state;
    const newData = dataSource.filter((item, i) => index !== i);
    this.setState({
      dataSource: newData,
    });
  }

  getRowType(index) {
    const self = this;
    const item = self.state.dataSource[index];
    return item.style;
  }

  getRowKey(index) {
    return `row-${index}`;
    // const self = this;
    // const item = self.state.dataSource[index];
    // return item.style;
  }

  getRowShouldSticky(index) {
    return this.state.dataSource[index].style === 6;
  }

  getRenderRow(index) {
    const { dataSource } = this.state;
    let styleUI = null;
    const rowData = dataSource[index];
    const isLastItem = dataSource.length === index + 1;
    switch (rowData.style) {
      case 1:
        styleUI = <Style1 index={index} />;
        break;
      case 2:
        styleUI = <Style2 index={index} />;
        break;
      case 5:
        styleUI = <Style5 index={index} />;
        break;
      case 6:
        styleUI = (
          <View style={{ ...styles.container, backgroundColor: 'red', height: 100 }}>
            <Text numberOfLines={1}>{`${index}: sticky`}</Text>
          </View>
        );
        break;
      case STYLE_LOADING:
        styleUI = <Text style={styles.loading}>Loading now...</Text>;
        break;
      default:
      // pass
    }
    return (
      <View style={styles.container}>
        <View style={styles.itemContainer}>{styleUI}</View>
        {!isLastItem ? <View style={styles.separatorLine} /> : null}
      </View>
    );
  }

  render() {
    const { dataSource, horizontal } = this.state;
    return (
      <View style={{ flex: 1, collapsable: false }}>
        <ListView
          bounces={false}
          style={[{ backgroundColor: '#ffffff' }, horizontal ? { height: 50 } : { flex: 1 }]}
          numberOfRows={dataSource.length}
          renderRow={this.getRenderRow}
          getRowType={this.getRowType}
          getRowKey={this.getRowKey}
          initialListSize={3}
          rowShouldSticky={this.getRowShouldSticky}
          scrollEventThrottle={150}
        />
      </View>
    );
  }
}
