// api.js
const baseUrl = import.meta.env.VITE_API_ENDPOINT;

async function get(endpoint, params = {}) {
  try {
    const queryParams = new URLSearchParams(params);
    const response = await fetch(
      `${baseUrl}${endpoint}?${queryParams.toString()}`,
    );
    console.log("testing::", response);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response.headers.get("Content-Type").includes("application/json")
      ? response.json()
      : response.text();
  } catch (error) {
    throw error;
  }
}

async function post(endpoint, data = {}) {
  try {
    const token = sessionStorage.getItem(import.meta.env.VITE_JWT_TOKEN_KEY);
    const response = await fetch(`${baseUrl}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      body: JSON.stringify(data),
    });
    const responseBody = response.headers
      .get("Content-Type")
      .includes("application/json")
      ? await response.json()
      : await response.text();

    if (!response.ok) {
      throw new Error(responseBody.message);
    }
    return responseBody;
  } catch (error) {
    throw error;
  }
}

export { get, post };
