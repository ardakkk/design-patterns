// class TailFactory {
//     constructor(props) {
//         this.tailLength = props.tailLength;
//     }
// }

// class TorsoFactory {
//     constructor(props) {
//         this.color = props.color;
//     }
// }

// class HeadFactory {
//     constructor(props) {
//         this.snoutLength = props.snoutLength;
//     }
// }

// class ReptilePartFactory {
//     constructor(type, props) {
//         if (type === "tail") {
//             return new TailFactory(props);
//         }
//         if (type === "torso") {
//             return new TorsoFactory(props);
//         }
//         if (type === "head") {
//             return new HeadFactory(props);
//         }
//     }
// }

let registeredPartFactories = {};
registeredPartFactories["tail"] = class TailFactory {
    constructor(props) {
        this.tailLength = props.tailLength;
    }
};

registeredPartFactories["torso"] = class TorsoFactory {
    constructor(props) {
        this.color = props.color;
    }
};

registeredPartFactories["head"] = class HeadFactory {
    constructor(props) {
        this.snoutLength = props.snoutLength;
    }
};

let alligator = {};
let alligatorProps = {
    tailLength: 2.5,
    color: "green",
    snoutLength: 1,
};

// gets a tail from the tail factory
alligator.tail = new ReptilePartFactory("tail", alligatorProps);

// gets a torso from the torso factory
alligator.torso = new ReptilePartFactory("torso", alligatorProps);

// gets a head from the head factory
alligatorProps.head = new ReptilePartFactory("head", alligatorProps);