
import { Image, StyleSheet, Text, View, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen({rounds, userNumber, onStartNewGame}) {

  const {width,height}=useWindowDimensions();
  let imageSize=300;
  if(width<380){
    imageSize=150;
  }
  if(height<400){
    imageSize=80
  }

  const imageStyle={
    width:imageSize,
    height:imageSize,
    borderRadius:imageSize/2
  }

  return <ScrollView style={styles.screen}>
    <View style={styles.rootContainer}>
    <Title>Game Over!</Title>
    <View style={[styles.imageContainer,imageStyle]}>
    <Image style={styles.image} source={require('../assets/images/success.png')}/>
    </View>
    <Text style={styles.summaryText}>Your phone needed 
    <Text style={styles.highligh}> {rounds} </Text> 
    rounds to guess the numbers 
    <Text style={styles.highligh}>{ userNumber} </Text>.
    </Text>
    <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
  </View>
  </ScrollView>
}

export default GameOverScreen;
// const deviceWidth= Dimensions.get('window').width;


const styles=StyleSheet.create({
  screen:{
    flex:1,
  },
  imageContainer:{
    // borderRadius:deviceWidth<380? 75:150,
    // width:deviceWidth<380? 150:300,
    // height:deviceWidth<380? 150:300,
    borderWidth:3,
    borderColor:Colors.primary800,
    overflow:"hidden",
    margin:20
  },
  image:{
    width:'100%',
    height:'100%'
  },
  rootContainer:{
    flex:1,
    padding:24,
    justifyContent:'center',
    alignContent:"center",
    alignItems:'center'
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:"center",
    marginBottom:24
  },
  highligh:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500
  }
});