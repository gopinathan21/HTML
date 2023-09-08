// Define the available train tickets as a map where the keys are the departure cities and the values are the destination cities.
const tickets = {
    Kiev: 'Prague',
    Prague: 'Zurich',
    Zurich: 'Amsterdam',
    Amsterdam: 'Barcelona',
    Barcelona: 'Berlin',
    Berlin: 'Kiev',
    Paris: 'Skopje',
    Skopje: 'Paris',
    Berlin: 'Amsterdam',
  };
  
  // Function to find the route using find
  function findRoute(startCity, tickets) {
    const visited = new Set();
    const route = [];
  
    function find(city) {
      visited.add(city);
      route.push(city);
  
      if (route.length === Object.keys(tickets).length + 1) {
        // If all cities have been visited, we found the route
        return true;
      }
  
      for (const nextCity of Object.keys(tickets)) {
        if (!visited.has(nextCity) && tickets[city] === nextCity) {
          if (find(nextCity)) {
            return true;
          }
        }
      }
  
      visited.delete(city);
      route.pop();
      return false;
    }
  
    if (find(startCity)) {
      return route;
    } else {
      return null; // No valid route found
    }
  }
  
  // Find and print the route starting from Kiev
  const startCity = 'Kiev';
  const route = findRoute(startCity, tickets);
  
  if (route) {
    console.log('Route traveled by your son:');
    console.log(route.join(' -> '));
  } else {
    console.log('No valid route found.');
  }
  