import {useStyles, createStyleSheet} from 'styles';
import {View, Image} from 'react-native';
import ellipse1 from 'assets/images/ellipse1.png';
import home from 'assets/images/home.png';
import map from 'assets/images/map.png';
import shoppingBag from 'assets/images/shoppingBag.png';
import user from 'assets/images/user.png';

export interface NavBarProps {
  testID?: string,
}

export function NavBar(props: NavBarProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.rectangle4} testID="12:125"/>
      <Image source={{uri: ellipse1}} style={{width: 41, height: 41}} resizeMode="cover"/>
      <Image source={{uri: home}} style={{width: 20, height: 20}} resizeMode="cover"/>
      <Image source={{uri: user}} style={{width: 20, height: 20}} resizeMode="cover"/>
      <Image source={{uri: shoppingBag}} style={{width: 20, height: 20}} resizeMode="cover"/>
      <Image source={{uri: map}} style={{width: 20, height: 20}} resizeMode="cover"/>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 393,
    height: 53,
    flexShrink: 0,
  },
  rectangle4: {
    width: 393,
    height: 53,
    flexShrink: 0,
    backgroundColor: 'rgba(240, 240, 240, 1)',
  },
}));

