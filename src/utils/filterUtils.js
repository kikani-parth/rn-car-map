export const filterCars = (
  cars,
  nameFilter = '',
  addressFilter = '',
  engineTypeFilter = '',
  fuelFilter = '',
  exteriorFilter = '',
  interiorFilter = ''
) => {
  return cars.filter(
    (car) =>
      // Name filtering
      car.name?.toLowerCase().includes(nameFilter.toLowerCase()) &&
      // Address filtering
      car.address?.toLowerCase().includes(addressFilter.toLowerCase()) &&
      // Engine Type filtering
      car.engineType?.toLowerCase().includes(engineTypeFilter.toLowerCase()) &&
      // Fuel filtering
      (fuelFilter ? car.fuel >= fuelFilter : true) &&
      // Exterior filtering
      car.exterior?.toLowerCase().includes(exteriorFilter.toLowerCase()) &&
      // Interior filtering
      car.interior?.toLowerCase().includes(interiorFilter.toLowerCase())
  );
};
