import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Article from '../screens/ArticleScreen/ArticleScreen';
import ArticleDetail from '../screens/ArticleDetailScreen/ArticaleDetailScreen';

const AppNavigator = createStackNavigator(
  {
    Article: {screen: Article},
    ArticleDetail: {screen: ArticleDetail},
  },
  {
    initialRouteName: 'Article',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
