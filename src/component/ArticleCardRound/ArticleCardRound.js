import React from 'react';
import {View, Image, Text} from 'react-native';
import {style} from './ArticleCardRoundStyle';

const ArticleCardRound = ({item}) => {
  return (
    <View style={style.container}>
      <View style={style.imageOuterView}>
        {item.Image && (
          <Image
            style={style.image}
            source={{
              uri: item.Image,
            }}
          />
        )}
      </View>
    </View>
  );
};
export default ArticleCardRound;
