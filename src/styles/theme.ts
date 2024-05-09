interface iTheme {
  type: string;
  colors: {
    primary: string;
    secondary: string;
    body: string;
    body2: string;
    background: string;
    border: string;
    placeholder: string;
    cardBackground: string;
    chatCardBackground: string;
    success: string;
    error: string;
    warning: string;
    black: string;
  };
}

export const darkTheme: iTheme = {
  type: 'dark',
  colors: {
    primary: '#B278FF',
    secondary: '#41FFC6',
    body: '#EEEEEE',
    body2: '#AAAAAA',
    success: '#51FF77',
    error: '#E64545',
    warning: '#E4AB4F',
    background: '#0E0E0E',
    border: '#141414',
    placeholder: '#555555',
    cardBackground: '#0E0E0E',
    chatCardBackground: '#111111',
    black: '#333',
  },
};

export const lightTheme: iTheme = {
  type: 'light',
  colors: {
    primary: '#864CFF',
    secondary: '#2CC798',
    body: '#333',
    body2: '#333',
    success: '#25D757',
    error: '#F85640',
    warning: '#E4AB4F',
    background: '#EBEBEB',
    border: '#EEE',
    placeholder: '#7b7b7b',
    cardBackground: '#FFF',
    chatCardBackground: '#F4F4F4',
    black: '#333',
  },
};
