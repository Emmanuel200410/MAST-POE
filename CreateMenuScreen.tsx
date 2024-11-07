import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';

const CreateMenuScreen: React.FC = () => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const handleAddMenuItem = () => {
    if (!dishName || !description || !course || !price) {
      Alert.alert("Error", "Please fill out all fields.");
      return;
    }

    const newMenuItem = {
      id: Math.random().toString(),
      dishName,
      description,
      course,
      price,
    };

    setMenuItems([...menuItems, newMenuItem]);

    // Reset form fields after adding
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
  };

  const handleRemoveMenuItem = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  // Clear all fields and menu items
  const handleClear = () => {
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    setMenuItems([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Course (e.g., Appetizer, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />

      <View style={styles.buttonContainer}>
        <Button title="Add Menu Item" onPress={handleAddMenuItem} />
        <Button title="Clear" onPress={handleClear} color="#888" />
      </View>

      {/* List of menu items */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItemContainer}>
            <Text style={styles.menuItemText}>{item.dishName}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <Text>${item.price}</Text>
            
            {/* Remove Button */}
            <TouchableOpacity
              onPress={() => handleRemoveMenuItem(item.id)}
              style={styles.removeButton}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 8,
  },
  menuItemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    marginTop: 10, // Spacing between the item and the remove button
    backgroundColor: '#f44336',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default CreateMenuScreen;
