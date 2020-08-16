import {StyleSheet} from 'react-native';
export const style = StyleSheet.create({
  container: {
    height: 40,
    width: '100%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    marginTop: 12,
  },
  textOuterView: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-end',
    marginRight: 20,
    fontWeight: 'bold',
  },
  text_bookmark: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'flex-start',
    marginLeft: 20,
    fontWeight: 'bold',
  },
  textBlue: {color: 'blue'},
});
