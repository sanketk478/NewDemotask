import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';
import Metrics from '../../utils/metrics';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  mainView: {
    height: Metrics.rfv(200),
    marginTop: Metrics.rfv(100),
    paddingHorizontal: Metrics.rfv(20),
    paddingVertical: Metrics.rfv(10),
  },
  labelView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Metrics.rfv(10),
  },
  labelTextStyle: {
    fontSize: Metrics.rfv(16),
  },
  circleGradient: {
    backgroundColor: 'white',
    // borderRadius: 10,
    width: Metrics.rfv(120),
    height: Metrics.rfv(50),
    justifyContent: 'center',
    margin: Metrics.rfv(1),
  },
  visit: {
    margin: Metrics.rfv(4),
    paddingHorizontal: Metrics.rfv(6),
    textAlign: 'center',
    backgroundColor: 'white',
    color: '#008f68',
    fontSize: Metrics.rfv(16),
  },
});
