import AsyncStorage from "@react-native-async-storage/async-storage";


export const saveDashboardItems = async (key, itemsForSave) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(itemsForSave));
  } catch (error) {
    console.error(error);
  }
};

export const loadDashboardItems = async (key, setter) => {
  try {
    const data = await AsyncStorage.getItem(key);
    if (data !== null) {
      setter(JSON.parse(data));
    }
  } catch (error) {
    console.error(error);
  }
};

export enum FaceTypes {
  blue = 'blue',
  green = 'green',
  orange = 'orange',
  purple = 'purple',
  red = 'red',
  yellow = 'yellow',
};

export const usersBar = {
  'blue': require('@/assets/images/bars/bar-blue.png'),
  'green': require('@/assets/images/bars/bar-green.png'),
  'orange': require('@/assets/images/bars/bar-orange.png'),
  'purple': require('@/assets/images/bars/bar-purple.png'),
  'red': require('@/assets/images/bars/bar-red.png'),
  'yellow': require('@/assets/images/bars/bar-yellow.png'),
};

export function getRandomItemFromArray(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

