import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';

// Sample menu data with images
const initialMenuItems = [
  {
    id: '1',
    dishName: 'Caesar Salad',
    description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan.',
    course: 'Appetizer',
    price: '8.99',
    image: 'https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg',
  },
  {
    id: '2',
    dishName: 'Grilled Salmon',
    description: 'Salmon fillet grilled to perfection with a side of vegetables.',
    course: 'Main',
    price: '18.99',
    image: 'https://www.dinneratthezoo.com/wp-content/uploads/2019/05/grilled-salmon-final-2.jpg',
  },
  {
    id: '3',
    dishName: 'Chocolate Lava Cake',
    description: 'Rich chocolate cake with a gooey molten center.',
    course: 'Dessert',
    price: '6.99',
    image: 'https://cdn.pixabay.com/photo/2015/05/31/12/18/cake-791119_1280.jpg',
  },
  {
    id: '4',
    dishName: 'Spaghetti Carbonara',
    description: 'Classic Italian pasta with eggs, cheese, pancetta, and pepper.',
    course: 'Main',
    price: '14.99',
    image: 'https://cdn.pixabay.com/photo/2017/01/16/19/12/spaghetti-1982290_1280.jpg',
  },
  {
    id: '5',
    dishName: 'Tiramisu',
    description: 'Layered coffee-flavored dessert with mascarpone cheese.',
    course: 'Dessert',
    price: '7.99',
    image: 'https://cdn.pixabay.com/photo/2015/12/07/09/38/tiramisu-1083220_1280.jpg',
  },
  {
    id: '6',
    dishName: 'Caprese Salad',
    description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
    course: 'Appetizer',
    price: '9.99',
    image: 'https://cdn.pixabay.com/photo/2016/05/30/21/34/salad-1421355_1280.jpg',
  },
  {
    id: '7',
    dishName: 'Margherita Pizza',
    description: 'Classic pizza topped with fresh mozzarella, tomatoes, and basil.',
    course: 'Main',
    price: '12.99',
    image: 'https://cdn.pixabay.com/photo/2017/02/24/17/50/pizza-2090295_1280.jpg',
  },
];

const MenuScreen: React.FC = () => {
  const [menuItems, setMenuItems] = useState(initialMenuItems);

  const handleRemoveItem = (id: string) => {
    // Confirm the removal action
    Alert.alert(
      'Confirm Removal',
      'Are you sure you want to remove this item from the menu?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', onPress: () => removeItem(id) },
      ]
    );
  };

  const removeItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }: { item: typeof menuItems[0] }) => (
    <View style={styles.menuItem}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.course}>Course: {item.course}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => handleRemoveItem(item.id)}
      >
        <Text style={styles.removeText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer} // Added for styling
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // Adds shadow on Android
  },
  dishName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  course: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    width: '100%', // Makes the image full width
    height: 200, // Sets a fixed height for images
    borderRadius: 8, // Rounds the corners of the image
    marginBottom: 10, // Space between image and text
  },
  listContainer: {
    paddingBottom: 20, // Adds padding to the bottom of the list
  },
  removeButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  removeText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default MenuScreen;
