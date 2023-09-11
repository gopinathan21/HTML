export {};

type CityMap = {
  from: string;
  to: string;
};

const tickets: CityMap[] = [
  { from: 'Kiev', to: 'Prague' },
  { from: 'Prague', to: 'Zurich' },
  { from: 'Zurich', to: 'Amsterdam' },
  { from: 'Amsterdam', to: 'Barcelona' },
  { from: 'Barcelona', to: 'Berlin' },
  { from: 'Berlin', to: 'Paris' },
  { from: 'Paris', to: 'Skopje' },
  { from: 'Skopje', to: 'Amsterdam' },
  { from: 'A', to: 'V' },
];

function findRoute(startCity: string, tickets: CityMap[]) {
  const visited = new Set<string>();
  const route: string[] = [];

  function find(city: string): boolean {
    visited.add(city);
    route.push(city);

    if (route.length === tickets.length + 1) {
      return true;
    }

    const nextCities = tickets
      .filter((ticket) => ticket.from === city)
      .map((ticket) => ticket.to);

    for (const nextCity of nextCities) {
      if (!visited.has(nextCity)) {
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
    return null;
  }
}

const startCity: string = 'Kiev';
const route = findRoute(startCity, tickets);

if (route) {
  console.log('Route traveled:');
  console.log(route.join(' -> '));
} else {
  console.log('No valid route found.');
}
