import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import styles from './ArticleScreenStyle';
import ArticleCard from '../../component/ArticleCard';
import articlelist from '../../data/articleList';
import {FlatList} from 'react-native-gesture-handler';

class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={articlelist}
          renderItem={({item, index}) => <ArticleCard item={item} />}
        />
      </View>
    );
  }
}

export default ArticleScreen;
