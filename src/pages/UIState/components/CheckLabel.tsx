/*复选组件有多种表现形式，我们先来实现 CheckLabel。主要是使用 useContext 这个 hook。*/
import {Pressable, StyleProp, TextStyle, Text, StyleSheet} from 'react-native';
import {Item} from './CheckContext';
import useCheckContext from '../../../hooks/useCheckContext';

// CheckLabel.tsx

interface CheckLabelProps<T> {
  item: Item<T>;
  style?: StyleProp<TextStyle>;
  checkedStyle?: StyleProp<TextStyle>;
}

export default function CheckLabel({
  item,
  style,
  checkedStyle,
}: CheckLabelProps<any>) {
  const {checked, onPress} = useCheckContext(item);
  // 判断状态  checkeditems是否包含item

  return (
    <Pressable onPress={onPress}>
      <Text
        style={[
          styles.label,
          style,
          checked && [styles.checked, checkedStyle],
        ]}>
        {item.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  label: {
    width: '100%',
    backgroundColor: 'rgb(240,240,240)',
    fontSize: 16,
    alignItems: 'center',
  },
  checked: {
    backgroundColor: 'rgb(33,139,255)',
    color: '#fff',
  },
});
