import {StyleSheet,Dimensions} from 'react-native';
const deviceHeight = Dimensions.get('screen').height

export const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',

    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 0,
    marginBottom: 0
},
textStyle:{
    fontSize:15,
    textAlign:'center',
    paddingTop:5,
    paddingRight:55,
    paddingLeft:15,
    width:230
},
titleStyle:{
    fontSize:25,
    textAlign:'center',
    paddingTop:5,
    paddingRight:15,
    paddingLeft:15,
    width:300
},
container: {
    backgroundColor: "#fff"
},
loader: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
},
list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
}
});

