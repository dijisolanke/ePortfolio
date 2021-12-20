const config = {
    storyblokiUrl: process.env.STORYBLOK_URL || 'https://gapi.storyblok.com/v1/api',
    storyblokCache: +process.env.STORYBLOK_CACHE || 0 || 1,
  };
  
  export default config;
  