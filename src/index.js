import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter } from 'react-router-dom';

const theme = createTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Courier',
			'monospace',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
		button: {
			textTransform: 'none',
		},
	},
	palette: {
		primary: {
			main: '#f6f8fa',
		},
		secondary: {
			main: '#ff1493',
			light: 'dodgerblue',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
