import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import ItemSeperator from '../Item/ItemSeperator';
import Search from '../Search';
import Item from '../Item';
import { styles } from '../../styles';

const MemeList = ({loading, dataSource}) => {
  return (  
    <View style={styles.parentContainer}>
        <FlatList
            data={dataSource}
            ItemSeparatorComponent={ItemSeperator}
            ListHeaderComponent={Search}
            renderItem={item => (<Item data={item}/>)}
            keyExtractor={item => item.id}
        />
        {loading &&
            <View style={styles.loader}>
                <ActivityIndicator size="large" color="#0c9" />
                <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
            </View>
        }
    </View>
  )
}

export default MemeList;