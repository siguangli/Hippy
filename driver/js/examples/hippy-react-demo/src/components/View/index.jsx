import React from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
} from '@hippy/react';

import imageUrl from './defaultSource.jpg';

const styles = StyleSheet.create({
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
  rectangle: {
    width: 160,
    height: 80,
    marginVertical: 10,
  },
  bigRectangle: {
    width: 300,
    height: 300,
    borderColor: '#eee',
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RectangleB: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RectangleC: {
    width: 180,
    height: 180,
  },
});

export default function ViewExpo() {
  const renderTitle = title => (
    <View style={styles.itemTitle}>
      <Text>{title}</Text>
    </View>
  );
  return (
      <View style={[styles.bigRectangle, {
        flexDirection: 'row',
        backgroundColor: 'red' 
      }]}
      onTouchDown={(e) => {
        console.log('onTouchDown View A');
        return false;
      }}
      onTouchMove={(e) => {
        console.log('onTouchMove View A');
        return false;
      }}
      onTouchEnd={(e) => {
        console.log('onTouchEnd View A');
        return false;
      }}
      onTouchCancel={(e) => {
        console.log('onTouchCancel View A');
        return false;
      }}

      >
        <View style={[styles.RectangleB, { backgroundColor: 'yellow' }]} 
              onTouchDown={(e) => {
                console.log('onTouchDown View B');
                return false;
              }}
              onTouchMove={(e) => {
                console.log('onTouchMove View B');
                return false;
              }}
              onTouchEnd={(e) => {
                console.log('onTouchEnd View B');
                return false;
              }}
              onTouchCancel={(e) => {
                console.log('onTouchCancel View B');
                return false;
              }}
        >
            <View style={[styles.RectangleC, { backgroundColor: 'blue' }]} 
                  // onTouchDown={(e) => {
                  //   console.log('onTouchDown View C');
                  //   return false;
                  // }}
                  // onTouchMove={(e) => {
                  //   console.log('onTouchMove View C');
                  //   return false;
                  // }}
                  // onTouchEnd={(e) => {
                  //   console.log('onTouchEnd View C');
                  //   return false;
                  // }}
                  // onTouchCancel={(e) => {
                  //   console.log('onTouchCancel View C');
                  //   return false;
                  // }}
                  //disallowInterceptTouchEvent={true}
                  onClick={() => console.log('onClick View C')}
            />
        </View>
      </View>
  );
}
