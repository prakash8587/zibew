import * as types from '../../utils/actionTypes';

const INITIAL_STATE = {
  articlelistData: [
    {
      HasLikedIt: false,
      HasBookmarkedIt: false,
      Comments: [
        {
          Id: 1,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:09.1',
          UpdatedOnUtc: '2019-08-29T10:37:09.1',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 2,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:18.757',
          UpdatedOnUtc: '2019-08-29T10:37:18.757',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 3,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:19.647',
          UpdatedOnUtc: '2019-08-29T10:37:19.647',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 4,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:20.237',
          UpdatedOnUtc: '2019-08-29T10:37:20.237',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 5,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:20.743',
          UpdatedOnUtc: '2019-08-29T10:37:20.743',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 6,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:21.233',
          UpdatedOnUtc: '2019-08-29T10:37:21.233',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 7,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:21.88',
          UpdatedOnUtc: '2019-08-29T10:37:21.88',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 8,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Awesomeness',
          CreatedOnUtc: '2019-08-29T10:37:22.363',
          UpdatedOnUtc: '2019-08-29T10:37:22.363',
          UserName: null,
          UserImage: null,
        },
        {
          Id: 9,
          HealthArticleId: 1,
          CustomerId: 1,
          CommentText: 'Test',
          CreatedOnUtc: '2019-08-29T10:45:12.267',
          UpdatedOnUtc: '2019-08-29T10:45:12.267',
          UserName: null,
          UserImage: null,
        },
      ],
      Id: 1,
      Title: 'Blocking fatty acids slows prostate cancer',
      Description:
        '<header><em>Medicine</em> shows that fatty acids fuel prostate tumour growth. As blocking fatty acids seems to slow disease progression, fatty acid uptake may be a promising new therapeutic target for prostate cancer.</header>\r\n<div class="photobox_right"> </div>\r\n<p>Renea Taylor, the deputy director of the Cancer Program at the Monash Biomedicine Discovery Institute in Clayton, Australia, and Prof. Matthew Watt, the head of the Physiology Department at the University of Melbourne, also in Australia, led the new research.</p>\r\n<p>As Taylor, Prof. Watt, and their colleagues mention in their paper, even though prostate cancer grows slowly, preventing it from reaching an aggressive stage remains difficult.</p>\r\n<p>The researchers wondered what it is that causes prostate tumors to become so aggressive. They wanted to determine what fuels the tumors and how prostate cancer metabolism differs from that of other cancers</p>\r\n<div id="onequarter-of-article"> </div>\r\n<p>Taylor explains what pointed the researchers in the direction of fatty acids. "There is a strong link between obesity, diet, and poor outcomes in men who develop prostate cancer," she says.</p>\r\n<p>"In particular, those men who consume more saturated fatty acids seem to have more aggressive cancer."</p>\r\n<p>So, the scientists set out to examine more closely the role of fatty acids in prostate tumor growth.</p>\r\n<p> </p>\r\n<p><img src="/images/uploaded/pill (1).png" alt="" width="128" height="128" /></p>',
      Image:
        'https://firstmed.azurewebsites.net/images/thumbs/0000229_450.jpeg',
      CreatedOnUtc: '2019-04-25T05:23:46.94',
      LikesCount: 0,
      CommentsCount: 9,
      BookmarksCount: 5,
      IsActive: true,
      PictureId: 229,
      CategoryIds: [2],
    },
    {
      HasLikedIt: false,
      HasBookmarkedIt: true,
      Comments: [],
      Id: 2,
      Title: 'Fasting boosts metabolism and fights aging',
      Description:
        '<header>The latest study to explore the impact of fasting on the human body concludes that it increases metabolic activity more than previously realized and may even impart anti-aging benefits.</header>\r\n<div class="photobox_right"> </div>\r\n<p>Studies have shown that intermittent fasting can help certain people lose weight.</p>\r\n<p>Although researchers are still debating exactly how effective fasting can be for weight loss, new research hints at other benefits.</p>\r\n<p>In rats, for instance, studies show that fasting can increase lifespan.</p>\r\n<p>Although exciting, evidence of this in humans has yet to be seen.</p>\r\n<p>The most recent study — which the authors have now published in the journal <em>Scientific Reports — </em>takes a fresh look at fasting in humans and provides new insight.</p>\r\n<div id="onequarter-of-article"> </div>\r\n<p>"Recent aging studies have shown that caloric restriction and fasting have a prolonging effect on lifespan in model animals," says first study author Dr. Takayuki Teruya, "but the detailed mechanism has remained a mystery."</p>\r\n<p>In particular, scientists at the Okinawa Institute of Science and Technology Graduate University in Japan examined its impact on metabolism.</p>\r\n<p>By understanding the metabolic processes involved, the team hopes to find ways of harnessing the benefits of fasting without the need to go without food for prolonged periods.</p>\r\n<p>To investigate, they fasted four volunteers for 58 hours. Using metabolomics, or the measurement of metabolites, the researchers analyzed whole blood samples at intervals during the fasting period.</p>',
      Image: 'http://4287-31622.el-alt.com/images/thumbs/0000231_450.jpeg',
      CreatedOnUtc: '2019-05-31T06:05:59.303',
      LikesCount: 1,
      CommentsCount: 0,
      BookmarksCount: 4,
      IsActive: true,
      PictureId: 231,
      CategoryIds: [],
    },
    {
      HasLikedIt: false,
      HasBookmarkedIt: true,
      Comments: [],
      Id: 3,
      Title: 'Test article',
      Description: '<p>Test article</p>',
      Image: 'http://firstmed.azurewebsites.net/images/thumbs/0004760_450.jpeg',
      CreatedOnUtc: '2020-07-09T07:27:20.117',
      LikesCount: 0,
      CommentsCount: 0,
      BookmarksCount: 1,
      IsActive: true,
      PictureId: 4760,
      CategoryIds: [12],
    },
  ],
  isLoading: false,
  fetchArticleStatus: undefined,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.FETCH_ARTICLE:
      return {
        ...state,
        isLoading: false,
      };

    case types.FETCH_ARTICLE_SUCCESS:
      console.log('ActionAction', action);
      return {
        ...state,
        isLoading: false,
        articlelistData:
          action.payload &&
          action.payload.Response &&
          action.payload.Response.articles,
        fetchArticleStatus: 'success',
      };

    case types.FETCH_ARTICLE_FAILURE:
      return {
        ...state,
        isLoading: false,
        articlelistData: [],
        fetchArticleStatus: 'fail',
      };
    default:
      return state;
  }
};
