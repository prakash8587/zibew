import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {style} from './ArticleCardStyle';
import moment from 'moment';

const ArticleCard = (props) => {
  const {item} = props;
  return (
    <TouchableOpacity onPress={props.onPress} style={style.container}>
      <View style={style.imageOuterView}>
        {item.Image && (
          <Image
            style={style.image}
            source={{
              uri: item.Image,
            }}
          />
        )}
        <Text style={style.titleText}>{item.Title}</Text>
      </View>
      <View style={style.bottomView}>
        <View style={style.imgText}>
          <Image
            style={style.vectorIcon}
            source={
              item.HasLikedIt
                ? require('../../assets/heart_selected.png')
                : require('../../assets/heart.png')
            }
          />
          <Text style={style.vectorText}>{item.LikesCount} Likes</Text>
        </View>
        <View style={style.imgText}>
          <Image
            style={style.vectorIcon}
            source={require('../../assets/calendar.png')}
          />
          <Text style={style.vectorText}>
            {moment(item.CreatedOnUtc).format('DD-MM-YYYY')}
          </Text>
        </View>
        <View style={style.imgText}>
          <Image
            style={style.vectorIcon}
            source={
              item.HasBookmarkedIt
                ? require('../../assets/bookmark_selected.png')
                : require('../../assets/bookmark.png')
            }
          />
          <Text style={style.vectorText}>Bookmark</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ArticleCard;
