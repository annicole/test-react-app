export async function getPeople(page=1) {
  try {
    const response = await fetch(`https://swapi.dev/api/people?page=${page}`);
    if (!response.ok) {
      throw new NetWorkError();
    }
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
}


export async function getCharacter(id) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/${id}`);
      if (!response.ok) {
        throw new NetWorkError();
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }

  export async function searchCharacter(text) {
    try {
      const response = await fetch(`https://swapi.dev/api/people/?search=${text}`);
      if (!response.ok) {
        throw new NetWorkError();
      }
      const data = await response.json();
      return data;
    } catch (e) {
      throw e;
    }
  }


class NetWorkError extends Error {
  constructor() {
    super("Network error!");
  }
}
