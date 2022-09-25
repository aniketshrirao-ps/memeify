import {View} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMemes } from '../../redux/slices/memes';
import { TextInput } from 'react-native-gesture-handler';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memes);

  const handleSearch = text => {
    const newData = memes.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.includes(textData);
    });
    dispatch(setMemes(newData));
    setSearchQuery(text);
  };

  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 10,
        borderRadius: 20,
      }}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={searchQuery}
        onChangeText={searchTerm => handleSearch(searchTerm)}
        placeholder="Search"
        style={{backgroundColor: '#fff', paddingHorizontal: 20}}
      />
    </View>
  );
};

export default Search;
