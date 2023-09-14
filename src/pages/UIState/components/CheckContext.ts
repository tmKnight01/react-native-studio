/*为了实现父子组件的跨层级通讯，我们需要使用 React.Context。首先来实现 CheckGroup 组件*/
import React from 'react';

// CheckContext.ts

export interface Item<T> {
    label: string;
    value: T;
}



export interface CheckContext<T> {
    checkedItems: Array<Item<T>>,
    setCheckdItems: (item: Array<Item<T>>) => void;
}


export const CheckContext = React.createContext<CheckContext<any>>({
    checkedItems: [],
    setCheckdItems: () => { }
})



