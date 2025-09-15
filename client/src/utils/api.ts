/**
 * API utility functions for handling backend communication
 */

// Get API base URL from environment or default to localhost
const getApiBaseUrl = (): string => {
  // In production (GitHub Pages), use your deployed backend URL
  if (import.meta.env.PROD) {
    return import.meta.env.VITE_API_BASE_URL || 'https://your-backend-url.railway.app';
  }
  // In development, use localhost
  return 'http://localhost:5000';
};

/**
 * Create a full API URL from a relative path
 */
export const createApiUrl = (path: string): string => {
  const baseUrl = getApiBaseUrl();
  return `${baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};

/**
 * Enhanced fetch function with API base URL
 */
export const apiFetch = async (
  path: string,
  options: RequestInit = {}
): Promise<Response> => {
  const url = createApiUrl(path);
  
  // Add default headers
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };
  
  const config: RequestInit = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  
  return fetch(url, config);
};

/**
 * API call with JSON response handling
 */
export const apiCall = async <T = any>(
  path: string,
  options: RequestInit = {}
): Promise<T> => {
  const response = await apiFetch(path, options);
  
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({ message: 'Unknown error' }));
    throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
  }
  
  return response.json();
};

// Contact form submission
export const submitContactForm = async (data: {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}) => {
  return apiCall('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// Quote form submission
export const submitQuoteForm = async (data: any) => {
  return apiCall('/api/quote', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};

// Simple quote form submission
export const submitSimpleQuoteForm = async (data: any) => {
  return apiCall('/api/simple-quote', {
    method: 'POST',
    body: JSON.stringify(data),
  });
};