import {useContext} from 'react';
import {CheckContext, Item} from '../pages/UIState/components/CheckContext';

function useCheckContext(item: Item<any>) {
  const {checkedItems, setCheckdItems} = useContext(CheckContext);
  const checked = checkedItems?.includes(item);

  const onPress = () => {
    if (checked) {
      // 将item 在checkedItem中去掉
      setCheckdItems(checkedItems.filter(it => it !== item));
    } else {
      setCheckdItems([...checkedItems, item]);
    }
  };

  return {
    onPress,
    checked,
  };
}

export default useCheckContext;
