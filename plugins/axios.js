import https from "https";

export default function ({$axios, error, i18n}) {
  const agent = new https.Agent({
    rejectUnauthorized: false
  });

  $axios.onRequest(config => {
    // if (process.env.dev) {
    config.httpsAgent = agent;
    // }
  });

  $axios.interceptors.request.use((config) => {
    const locale = i18n.locale
    $axios.setHeader('Language', locale)
    return config
  })
}


