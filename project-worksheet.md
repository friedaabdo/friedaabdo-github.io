# Project Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description/approval / make html base /  basic css layout / color scheme / section div img| Incomplete
|Day 1| Start CSS on Mobile / figure out hidden nav / figure out about me animations / debug | Incomplete
|Day 3| link google sheet / figure out carousel / debug / start desktop css| Incomplete
|Day 4| figure out color grid (maybe) / debug | Incomplete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project is a personal Portfolio which will be displaying my coding projects that I have worked on.

## Google Sheet

[My google sheet link](https://docs.google.com/spreadsheets/d/1NMkwZDoi2gYti0rTHXRwh-TLFi3_k3FzFTCb4H-UdOA/edit#gid=0) 

## Wireframes

- [Mobile](https://imgur.com/XicwoNn)
- [Desktop](https://imgur.com/rtS2C7z)




## Time/Priority Matrix 

[Time/Priority Matrix](https://imgur.com/Aqdd6yA)

#### MVP

- concealed nav/hamburger
- fixed nav
- link google sheet
- form interactivity
- appealing CSS for projects and about me sections

#### PostMVP 

- Carousel
- About Me animations
- section dividers

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Hamburger | H | 2hr | hr |
| Regular Nav | H | 2hr | hr |  
| Adding Form | H | 2hr|  hr | 
| About me css/flex | H | 2hr | hr|
| Projects grid css/flex | H | 3hr | hr |
| Working with google sheet | H | 3hrs|  hr | 
| Responsive | H | 3hr | hr | hr |
| Social Media Icons | L | 1hr |  hr |
| Choosing font | L | .5hr | hr |
| Choosing background images | L | 1.5hr | hr |
| Github host page | H | 1hr | hr |
| Total | H | 21hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Learn Carousel | L | 2hr | -hr | hr |
| Project Carousel | L | 3hr | -hr | hr |
| Learn About Me animation | L | 2hr | hr |
| About Me animation | L | 3hr | hr |
| Make own section divider | L | 1hr | hr |
| Colored Grid | L | 3hr | hr |
| Total | H | 14hrs| hrs |


TOTAL HOURS = 35 HOURS       WITH 5 HOURS OF BUFFER

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

 I used Bootstrap for the carousel, and I build everything else.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

 **ERROR**Cross-Origin Read Blocking (CORB) blocked cross-origin response <URL> with MIME type text/html. See <URL> for more details.

 Went to the url, don't really know what it means. Will have to check in with Joe tomorrow.

 **RESOLUTION**got a tip from a classmate to switch my image host from imgur to cloudinary and it worked!

 **ISSUE**my buttons to the links of my projects dont show up on the screen, but they are clearly there in the html inluding the links

 **RESOLUTION** i had a styling for all a tags to be displayed as none. just had to be more specific as to which ones had to be hidden

 **ISSUE** bootstrap will not register the extra div/slide i want to add for my carousel

 contacted Kenny, our resident bootstrap expert, hopefully he will have a solution

 **RESOLUTION** Kenny helped me see that I had accidentally put a div within a div, which was causing all my problems


