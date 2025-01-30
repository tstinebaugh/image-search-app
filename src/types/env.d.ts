declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_PIXABAY_API_KEY: string;
    }
  }
}

export {};
