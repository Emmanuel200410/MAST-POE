# MAST-POE
Project Report
Part 2 to Part 3 Changes and Implementation Overview
1. Introduction
This report outlines changes made from Part 2 to Part 3 in the development of our React Native app, which is designed to display restaurant menu items, allow menu creation, and provide price filtering by course type. The report includes an overview of the app's core functionality and specific updates made to the navigation structure and screen components.
2. Changes from Part 2 to Part 3
Navigation Overhaul
•	Custom StackNavigator Integration: In Part 3, we implemented a custom StackNavigator to manage the navigation of various screens within the app. This change provided finer control over navigation behavior and screen configuration, including deprecated properties management.
•	File Modifications:
o	Updated App.tsx to utilize the custom StackNavigator for screen navigation.
o	Defined the routes for all main screens—HomeScreen, CreateMenuScreen, MenuScreen, and FilterScreen—within the custom StackNavigator.
o	Included type definitions to ensure navigation consistency across screens.
HomeScreen Enhancements
•	Navigation Buttons for FilterScreen: Added a button in HomeScreen for navigating to the FilterScreen. This screen enables users to filter menu items by course, enhancing the usability of the app by allowing users to customize their view of menu data.
•	Course Price Calculation Logic: Implemented logic on HomeScreen to dynamically calculate and display average prices by course (e.g., Starter, Main, Dessert). This data is updated every time the menu items list is modified.
FilterScreen Addition
•	Filter Options by Course: Created the FilterScreen component to allow users to filter menu items by course type. This screen uses a selection mechanism to apply filters and displays only items that meet the selected criteria.
3. App Functionality Overview
Purpose
The app provides an interactive menu interface for a restaurant or food business, where users can view, create, and filter menu items by course type. It offers an organized and navigable layout that enables users to manage and explore menu data efficiently.
Core Features
•	HomeScreen:
o	Welcome Display: Shows a welcome message along with an introductory image.
o	Average Prices by Course: Calculates and displays the average price for each course type, offering users a quick overview of price categories.
o	Navigation to Other Screens: Includes buttons for navigating to CreateMenuScreen, MenuScreen, and FilterScreen.
•	CreateMenuScreen:
o	Menu Item Addition: Allows users to add new menu items with attributes such as name, price, and course type.
o	Real-Time Data Update: New items added in this screen appear dynamically on HomeScreen with updated average prices.
•	MenuScreen:
o	Full Menu List Display: Lists all current menu items, providing users a comprehensive view of available options.
o	Details on Items: Displays each item’s details, including its course type and price, enabling users to review menu options conveniently.
•	FilterScreen:
o	Course-Based Filtering: Lets users select course types (e.g., Starter, Main, Dessert) to filter the menu list, allowing for a more tailored browsing experience.
o	Updated Display Based on Selection: Applies the selected filters to display only relevant items, streamlining the user experience for targeted searching.
4. Conclusion
The transition from Part 2 to Part 3 involved implementing a custom StackNavigator for enhanced control over navigation and adding new functionalities to improve the app’s usability. These changes bring added structure and intuitive navigation, making it easier for users to explore menu items, create new entries, and filter options by course type. This app now offers a cohesive and user-friendly experience, with navigation optimized for effective menu management. 


https://github.com/Emmanuel200410/MAST-POE
https://github.com/Emmanuel200410/MAST-POE
Project Report.docx
https://www.youtube.com/watch?v=qy2KNux0woI


