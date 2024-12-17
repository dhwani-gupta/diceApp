import { StatusBar } from 'expo-status-bar';
import {
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import { useState, type PropsWithChildren } from 'react';
// import ReactNativeHapticFeedback from 'react-native-haptic-feedback'
import * as Haptics from 'expo-haptics';

import DiceOne from '../assets/One.png'
import DiceTwo from '../assets/Two.png'
import DiceThree from '../assets/Three.png'
import DiceFour from '../assets/Four.png'
import DiceFive from '../assets/Five.png'
import DiceSix from '../assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const options = {
  enableVibrateFallback: true,
  ignoreAndriodSystermSettings: false
}
const Dice = ({ imageUrl }: DiceProps) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  )
}
export default function App() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne)

  const rollDiceOn = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3:
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  }
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <Pressable
        onPress={rollDiceOn}
      >
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>

      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    // backgroundColor:'',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',


  }
});
