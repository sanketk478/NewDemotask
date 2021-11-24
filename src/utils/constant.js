import Colors from './colors';

export const AppString = {
  MALE: 'Male',
  FEMALE: 'Female',
  NON_BINARY: 'Non-Binary',
  GENDER: 'Gender',
  CHOOSE_ALL: 'Choose all',
};

export const array = [
  {
    id: 1,
    title: AppString.MALE,
    isGradient: false,
    colors: [Colors.grayBorder, Colors.grayBorder],
  },
  {
    id: 2,
    title: AppString.FEMALE,
    isGradient: true,
    colors: [Colors.orange, Colors.yellow],
  },
  {
    id: 3,
    title: AppString.NON_BINARY,
    isGradient: false,
    colors: [Colors.grayBorder, Colors.grayBorder],
  },
];
