import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {style} from './ListHeaderStyle';

const ListHeader = (props) => {
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => props.setSelectedTab('All')}
        style={style.textOuterView}>
        <Text
          style={[style.text, props.selectedTab === 'All' && style.textBlue]}>
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.setSelectedTab('Bookmark')}
        style={style.textOuterView}>
        <Text
          style={[
            style.text_bookmark,
            props.selectedTab === 'Bookmark' && style.textBlue,
          ]}>
          Bookmark
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeader;
