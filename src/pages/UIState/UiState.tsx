import {useState} from 'react';
import {Text} from 'react-native';
import CheckGroup from './components/CheckGroup';
import CheckLabel from './components/CheckLabel';
import GridView from '../../components/GridVeiw';
import CheckBox from './components/CheckBox';
import {StyleSheet, View, StatusBar} from 'react-native';

interface Item {
  label: string;
  value: string;
}

const langs: Array<Item> = [
  {
    label: 'JavaScript',
    value: 'js',
  },
  {
    label: 'Java',
    value: 'java',
  },
  {
    label: 'OBJC',
    value: 'Objective-C',
  },
  {
    label: 'Golang',
    value: 'go',
  },
  {
    label: 'C#',
    value: 'C#',
  },
];

const companies = [
  {
    label: 'listed',
    value: 'listed',
  },
  {
    label: 'state-owned',
    value: 'S.O',
  },
  {
    label: 'Small Micro',
    value: 'S.M',
  },
];

/*
单选，多选，是很常见的 UI 组件，这里以它们为例，来讲解如何分离布局组件和状态组件，以实现较好的复用性。
*/

function UiState() {
  const [checkedLangs, setCheckedLangs] = useState<Item[]>([]);
  const [company, setCompany] = useState<Item[]>([]);
  return (
    <View style={styles.container}>
      <Text style={{marginVertical: 30, color: 'black', fontSize: 18}}>
        The Language you good at(multiple choices)
      </Text>
      <CheckGroup
        checkedItems={checkedLangs}
        onCheckedItemsChanged={setCheckedLangs}>
        <GridView>
          {langs.map(item => (
            <CheckLabel
              key={item.label}
              item={item}
              style={styles.labelStyle}
            />
          ))}
        </GridView>

        <Text style={{marginVertical: 30, color: 'black', fontSize: 18}}>
          The company you want (multiple choices)
        </Text>
        <CheckGroup checkedItems={company} onCheckedItemsChanged={setCompany}>
          <View style={{flexDirection: 'row'}}>
            {companies.map(item => (
              <CheckBox
                item={item}
                key={item.label}
                style={{fontSize: 16, marginRight: 10}}
                checkStyle={{fontSize: 18, marginRight: 5}}
              />
            ))}
          </View>
        </CheckGroup>
      </CheckGroup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  labelStyle: {
    textAlign: 'center',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default UiState;
