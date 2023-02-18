import React from 'react';
import { List } from 'antd';

import ItemComp from './Item';
import Header from './Header';
import { useSelector } from 'react-redux';


const Column = () => {
    const column = useSelector((state: any) => state.column.columns)
    return (
        
        column.map((value: any) => {
            return (
                <div style={{ display: 'flex' }}>
                    <List
                        key={value}
                        header={
                            <Header
                                label={value.title}

                            />
                        }
                    // dataSource={columnItems}
                    // renderItem={({ label: itemLabel, id }) => (
                    //     <ItemComp
                    //         label={itemLabel}
                    //         id={id}
                    //         onDeleteItem={() => onDeleteItem(id)}
                    //         onEditItem={() => onEditItem(id)}
                    //     />
                    // )}
                    />
                </div>
            )
        }
        )

    );
};

export default Column;
