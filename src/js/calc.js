module.exports = {
    addTwoNumbers: function(a,b) {
        return a + b;
    },

    subTwoNumbers: function(a,b){
        return a - b;
    },

    multTwoNumbers: function(a,b){
        return a * b;
    },

    divideTwoNumbers: function(a,b){
        if (b !== 0)
            return a / b;
        else
            return 'You cant divide by 0';

    }
};
