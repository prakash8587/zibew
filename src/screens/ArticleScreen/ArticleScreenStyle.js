import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
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
});
