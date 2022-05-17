function Validator(options) {
    var formE = document.querySelector(options.form);
    console.log(options.rules);
    options.rules.forEach(rule => {
        console.log(rule.selecter);
    });


}

Validator.isRequired = (selecter) => (
    {
        selecter: selecter,
        test: function () {

        }
    }
)
Validator.isEmail = (selecter) => (
    {
        selecter: selecter,
        test: function () {

        }
    }
)

