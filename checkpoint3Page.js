var employeeCommands ={
    edit: function (done) {
        this
        .waitForElementVisible ('@employeeManager')
        .click('@searchEmployee')
        .setValue('@searchEmployee','Lyndsi')
        // .moveToElement('@lyndsiJae')
        .waitForElementVisible('@lyndsiJae')
        .click('@lyndsiJae')
        .waitForElementVisible ('@employeeBanner')
        .click('@nameEntry')
        .clearValue('@nameEntry')
        .setValue('@nameEntry', done.name)
        .verify.containsText('@nameEntry', done.result)
        .click('@phoneEntry')
        .clearValue('@phoneEntry')
        .setValue('@phoneEntry', done.phone)
        .verify.containsText('@phoneEntry', done.result)
        .click('@emailEntry')
        .clearValue('@emailEntry')
        .setValue('@emailEntry', done.email)
        .verify.containsText('@titleEntry', done.result)
        .click('@titleEntry')
        .clearValue('@titleEntry')
        .setValue('@titleEntry', done.title)
        .verify.containsText('@titleEntry', done.result)
        .click('@save')
        

        return this
    }

}

module.exports = {
    url:'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
    commands: [employeeCommands],
    elements: {
        searchEmployee:'[name="searchBox"]',
        clearSearch: '[name="clearSearch"]',
        employeeManager: '.titleText',
        nameEntry: '[name="nameEntry"]',
        phoneEntry: '[name="phoneEntry"]',
        emailEntry: '[name="emailEntry"]',
        titleEntry: '[name="titleEntry"]',
        employeeId: '[name="employeeID"]',
        save: '#saveBtn',
        cancel: '[name="cancel"]',
        delete: '[name="delete"]',
        randyMarsh: '[name="employee11"]',
        mrDaniel: '[name="employee64"]',
        sasquatch: '[name="employee67"]',
        sauron: '[name="employee123"]',
        addEmployee: '[name="addEmployee]',
        lyndsiJae: '[name=employee2000000013]',
        employeeBanner: '[name="employeeName"]'
    }
}