import React, {Component} from 'react';
import {
  View,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import {styles} from './ArticleScreenStyle';
import ArticleCard from '../../component/ArticleCard/ArticleCard';
import ArticleCardRound from '../../component/ArticleCardRound/ArticleCardRound';
import ListHeader from '../../component/ListHeader/ListHeader';
import {fetchArticleList} from '../../redux/action/action';

class ArticleScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'All',
    };
  }

  componentDidMount() {
    const params = {
      CustomerId: 5879,
      lastUpdatedTimeTicks: 0,
    };
    this.props.fetchArticleList(params);
  }

  setSelectedTab = (tab) => {
    this.setState({selectedTab: tab});
  };

  navigateToArticleDetailScreen = (item) => {
    const {navigation} = this.props;
    navigation.navigate('ArticleDetail', {item});
  };

  render() {
    const {selectedTab} = this.state;
    const {articlelistData, isLoading} = this.props;
    return (
      <SafeAreaView style={styles.MainContainer}>
        {isLoading ? (
          <View style={styles.loaderOuterView}>
            <ActivityIndicator size={'large'} color={'#0065FF'} />
            <Text style={styles.loaderText}>Fetching Article List...</Text>
          </View>
        ) : (
          <>
            <ListHeader
              selectedTab={selectedTab}
              setSelectedTab={this.setSelectedTab}
            />
            <FlatList
              data={
                selectedTab === 'Bookmark'
                  ? articlelistData.filter((it) => it.HasBookmarkedIt)
                  : articlelistData
              }
              style={styles.listPadding}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => <ArticleCardRound item={item} />}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
              horizontal
            />
            <FlatList
              data={
                selectedTab === 'Bookmark'
                  ? articlelistData.filter((it) => it.HasBookmarkedIt)
                  : articlelistData
              }
              style={styles.listVertical}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => (
                <ArticleCard
                  onPress={() => this.navigateToArticleDetailScreen(item)}
                  item={item}
                />
              )}
              ItemSeparatorComponent={() => <View style={styles.seperator} />}
              ListFooterComponent={() => <View style={styles.footer} />}
            />
          </>
        )}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    articlelistData: state.articlelistData,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  fetchArticleList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen);
