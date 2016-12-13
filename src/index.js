import createComponent from './create-component';

const defaultOptions = {
  name: 'now',
  interval: 1000,
};


export default ({ name, interval } = defaultOptions) => {
  const component = createComponent(interval);

  return {
    computed: {
      [name]() {
        return component.$data.now;
      },
    },
  };
};
