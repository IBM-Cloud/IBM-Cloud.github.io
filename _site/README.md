# Bluemix Open Source Github.io page

The Bluemix.github.io page is where we will show our Bluemix sample demos.
There is a JSON file in which all the demos listed.
The JSON file will be updated and maintained by the full team who is developing new demos samples for Bluemix.

## Update the JSON file to add new demos
Inside the data file, open the JSON file.
The app search and filer works with having the data in format listed below:
```
  {
    "name": "Chat Bot - Car Dashboard",
    "description": "Application that demonstrates how the Conversation service uses intent capabilities in an animated car dashboard UI.",
    "url": "https://github.com/watson-developer-cloud/car-dashboard",
    "language": "NodeJS",
    "services": [ "Conversation API", "Speech To Service", "Text To Speech" ],
    "level" : "Intermediate",
    "category" : "Web"
  }
```



Running on: [https://ibm-bluemix.github.io](https://ibm-bluemix.github.io)


## To run this locally
 - Install Jekyll

    ```
    sudo gem install jekyll
    sudo jekyll serve
    ```

Website will be running locally on: http://127.0.0.1:4000/
