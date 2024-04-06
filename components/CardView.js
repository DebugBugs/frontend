import {useStyles, createStyleSheet} from 'styles';
import {View, Text} from 'react-native';

export interface CardViewProps {
  testID?: string,
}

export function CardView(props: CardViewProps) {
  const {styles, theme} = useStyles(stylesheet);

  return (
    <View style={styles.root} testID={props.testID}>
      <View style={styles.rectangle7} testID="12:354"/>
      <Text style={styles.statistics} testID="12:351">
        {`Statistics`}
      </Text>
    </View>
  );
}

const stylesheet = createStyleSheet(theme => ({
  root: {
    width: 364,
    height: 189,
    flexShrink: 0,
  },
  rectangle7: {
    width: 364,
    height: 189,
    flexShrink: 0,
    borderRadius: 18,
    backgroundColor: 'rgba(217, 217, 217, 1)',
  },
  statistics: {
    color: 'rgba(0, 0, 0, 1)',
    fontFamily: 'Mitr',
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '500',
  },
}));

