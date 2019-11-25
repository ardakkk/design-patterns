// A Singleton only allows for a single instantiation, 
// but many instances of the same object. 
// The Singleton restricts clients from creating multiple objects, 
// after the first object created, it will return instances of itself.
const printer = (function() {
   let printInstance;
   
   function create() {
        
        function print() {
            // underlying printer mechanics
        }
        
        function turnOn() {
            // warm up
            // check for paper
        }

        return {
            // public + private states and behaviors
            print: print,
            turnOn: turnOn,
        };
   }
   
   return {
       getInstance: () => {
           if (!printInstance) {
               printInstance = create();
           }
           
           return printInstance;
       }
   }
})();

const officerPrinter = printer.getInstance();
const officerPrinter = printer.getInstance();
const officerPrinter = printer.getInstance();
const officerPrinter = printer.getInstance();