# Currency Converter Mobile App 💱

Welcome to the Currency Converter Mobile App built with React Native! This app allows users to convert between different currencies with ease. Users can input an amount in one currency and see the converted value in another currency. The app supports multiple currencies including USD, LKR, and EUR.

## 🛠 Technologies Used

- **React Native** – A framework for building native apps using React.
- **React Native Paper** – A library that provides material design components for React Native.
- **React Native Dropdown Picker** – For creating dropdown menus for currency selection.

## 🧑‍💻 Setup Instructions

To get started with the project, follow the steps below:

### 1. Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone [https://github.com/madurangaPrabhath/IT3133_ReactNative_Currency_Converter_MobileApp.git]
```

### 2. Navigate to the Project Directory
Go to the project folder:

```bash
cd MobileApp
```

### 3. Install Dependencies
Install the necessary dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

### 4. Run the App
To start the app, use the following command:

```bash
npm start
```

or

```bash
yarn start
```

Your app will be running on your mobile device or emulator.

## 📱 Features

- **Home Page**: Provides the UI for entering the amount, selecting source and destination currencies, and displaying the conversion result.
- **Currency Conversion**: Converts the entered amount from one currency to another based on predefined conversion rates.
- **Error Handling**: Displays an error message if the user enters an invalid amount.
- **Responsive Design**: The app is designed to be used across both iOS and Android platforms.

## 🚀 Deployment

For deployment, you can build the app for Android or iOS using the following commands:

- **For iOS**:
    ```bash
    npx react-native run-ios
    ```

- **For Android**:
    ```bash
    npx react-native run-android
    ```

## 🔧 Components

The app is built using reusable React Native components. Here's an overview of the key components:

- **App.js**: The main entry point of the app where the layout is set up, including the `SafeAreaView`, `KeyboardAvoidingView`, and `Home` component.
- **Home.js**: This is the main functional component where users can input the amount, select currencies, and view the converted amount.
- **DropDownPicker**: Used to display a dropdown menu for selecting currencies.

## 🛠️ Development Tools

- **VS Code** – The recommended code editor for this project.
- **Prettier** – For consistent code formatting.
- **React Native Debugger** – For debugging the app during development.

## 🧑‍🤝‍🧑 Contributing

We welcome contributions to improve the app! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

Please ensure that your code adheres to the project's coding standards and write clear commit messages.

## 🖥 Output

### Example Conversion:

- **Input**: 
  - Amount: `10 USD`
  - From Currency: `USD`
  - To Currency: `LKR`

- **Output**: 
  - Converted Amount: `3,2000 LKR`

![Output1](https://github.com/user-attachments/assets/613d1e5a-4f5d-48ac-a013-7fd893ad26aa)


### Error Handling:

If the user enters an invalid amount, the app will display an error message:
- **Error**: `Please enter a valid amount`

![Output2](https://github.com/user-attachments/assets/ba989717-ff43-4e3f-88e1-dec9cec628db)

---

## 📝 License

This project is licensed under the MIT License – see the LICENSE file for details.
