import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  imageOuterView: {flex: 1},
  img: {flex: 1},
  bottomView: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: -40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
  },
  backArrow: {
    position: 'absolute',
    zIndex: 1,
    top: Platform.OS === 'android' ? 20 : 60,
    left: 16,
    height: 30,
    width: 30,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backImg: {height: 16, width: 16},
  titleText: {
    fontSize: 32,
    color: '#212121',
    fontWeight: '500',
    marginTop: 8,
  },
  bannerTextView: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    width: 60,
    borderRadius: 8,
  },
  bannerText: {
    color: '#FFF',
    fontSize: 16,
  },
  bannerTextOuterView: {
    position: 'absolute',
    bottom: 60,
    width: '80%',
    marginLeft: 16,
  },
  smallIconOuterView: {
    flexDirection: 'row',
    marginTop: -25,
    alignSelf: 'flex-end',
  },
  whiteCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowRadius: 4,
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4,
  },
  icon: {height: 20, width: 20},
  name: {fontWeight: 'bold', fontSize: 18},
  flexRow: {flexDirection: 'row'},
  nameDate: {justifyContent: 'center'},
  date: {color: '#404040', fontSize: 16},
  description: {
    lineHeight: 22,
    fontSize: 18,
    color: '#404040',
    marginTop: 16,
    height: '34%',
  },
  bottomImg: {height: 100, width: 150, marginLeft: 16, borderRadius: 12},
  bottomImgView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 12,
  },
});
