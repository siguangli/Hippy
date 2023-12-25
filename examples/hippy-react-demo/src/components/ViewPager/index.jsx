import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ViewPager,
} from '@hippy/react';
import { CirclePagerView, SquarePagerView, TrianglePagerView } from '../../shared/PagerItemView';

const DEFAULT_DOT_RADIUS = 6;
const PAGE_COUNT = 3;

const styles = StyleSheet.create({
  dotContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: DEFAULT_DOT_RADIUS,
    height: DEFAULT_DOT_RADIUS,
    // eslint-disable-next-line no-bitwise
    borderRadius: DEFAULT_DOT_RADIUS >> 1,
    // eslint-disable-next-line no-bitwise
    margin: DEFAULT_DOT_RADIUS >> 1,
    backgroundColor: '#BBBBBB',
    // bottom: 16
  },
  selectDot: {
    backgroundColor: 'red',
  },
  container: {
    height: 800,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  button: {
    width: 120,
    height: 36,
    backgroundColor: '#4c9afa',
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
  itemStyle: {
    width: 100,
    height: 100,
    lineHeight: 100,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#4c9afa',
    fontSize: 80,
    margin: 20,
    color: '#4c9afa',
    textAlign: 'center',
  },
  verticalScrollView: {
    height: 300,
    width: 140,
    margin: 20,
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  itemTitle: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    height: 40,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#e0e0e0',
    borderRadius: 2,
    backgroundColor: '#fafafa',
    padding: 10,
    marginTop: 10,
  },
});

export default class PagerExample extends React.Component {
    state = {
      selectedIndex: 0,
    };

    constructor(props) {
      super(props);
      this.onPageSelected = this.onPageSelected.bind(this);
      this.onPageScrollStateChanged = this.onPageScrollStateChanged.bind(this);
    }

    onPageSelected(pageData) {
      console.log('onPageSelected', pageData.position);
      this.setState({
        selectedIndex: pageData.position,
      });
    }

    onPageScrollStateChanged(pageScrollState) {
      console.log('onPageScrollStateChanged', pageScrollState);
    }

    onPageScroll({ offset, position }) {
      console.log('onPageScroll', offset, position);
    }
    render() {
      const { selectedIndex } = this.state;
      return (
        <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
          <ViewPager
            ref={(ref) => {
              this.viewpager = ref;
            }}
            style={styles.container}
            initialPage={0}
            keyboardDismissMode="none"
            vertical
            scrollEnabled
            onPageSelected={this.onPageSelected}
            onPageScrollStateChanged={this.onPageScrollStateChanged}
            onPageScroll={this.onPageScroll}
          >
           {
              [
               SquarePagerView('squarePager'),
               TrianglePagerView('TrianglePager'),
               CirclePagerView('CirclePager'),
              ]
            }
          </ViewPager>
        </View>
      );
    }
}
