# Bluemix Open Source Github.io page

The Bluemix.github.io page is where Bluemix sample links be displayed.
The repo a a JSON file inside the data folder in which the all the focus needed there to update and maintain.
When updating the JSON data file, we want to show demos that fully working.
Each demo should have links to:
- Live URL of the site
- GitHub repo
- DeveloperWorks blog post for that demo

The JSON file is  managed and reviewed by the Bluemix developer Advocate team when any new demo get added.
There is a process in which we follow for adding new demos on to the JSON file.


## Add New Demo to the JSON data file
Add your demo data to the "data_under_review.json" file, the demo will be reviewed and once reviewed then it will be moved on to main.json file. 

When adding a new demo, please make sure you follow the data sample from below.
The Search and tagging and filtering works based on the this flow so please follow same to below layout.
Example Data:
```
{
    "Author" : "IBM",
    "name": "Logistics Wizard",
    "url": "https://github.com/IBM-Bluemix/logistics-wizard",
    "description": "The Logistics Wizard is an end-to-end, smart supply chain management solution that showcases how to execute hybrid cloud, microservices, and predictive data analytics in the real world.",
    "language": "Python, NodeJS",
    "tags": ["demo", "featured"],
    "services": [ "cloudant", "weather", "secure gateway" ],
    "level" : "Intermediate",
    "category" : "Web",
    "urlLink": "https://logistics-wizard.mybluemix.net",
    "blogPost" : "https://github.com/IBM-Bluemix/logistics-wizard/wiki/Technical-Collateral"
  }
```




## If you wish to clone the repo and run the app locally then follow the commands below:
 - Install Jekyll

    ```
    sudo gem install jekyll
    sudo jekyll serve
    ```

Website will be running locally on: http://127.0.0.1:4000/
