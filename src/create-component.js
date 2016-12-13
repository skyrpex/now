import Vue from 'vue';
import moment from 'moment';
import { memoize } from 'lodash';

export default memoize(interval => new Vue({
  data: {
    now: moment(),
  },
  created() {
    setInterval(() => {
      this.now = moment();
    }, interval);
  },
}));
