// AsyncStorageUtils.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

// const STORAGE_KEY = 'myData';

export const getData = async (STORAGE_KEY: any) => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Error reading data from AsyncStorage', e);
  }
};

export const storeData = async (STORAGE_KEY: any, data: any) => {
  try {
    const jsonData = JSON.stringify(data);
    await AsyncStorage.setItem(STORAGE_KEY, jsonData);
  } catch (e) {
    console.error('Error storing data in AsyncStorage', e);
  }
};

export const addDataItem = async (STORAGE_KEY: any, newItem: any) => {
  const existingData = await getData(STORAGE_KEY);
  const newData = existingData ? [...existingData, newItem] : [newItem];
  await storeData(STORAGE_KEY, newData);
};

export const updateDataItem = async (STORAGE_KEY: any, itemId: string, updatedItem: any) => {
  const existingData = await getData(STORAGE_KEY);
  if (existingData) {
    const updatedData = existingData.map((item: any) =>
      item.id === itemId ? { ...item, ...updatedItem } : item
    );
    await storeData(STORAGE_KEY, updatedData);
  }
};

export const deleteDataItem = async (STORAGE_KEY: any, itemId: string) => {
  const existingData = await getData(STORAGE_KEY);
  if (existingData) {
    const updatedData = existingData.filter((item: any) => item.id !== itemId);
    await storeData(STORAGE_KEY, updatedData);
  }
};
