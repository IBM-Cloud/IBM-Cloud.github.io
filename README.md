# Bluemix Github.io Page
The [IBM-Bluemix GitHub.io](https://ibm-bluemix.github.io/) site is a well-maintained, centralized, curated collection of open sample applications built using Bluemix and Bluemix services. The site gives developers a go-to page to see all Bluemix capabilities.


### How to add new links to the Bluemix.github.io page.
We have a process in which how new links can be added to the Bluemix GitHub.io page.
To add a new link follow these steps:

Step 1) Create a new issue and label it as "Potential-Links".
The issue descreption must have the following details:
- Live URL of the site
- GitHub repo
- DeveloperWorks blog post for that demo
- Good ReadMe follows our IBM Bluemix ReadMe standards.

Step 2) Once issue is created with new link, we will review the issue created, we will quickly check the source code demo, ReadMe and making sure the application is at the standards we want.

We want to show large applications that shows off our technologies, we don't want hello world or getting started stuff.

------


## Rules & Guidelines for adding new samples

### Demo Card

Each demo is represented by a *Demo Card* comprised of the attributes below:

#### Demo Name (Repo Link)

The *Demo Name* should be short, succinct, and generally reflective of the demo itself. The demo name should not include any descriptors other than the name itself.

**Good:** Real Time Tone Analysis

**Bad:** Cognitive Concierge - end-to-end Swift

The *Demo Name* also doubles as a link to the GitHub repository for the application.

#### Demo Description

The *Demo Description* appears directly below the Demo Name and should briefly describe what the application demonstrates in 1 to 2 sentences.

**Demo Descriptions should be kept to 162 characters or less. Any description that exceeds this amount will be cut off.**

#### Language Tags (?)

Every demo card should feature a *Language Tag(s)* that reflects the language(s) associated with the given demo. These help users of the site quickly decipher how relevant the demo is to them.

Language tags also double as filters. Selecting a language tag should filter the demo cards shown by the selected language.

#### Category Tags (?)

Similar in style to the language tags, every demo card should also feature a *Category Tag(s)* that reflects the category associated with the demo (IOT, Mobile, Web, Watson).

Category tags also double as filters. Selecting a category tag should filter the demo cards shown by the selected language.

#### Services (?)

Every demo card features a list of *Services* used with that specific demo. This helps users to better understand the services they can utilize on Bluemix to achieve the same results.

Currently, the list of services does not act as a filter.

#### Live Demo Link

If available, every demo card features a *Live Demo Link* in the bottom section of the card. This links the user directly to the live demo site.

#### Blog Post Link

Similar to the live demo link, every demo card should feature a *Blog Post Link*. This links the user to the developerWorks hosted blog highlighting the various aspects of the demo.

#### Blog Post Link

Similar to the live demo link, every demo card should feature a *View Video*. This links the user to the a video of the demo.


## Services the GitHub.io uses 
- AngularJS routing, cookies, ui-bootstrap & Animations is used to create the overall site functionality. 

- Availability Monitoring service to monitor all live demo links and alert us when any of the samples are down, and all alerts are sent to the #Bluemix-GitHub.io slack channel 

- NPS is used to collect user feedback on the samples on the site 

- Segment, Amplitude & Google Analytics is used to track user events and sessions on the site   
=> [Segment](https://segment.com/login)  
=> [Amplitude](https://analytics.amplitude.com/org/10809)  
=> [Google Analytics](https://analytics.google.com/analytics)  
To get access to the analytic dashboard contact Twana Daniel - twanaazi@ie.ibm.com   
