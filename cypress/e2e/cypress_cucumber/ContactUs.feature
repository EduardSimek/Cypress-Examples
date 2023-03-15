Feature: Webdriveruniversity - Contact Us Page

    Scenario: Valid Contact Us From Submission
        Given I navigate to the webdriveruniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email adress
        And I type a comment
        And I click on the submit button
        Then I should be presented a succesfull contact us submission message

    

