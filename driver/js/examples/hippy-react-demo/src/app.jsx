import React from 'react';
import {
  ListView,
  View,
  Image,
  StyleSheet,
  Text,
} from '@hippy/react';

const STYLE_LOADING = 100;
const mockDataArray = [
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
  { style: 1 },
  { style: 2 },
  { style: 3 },
  { style: 4 },
  { style: 5 },
];

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
  moviecard: {
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#001d66',
    height: 100,
    borderWidth: 2,
    position: 'relative',
  },
  posterimage: {
    height: 96,
  },
  scorecontainer: {
    collapsable: false,
    display: 'flex',
    position: 'absolute',
    top: 0,
    fontSize: 14,
  },
  scorebadge: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    margin: 5,
    opacity: 0.3,
    backgroundColor: 'black',
    overflow: 'hidden',
    borderRadius: 12,
  },
  scorespacer: {
    collapsable: false,
    height: 10,
    flexDirection: 'row',
  },
  scorevalue: {
    marginLeft: 5,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  listItemWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
  },
});


function Style1({ index }) {
  return (
    <View style={styles.container}
          onClickCapture={(event) => {
            console.log('onClickCapture style1', event.target.nodeId, event.currentTarget.nodeId);
          }}
          onTouchDown={(event) => {
            // if stopPropagation && return false called at the same time, stopPropagation has higher priority
            event.stopPropagation();
            console.log('onTouchDown style1', event.target.nodeId, event.currentTarget.nodeId);
            return false;
          }}
          onClick={(event) => {
            console.log('click style1', event.target.nodeId, event.currentTarget.nodeId);
            return false;
          }}
    >
      <Text numberOfLines={1}>{ `${index}: Style 1 UI` }</Text>
    </View>
  );
}

function Style2({ index }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>{ `${index}: Style 2 UI` }</Text>
    </View>
  );
}

function Style5({ index }) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>{ `${index}: Style 5 UI` }</Text>
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
    this.delText = 'Delete';
    this.mockFetchData = this.mockFetchData.bind(this);
    this.getRenderRow = this.getRenderRow.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.getRowType = this.getRowType.bind(this);
    this.getRowKey = this.getRowKey.bind(this);
    this.getRowStyle = this.getRowStyle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onAppear = this.onAppear.bind(this);
    this.onDisappear = this.onDisappear.bind(this);
    this.onWillAppear = this.onWillAppear.bind(this);
    this.onWillDisappear = this.onWillDisappear.bind(this);
    this.rowShouldSticky = this.rowShouldSticky.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onDelete({ index }) {
    const { dataSource } = this.state;
    const newData = dataSource.filter((item, i) => index !== i);
    this.setState({
      dataSource: newData,
    });
  }

  async onEndReached() {
    const { dataSource, fetchingDataFlag } = this.state;
    // ensure that only one fetching task would be running
    if (fetchingDataFlag) return;
    this.setState({
      fetchingDataFlag: true,
      dataSource: dataSource.concat([{ style: STYLE_LOADING }]),
    });
    const newData = await this.mockFetchData();
    const newDataSource = dataSource.concat(newData);
    this.setState({ dataSource: newDataSource, fetchingDataFlag: false });
  }
  // item完全曝光
  onAppear(index) {
    console.log('onAppear', index);
  }

  onScroll(obj) {
    console.log('onScroll', obj.contentOffset.y);
    if (obj.contentOffset.y <= 0) {
      if (!this.topReached) {
        this.topReached = true;
        console.log('onTopReached');
      }
    } else {
      this.topReached = false;
    }
  }

  // item完全隐藏
  onDisappear(index) {
    console.log('onDisappear', index);
  }
  // item至少一个像素曝光
  onWillAppear(index) {
    console.log('onWillAppear', index);
  }
  // item至少一个像素隐藏
  onWillDisappear(index) {
    console.log('onWillDisappear', index);
  }
  rowShouldSticky(index) {
    return index === 2;
  }
  getRowType(index) {
    const self = this;
    const item = self.state.dataSource[index];
    return item.style;
  }
  // configure listItem style if horizontal listview is set
  getRowStyle() {
    const { horizontal } = this.state;
    return horizontal ? {
      width: 100,
      height: 50,
    } : {};
  }

  getRowKey(index) {
    return `row-${index}`;
  }

  getRenderRow(index) {
    const { dataSource } = this.state;
    let styleUI = null;
    let imageUrl = '';
    const rowData = dataSource[index];
    const isLastItem = dataSource.length === index + 1;
    switch (rowData.style) {
      case 1:
        //styleUI = <Style1 index={index} />;
        imageUrl = 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/doc/elements_tree.png'
        break;
      case 2:
        //styleUI = <Style2 index={index} />;
        imageUrl = 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/doc/elements_2_na.png'
        break;
      case 3:
          //styleUI = <Style1 index={index} />;
          imageUrl = 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/blog/lynx-in-tiktok.jpg'
        break;
      case 4:
          //styleUI = <Style2 index={index} />;
        imageUrl = 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/blog/lynx-unlock-native-for-more.png'
        break;
      case 5:
        //styleUI = <Style5 index={index} />;
        imageUrl = 'https://lf-lynx.tiktok-cdns.com/obj/lynx-artifacts-oss-sg/lynx-website/assets/lifecycle-init-render-1.png'
        break;
      case STYLE_LOADING:
        styleUI = <Text style={styles.loading}>Loading now...</Text>;
        break;
      default:
      // pass
    }
    return (
<View style={styles.listItemWrapper}>
      <View style={styles.moviecard}>
        <Image style={styles.posterimage} src={imageUrl} resizeMode={Image.resizeMode.cover}/>
        <View style={styles.scorecontainer} >
          <View style={styles.scorebadge}>
            {/* <View style={styles.scorespacer} /> */}
            <Text style={styles.scorevalue}>{`list-item-${index + 1}`}</Text>
          </View>
        </View>
      </View>
      </View>



      // <View style={styles.container}
      //       onClickCapture={(event) => {
      //         console.log('onClickCapture style outer', event.target.nodeId, event.currentTarget.nodeId);
      //       }}
      //       onTouchDown={(event) => {
      //         // outer onTouchDown would not be called, because style1 invoked event.stopPropagation();
      //         console.log('onTouchDown style outer', event.target.nodeId, event.currentTarget.nodeId);
      //         return false;
      //       }}
      //       onClick={(event) => {
      //         console.log('click style outer', event.target.nodeId, event.currentTarget.nodeId);
      //         // return false means trigger bubble
      //         return false;
      //       }}>
      //   <View style={styles.itemContainer}>
      //     {styleUI}
      //   </View>
      //   {!isLastItem ? <View style={styles.separatorLine} /> : null }
      // </View>
    );
  }

  mockFetchData() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockDataArray), 600);
    });
  }

  changeDirection() {
    this.setState({
      horizontal: this.state.horizontal === undefined ? true : undefined,
    });
  }

  render() {
    const { dataSource, horizontal } = this.state;
    return (
      <View style={{ flex: 1, collapsable: false, backgroundColor: '#262c36' }}>
        <ListView
          bounces={true}
          horizontal={horizontal} // horizontal ListView flag
          style={[{ backgroundColor: '#262c36' }, horizontal ? { height: 50 } : { flex: 1 }]}
          numberOfRows={dataSource.length}
          renderRow={this.getRenderRow}
          onEndReached={this.onEndReached}
          getRowType={this.getRowType}
          delText={this.delText}
          editable={true}
          // configure listItem style if horizontal listview is set
          getRowStyle={this.getRowStyle}
          getRowKey={this.getRowKey}
          initialListSize={7}
          scrollEventThrottle={1000} // 1s
          paintType="fcp"
        />
      </View>
    );
  }
}

