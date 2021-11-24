import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import Metrics from '../../utils/metrics';

export default StyleSheet.create({
  circleGradient: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.rfv(15),
    width: Metrics.rfp(14),
    height: Metrics.rfv(55),
    justifyContent: 'center',
    margin: Metrics.rfv(1),
  },
  visit: {
    marginVertical: Metrics.rfv(4),
    textAlign: 'center',
    backgroundColor: Colors.white,
    color: Colors.visit,
    fontSize: Metrics.rfv(16),
  },
  borderStyle: {borderRadius: Metrics.rfv(16)},
  labelTextStyle: {
    fontSize: Metrics.rfv(16),
    textAlign: 'center',
  },
});
