var Subject = function() {
    this.observers = [];
    
    return {
        subscribeObserver: (observer) => {
            this.observers.push(observer);
        },
        unsubscribeObserver: (observer) => {
            const index = this.observers.indexOf(observer);
            
            if (index > -1) {
                this.observers.slice(index, 1);
            }
        },
        notifyObserver: (observer) => {
            const index = this.observers.indexOf(observer);
            
            if (index > -1) {
                this.observers[index].notify(index + 1);
            }
        },
        notifyAllObservers: () => {
            for (let i = 0; i < this.observers.length; i++) {
                this.observers[i].notify(i + 1);
            }
        }
    }
}

const Observer = function () {
    return {
        notify: (index) => {
            console.log(`Observer ${index} is notified!`);
        }
    }
}

const subject = new Subject();

const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
const observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!