import React from 'react';
import { Ionicons } from '@expo/vector-icons';



interface TabBarIconProps {
    name: string,
    isFocused: boolean
}

const TabBarIcon: React.FC<TabBarIconProps> = (props) => {
    return (
        <Ionicons name={props.name} size={26} style={{ marginBottom: -3 }} color={!props.isFocused ? "#ccc" : "#2f95dc"} />
    );
}

export default TabBarIcon;
