const initialState = {
  url: "https://swapi.co/api/people"
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAGE":
      return {
        url: action.payload
      };
    case "PEOPLE":
      return {
        url: "https://swapi.co/api/people"
      };

    case "PLANETS":
      return {
        url: "https://swapi.co/api/planets/"
      };

    case "STARSHIPS":
      return {
        url: "https://swapi.co/api/starships"
      };

    case "VEHICLES":
      return {
        url: "https://swapi.co/api/vehicles"
      };
    case "SPECIES":
      return {
        url: "https://swapi.co/api/species"
      };

    default:
      return state;
  }
};
