/*
 * @Author: kael 
 * @Date: 2018-02-01 17:41:25 
 * @Last Modified by: kael
 * @Last Modified time: 2018-02-02 17:39:45
 */

module.exports = class PubSub {

  constructor() {
    this.subscribers = {};
  }

  subscribe(type, fn) {
    // todo subscribe
    if(!this.subscribers[type]) {
      this.subscribers[type] = []
    }
    this.subscribers[type].push(fn)
  }

  unsubscribe(type, fn) {
    // todo unsubscribe
    if(!this.subscribers[type]) {
      return
    }
    let sub = this.subscribers[type]
    const index = sub.indexOf(fn)
    if (index >= 0) {
      sub.splice(index, 1)
    }
  }

  publish(type, ...args) {
    // todo publish
    const sub = this.subscribers[type]
    if(!sub) {
      return
    }
    sub.forEach(fn => {
      fn(...args)
    });
  }

}
