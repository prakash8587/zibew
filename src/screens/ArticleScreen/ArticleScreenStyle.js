import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFF',
  },
  LoadingView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    height: '100%',
    width: '100%',
    opacity: 0.8,
    zIndex: 1,
    justifyContent: 'center',
  },
  LoadingText: {
    color: 'white',
    textAlign: 'center',
  },
  listPadding: {padding: 16, height: 120},
  listVertical: {padding: 16},
  seperator: {height: 20},
  footer: {height: 60},
  loaderOuterView: {
    height: 200,
    width: 200,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  loaderText: {alignSelf: 'center', marginTop: 30, fontSize: 16},
});
