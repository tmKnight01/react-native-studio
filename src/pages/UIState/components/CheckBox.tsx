import {
  Pressable,
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useContext} from 'react';
import {Item} from './CheckContext';
import useCheckContext from '../../../hooks/useCheckContext';
import AntDesignIcon from 'react-native-vector-icons/MaterialCommunityIcons';

// CheckBox.tsx

interface CheckBoxProps<T> {
  item: Item<T>;
  style?: StyleProp<TextStyle>;
  checkStyle?: StyleProp<TextStyle>;
}

export default function CheckBox({
  item,
  style,
  checkStyle,
}: CheckBoxProps<any>) {
  const {onPress, checked} = useCheckContext(item);
  
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <AntDesignIcon
          style={checkStyle}
          name={checked ? 'checkbox-marked' : 'checkbox-blank-outline'}
          color={checked ? 'rgb(33,139,255)' : 'gray'}
        />
        <Text style={[styles.textStyle, checked && styles.checkedStyle, style]}>
          {item.label}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkedStyle: {
    fontSize: 16,
    color: 'rgb(33,139,255)',
  },
  textStyle: {
    fontSize: 16,
  },
});
