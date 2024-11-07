import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './App';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Sample menu items array
  const [menuItems, setMenuItems] = useState([
    { name: 'Starter Salad', price: 5, course: 'Starter' },
    { name: 'Main Steak', price: 20, course: 'Main' },
    { name: 'Dessert Cake', price: 8, course: 'Dessert' },
    { name: 'Main Pasta', price: 15, course: 'Main' },
  ]);

  const [averagePrices, setAveragePrices] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    // Calculate average price by course
    const courseTotals: { [key: string]: { total: number; count: number } } = {};

    menuItems.forEach(item => {
      if (!courseTotals[item.course]) {
        courseTotals[item.course] = { total: 0, count: 0 };
      }
      courseTotals[item.course].total += item.price;
      courseTotals[item.course].count += 1;
    });

    const averages: { [key: string]: number } = {};
    for (const course in courseTotals) {
      averages[course] = courseTotals[course].total / courseTotals[course].count;
    }

    setAveragePrices(averages);
  }, [menuItems]);

  const handleCreateMenuPress = () => {
    navigation.navigate('CreateMenuScreen');
  };

  const handleMenuPress = () => {
    navigation.navigate('MenuScreen');
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?cs=srgb&dl=close-up-cooking-dinner-46239.jpg&fm=jpg' }}
        style={styles.image}
      />
      <Text style={styles.welcomeMessage}>Welcome to the Christofel App!</Text>

      {/* Display average prices */}
      <Text style={styles.averageTitle}>Average Prices by Course:</Text>
      {Object.keys(averagePrices).map(course => (
        <Text key={course} style={styles.averageText}>
          {course}: ${averagePrices[course].toFixed(2)}
        </Text>
      ))}

      <Button title="Create Menu" onPress={handleCreateMenuPress} />
      <Button title="Go to Menu" onPress={handleMenuPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  welcomeMessage: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    margin: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  averageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  averageText: {
    fontSize: 16,
    color: '#555',
  },
});

export default HomeScreen;
