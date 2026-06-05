const TOKEN_KEY = 'inventory_access_token';

type RequestOptions = RequestInit & {
  token?: string | null;
};

export function getStoredToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function storeToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_KEY);
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const token = options.token ?? getStoredToken();
  const response = await fetch(path, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message ?? `Request failed with ${response.status}`);
  }

  if (response.status === 204) {
    return undefined as T;
  }

  return response.json() as Promise<T>;
}

export type AuthResponse = {
  accessToken: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    lastLogin: string;
  };
};

export function loginUser(email: string, password: string) {
  return request<AuthResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    token: null,
  });
}

export function getInventory() {
  return request<any[]>('/api/inventory');
}

export function createInventoryItem(data: unknown) {
  return request<any>('/api/inventory', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateInventoryItem(id: string, data: unknown) {
  return request<any>(`/api/inventory/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteInventoryItem(id: string) {
  return request<any>(`/api/inventory/${id}`, {
    method: 'DELETE',
  });
}

export function getLocations() {
  return request<any[]>('/api/locations');
}

export function createLocation(data: unknown) {
  return request<any>('/api/locations', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateLocation(id: string, data: unknown) {
  return request<any>(`/api/locations/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteLocation(id: string) {
  return request<any>(`/api/locations/${id}`, {
    method: 'DELETE',
  });
}

export function getUsers() {
  return request<any[]>('/api/users');
}

export function createUser(data: unknown) {
  return request<any>('/api/users', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export function updateUser(id: string, data: unknown) {
  return request<any>(`/api/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  });
}

export function deleteUser(id: string) {
  return request<any>(`/api/users/${id}`, {
    method: 'DELETE',
  });
}
