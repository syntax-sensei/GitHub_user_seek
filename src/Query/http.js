export async function getUserData(username) {

      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      return data;

  };