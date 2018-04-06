
const React = require('react-native');

const { StyleSheet, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

export default {
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FBFAFA'
  },
  shadow: {
    flex: 1,
    width: null,
    height: null,
  },
  bg: {
    flex: 1,
    marginTop: deviceHeight,
    bottom: 0,
  },
  input: {
    marginTop: -450,
    width:300,
    alignSelf: 'center',

  },
  inputtxt: {
      backgroundColor: '#FBFAFA',
      marginTop:15
  },

  btntxt: {
      color:"#002e97",
      fontSize:14,
      textAlign:'center',
      width:220,
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: 12,
      paddingLeft: 24,
      paddingBottom:12,
      paddingRight: 24,
      fontFamily: 'Helvetica'
  },
    btn: {
    borderRadius:23,
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderColor:'#ccc',
    marginTop:-220,
    borderWidth: 1,
  },

};
