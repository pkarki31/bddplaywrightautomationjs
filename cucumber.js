const common = `
            --require setup/assertions.js
            --require setup/hooks.js
            --require step-definitions/**/*.step.js   
            --publish-quiet  

`
module.exports= {
    default: `${common} features/**/*.feature`,
   
}

