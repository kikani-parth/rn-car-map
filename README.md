# Car Map

A mobile application built with React Native that displays an interactive car map. This project demonstrates how to integrate map functionalities into a React Native app, allowing you to display car markers and navigate around a map interface.

## Features

- Map Integration: Displays an interactive map for viewing car locations.

- Car Markers: Visual indicators for car positions on the map.

- Pin Selection: When a car pin is clicked:

    - All other pins disappear, focusing attention on the selected car.

    - The selected car's name appears above its pin, making it easy to identify.

- Filter & Sort: Easily filter and sort the car listings to quickly find the desired vehicle.

- User Location : Displays user's current location on the map.

- Intuitive UI: Built with React Native and Expo to deliver a smooth and responsive experience across multiple devices.


## Installation

1. Clone the repository:

```bash
git clone https://github.com/kikani-parth/rn-car-map.git
cd rn-car-map
```

2. Install dependencies:

```bash
npm install
```

3. Run the app:

```bash
npx expo start
```
    
## Usage

- The user can view the car list on the 'Car List' tab.
<img src="https://github.com/user-attachments/assets/2c3506e5-d124-479f-bf58-c447bc073443" width="200" alt="Car List">

<br><br>

- The list can be filtered by name, address, engine type, fuel, etc. The user also has the option to sort the list by name and fuel.
<img src="https://github.com/user-attachments/assets/1ba2b1b9-17b1-4652-92ab-189ff838880d" width="200" alt="Car List (filter view)">

<br><br>

- The 'Car Map' tab renders an interactive map which displays all car pins.
<img src="https://github.com/user-attachments/assets/39ba005f-ebfd-437a-b69b-d514bb808ecb" width="200" alt="Map (all cars)">

<br><br>

- The user can select a pin and the other pins will disappear. Additionally, the selected pin's name (car name) will appear on top of it.
<img src="https://github.com/user-attachments/assets/737c1f6a-bd59-4b2c-9457-d5c118b7b075" width="200" alt="Map (single car)">

<br><br>

- The Map also shows the user's current location.
<img src="https://github.com/user-attachments/assets/bfd52818-2e29-407d-892b-07c3234c5764" width="200" alt="Map (user location)">
