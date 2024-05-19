export async function fetchApi({
  path,
  method = "GET",
  body,
  contentType = "application/json",
  jwt = true,
}) {
  const apiUrl = process.env.API_URL;
  let jwtAccess = process.env.API_JWT_ACCESS;
  const jwtRefresh = process.env.API_JWT_REFRESH;

  if (jwt) {
    if (!apiUrl || !jwtAccess || !jwtRefresh) {
      console.error("API configuration or JWT tokens are missing.");
      return { error: "API configuration or JWT tokens are missing." };
    }
  }

  // Helper function to make the request with the provided JWT access token
  async function makeRequestWithToken(accessToken) {
    const headers = new Headers({
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": contentType,
    });

    let bodyToSend = body;

    // Check if body is an instance of FormData
    if (body instanceof FormData) {
      // If it's FormData, use it directly
      bodyToSend = body;
    } else {
      // Otherwise, stringify it
      bodyToSend = body ? JSON.stringify(body) : null;
    }

    const fetchOptions = {
      method,
      headers,
      body: bodyToSend,
      cache: "no-store",
    };

    const response = await fetch(`${apiUrl}${path}`, fetchOptions);

    // If access token is expired and response status is 401, try refreshing it
    if (response.status === 401 && accessToken === jwtAccess) {
      return refreshTokenAndRetry(fetchOptions);
    }

    return response;
  }

  // Tries to refresh the token and retries the original request
  async function refreshTokenAndRetry(fetchOptions) {
    const refreshResponse = await fetch(`${apiUrl}/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: jwtRefresh }),
    });

    if (refreshResponse.ok) {
      const refreshData = await refreshResponse.json();
      jwtAccess = refreshData.access; // Update the JWT access token

      // Optionally update the stored token for subsequent requests in the current session
      process.env.REACT_APP_API_JWT_ACCESS = jwtAccess;

      // Retry the original request with the new access token
      fetchOptions.headers.set("Authorization", `Bearer ${jwtAccess}`);
      return await fetch(`${apiUrl}${path}`, fetchOptions);
    } else {
      // Handle failed refresh attempt
      const errorText = await refreshResponse.text();
      throw new Error(`Failed to refresh token: ${errorText}`);
    }
  }

  try {
    const initialResponse = await makeRequestWithToken(jwtAccess);

    if (initialResponse.ok) {
      const data = await initialResponse.json();
      return { data }; // Return the data
    } else {
      const errorText = await initialResponse.text();
      throw new Error(`API request failed: ${errorText}`);
    }
  } catch (error) {
    console.error("Error in API request:", error);
    return { error: error.message || "An unknown error occurred" };
  }
}
