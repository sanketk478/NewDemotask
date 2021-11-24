import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GradientText from '../../component/GradientText';
import GradientButton from '../../component/GradientButton';
import {AppString, array} from '../../utils/constant';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <View style={styles.labelView}>
          <Text style={styles.labelTextStyle}>{AppString.GENDER}</Text>
          <TouchableOpacity>
            <GradientText style={styles.labelTextStyle}>
              {AppString.CHOOSE_ALL}
            </GradientText>
          </TouchableOpacity>
        </View>
        <View style={styles.ButtonView}>
          {array.map(item => {
            return (
              <GradientButton
                text={item.title}
                borderColors={item.colors}
                textGradient={item.isGradient}
                key={item.id}
              />
            );
          })}
        </View>
      </View>
    </View>
  );
}

export default HomeScreen;
