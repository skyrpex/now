import remember from './remember';
import createComponent from './create-component';

const defaultOptions = {
  name: 'now',
  interval: 1000,
};

const components = {};

export default ({ name, interval } = defaultOptions) => {
  const component = remember(components, interval, () => createComponent(interval));

  return {
    computed: {
      [name]() {
        return component.$data.now;
      },
    },
  };
};
