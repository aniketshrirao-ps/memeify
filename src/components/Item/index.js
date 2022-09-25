import {TouchableOpacity} from 'react-native-gesture-handler';
import { styles } from '../../styles';
import React from 'react'
import { View, Image, Text } from 'react-native';
const Item = (data) => {
  console.log(data);
  return (
    <TouchableOpacity style={styles.list} >
      <View style={styles.itemCell}>
        <Image style={styles.logo} source={{uri: data.url}} />
        <View>
          <Text style={styles.textStyle}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
