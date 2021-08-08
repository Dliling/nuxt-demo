/**
 * @file axios plugin
 */

export default function ({$axios}) {
  $axios.interceptors.request.use(
    config => config,
    error => {
      return Promise.reject(error);
    }
  );

  $axios.interceptors.response.use(
    response => {
      // TODO: data strction
      if (response.data.code === 200) {
        return response.data;
      }
      return Promise.reject(response);
    },
    error => {
      return Promise.reject(error);
    }
  )
};
