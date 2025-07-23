import mixpanel from 'mixpanel-browser';

const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

export const initMixpanel = () => {
  if (typeof window !== 'undefined' && token) {
    mixpanel.init(token, { debug: false });
  }
};

export default mixpanel; 