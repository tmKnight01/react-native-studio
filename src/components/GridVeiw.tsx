import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';

import React from 'react';
import {useLayout} from '@react-native-community/hooks';
import {PropsWithChildren} from 'react';

interface GridViewProps {
  style?: StyleProp<ViewStyle>;
  numOfRow?: number;
  spacing?: number;
  verticalSpacing?: number;
}

/*
构建一个栅格系统，将传进来的子组件进行二次包装
*/
export default function GridView({
  style,
  numOfRow = 3,
  spacing = 16,
  verticalSpacing,
  children,
}: PropsWithChildren<GridViewProps>) {
  const {onLayout, width} = useLayout();

  const itemWidth = (width - (numOfRow - 1) * spacing - 0.5) / numOfRow;
  // 通过顶层api React.Children获取当前组件 children的相关信息
  const count = React.Children.count(children);

  return (
    <View style={[styles.container, style]} onLayout={onLayout}>
      {React.Children.map(children, function (child: any, idx) {
        const style = child.props.style;
        return React.cloneElement(child, {
          style: [
            style,
            {
              width: itemWidth,
              marginLeft: idx % numOfRow !== 0 ? spacing : 0,
              /*判断是否是最后一行的最后一个元素,如果是 marginBottom则不需要0 
              如果不是， 则需要增加mariginBottom
              */
              marginBottom:
                Math.floor(idx / numOfRow) < Math.floor((count - 1) / numOfRow)
                  ? verticalSpacing
                  : 0,
            },
          ],
        });
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
});
