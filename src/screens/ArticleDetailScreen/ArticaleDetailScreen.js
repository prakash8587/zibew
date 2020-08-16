import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  ScrollView,
  Animated,
} from 'react-native';
import moment from 'moment';
import ArticleCardRound from '../../component/ArticleCardRound/ArticleCardRound';
import {styles} from './ArticleDetailScreenStyle';

class ArticleDetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateToPreviousScreen = () => {
    this.props.navigation.goBack();
  };

  share = () => {
    Share.share({
      message: 'Share your data',
    });
  };

  render() {
    const item = this.props.navigation.getParam('item');
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageOuterView}>
          <TouchableOpacity
            onPress={this.navigateToPreviousScreen}
            style={styles.backArrow}>
            <Image
              style={styles.backImg}
              source={require('../../assets/back.png')}
            />
          </TouchableOpacity>
          {item.Image && (
            <Image source={{uri: item.Image}} style={styles.img} />
          )}
          <View style={styles.bannerTextOuterView}>
            <View style={styles.bannerTextView}>
              <Text style={styles.bannerText}>Travel</Text>
            </View>
            <Text style={styles.titleText}>{item.Title}</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.smallIconOuterView}>
            <View style={styles.whiteCircle}>
              <Image
                style={styles.icon}
                source={
                  item.HasBookmarkedIt
                    ? require('../../assets/bookmark_selected.png')
                    : require('../../assets/bookmark.png')
                }
              />
            </View>
            <TouchableOpacity onPress={this.share} style={styles.whiteCircle}>
              <Image
                style={styles.icon}
                source={require('../../assets/share.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.flexRow}>
            <ArticleCardRound item={item} />
            <View style={styles.nameDate}>
              <Text style={styles.name}>Prakash</Text>
              <Text style={styles.date}>
                {moment(item.CreatedOnUtc).format('MMM DD')} | 2 Min Read
              </Text>
            </View>
          </View>
          <Text style={styles.description}>
            In particular, scientists at the Okinawa Institute of Science and
            Technology Graduate University in Japan examined its impact on
            metabolism. By understanding the metabolic processes involved, the
            team hopes to find ways of harnessing the benefits of fasting
            without the need to go without food for prolonged periods.To
            investigate, they fasted four volunteers for 58 hours.
          </Text>
          {item.Image && (
            <View style={styles.bottomImgView}>
              <Image source={{uri: item.Image}} style={styles.bottomImg} />
              <Image source={{uri: item.Image}} style={styles.bottomImg} />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ArticleDetailScreen;
