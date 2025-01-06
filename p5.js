const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class MyPromise {
  #state = STATE.PENDING;
  #value = null;
  #successCallbacks = [];
  #failedCallbacks = [];
  #sucessBind = this.#success.bind(this);
  #failureBind = this.#failure.bind(this);
  constructor(callback) {
    try {
      callback(this.#sucessBind, this.#failureBind);
    } catch (e) {
      this.#failure(e);
    }
  }
  #success(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof MyPromise) {
        value.then(this.#sucessBind, this.#failureBind);
        return;
      }
      this.#value = value;
      this.#state = STATE.FULFILLED;
      this.#runCallbacks();
    });
  }
  #failure(value) {
    queueMicrotask(() => {
      if (this.#state !== STATE.PENDING) return;
      if (value instanceof MyPromise) {
        value.then(this.#sucessBind, this.#failureBind);
        return;
      }
      if (this.#failedCallbacks.length === 0) {
        throw new UncaughtPromiseError(value)
      }
      this.#value = value;
      this.#state = STATE.REJECTED;
      this.#runCallbacks();
    });
  }
  #runCallbacks() {
    if (this.#state === STATE.FULFILLED) {
      this.#successCallbacks.forEach((cb) => {
        cb(this.#value);
      });
      this.#successCallbacks = [];
    } else if (this.#state === STATE.REJECTED) {
      this.#failedCallbacks.forEach((cb) => {
        cb(this.#value);
      });
      this.#failedCallbacks = [];
    }
  }
  then(thenCallback, catchCallback) {
    return new MyPromise((resolve, reject) => {
      this.#successCallbacks.push((result) => {
        if (thenCallback === null) {
          resolve(result);
          return;
        }
        try {
          resolve(thenCallback(result));
        } catch (e) {
          reject(e);
        }
      });
      this.#failedCallbacks.push((result) => {
        if (catchCallback === null) {
          reject(result);
          return;
        }
        try {
          resolve(catchCallback(result));
        } catch (e) {
          reject(e);
        }
      });
      this.#runCallbacks();
    });
  }
  catch(callback) {
    this.then(null, callback);
  }
  finally(callback) {
    return this.then(result=>{
      callback()
      return result
    },result => {
      callback()
      throw result
    })
  }
}

class UncaughtPromiseError extends Error {
  constructor(error) {
    super(error)
    this.stack = `(in promise) ${error.stack}`
  }
}

module.exports = MyPromise;
