import React from 'react';
import { StyleSheet, Text, View, ScrollView } from '@hippy/react';

const styles = StyleSheet.create({
  pageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 20,
  },
  mainRec: {
    backgroundColor: '#4c9afaAA',
    width: 256,
    height: 48,
    marginBottom: 10,
    marginTop: 156,
  },
  title: {
    verticalAlign: 'middle',
    lineHeight: 48,
    height: 48,
    fontSize: 16,
    color: 'white',
    alignSelf: 'center',
  },
  shapeBase: {
    width: 128,
    height: 128,
    backgroundColor: '#4c9afa',
  },
  square: {},
  circle: {
    borderRadius: 64,
  },
  triangle: {
    borderStyle: 'solid',
    borderTopWidth: 0,
    borderRightWidth: 70,
    borderBottomWidth: 128,
    borderLeftWidth: 70,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    borderBottomColor: '#4c9afa',
    backgroundColor: 'transparent',
    width: 140,
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

const VIEW_NAME_MAP = {
  SquarePagerView: 'SquarePagerView',
  TrianglePagerView: 'TrianglePagerView',
  CirclePagerView: 'CirclePagerView',
};

function generateShapePagerView(shapeStyle, name) {
  const ShapePagerView = title => (
    <View style={styles.selectDot}>
    <ScrollView
        horizontal={true}
        bounces={true}
        disallowIntercept={true}
        showsHorizontalScrollIndicator={false} // only iOS support
        showScrollIndicator={false} // only Android support
        onScroll={params => console.log('onScroll', params)}
        onMomentumScrollBegin={params => console.log('onMomentumScrollBegin', params)}
        onMomentumScrollEnd={params => console.log('onMomentumScrollEnd', params)}
        onScrollBeginDrag={params => console.log('onScrollBeginDrag', params)}
        onScrollEndDrag={params => console.log('onScrollEndDrag', params)}
    >
      <Text style={styles.itemStyle}>A</Text>
      <Text style={styles.itemStyle}>B</Text>
      <Text style={styles.itemStyle}>C</Text>
      <Text style={styles.itemStyle}>D</Text>
      <Text style={styles.itemStyle}>E</Text>
      <Text style={styles.itemStyle}>F</Text>
      <Text style={styles.itemStyle}>A</Text>
    </ScrollView>
    </View>
  );
  ShapePagerView.displayName = name;
  return ShapePagerView;
}

export const SquarePagerView = generateShapePagerView(styles.square, VIEW_NAME_MAP.SquarePagerView);
export const TrianglePagerView = generateShapePagerView(styles.triangle, VIEW_NAME_MAP.TrianglePagerView);
export const CirclePagerView = generateShapePagerView(styles.circle, VIEW_NAME_MAP.CirclePagerView);
