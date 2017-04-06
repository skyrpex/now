import Vue from 'vue';
import test from 'ava';
import delay from 'delay';
import moment from 'moment';
import { isFunction } from 'lodash';
import now from './dist/now.cjs';

test('creates a moment computed property', (t) => {
  const mixin = now({
    name: 'now',
  });

  t.true(isFunction(mixin.computed.now));

  const vm = new Vue({
    mixins: [mixin],
  });

  t.true(vm.now.unix() === moment().unix());
});

test('updates the computed property at the given interval', async (t) => {
  const vm = new Vue({
    mixins: [now({
      name: 'now',
      interval: 1000,
    })],
  });

  const current = moment();

  t.true(vm.now.unix() === current.unix());

  await delay(1000);

  t.true(vm.now.unix() === current.add(1, 'second').unix());
});
