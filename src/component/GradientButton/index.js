import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import GradientText from '../../component/GradientText';

function GradientButton(props) {
  return (
    <TouchableOpacity>
      <LinearGradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0.5}}
        colors={props.borderColors}
        style={styles.borderStyle}>
        <View style={styles.circleGradient}>
          {props.textGradient ? (
            <GradientText style={styles.labelTextStyle}>
              {props.text}
            </GradientText>
          ) : (
            <Text style={styles.visit}>{props.text}</Text>
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

export default GradientButton;
