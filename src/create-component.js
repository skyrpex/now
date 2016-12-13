import Vue from 'vue';
import moment from 'moment';

export default interval => new Vue({
  data: {
    now: moment(),
  },
  created() {
    setInterval(() => {
      this.now = moment();
    }, interval);
  },
});
