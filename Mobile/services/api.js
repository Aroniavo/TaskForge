import axios from 'axios';
import { Platform } from 'react-native';

// For Android emulator, localhost is 10.0.2.2.
// For iOS simulator, localhost is localhost.
// Replace with your computer's local network IP (e.g., 192.168.1.x) if testing on a physical device.
const getBaseUrl = () => {
  // Use your computer's local network IP to allow physical devices to connect
  // Make sure your phone and computer are on the same Wi-Fi.
  return 'http://192.168.0.104:5000';
};

const api = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
