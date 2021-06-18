# WiT Ace Event 2021 : Team Shakti

> Contents
> 1.	Short description
> 2.	Demo video
> 3.	The architecture
> 4.	Long Description
> 5.	Project Roadmap
> 6.	Getting started
> 7.	Built With
> 8.	Authors


## Short description

### What's the problem?
> The global material footprint rose, from 73.2 billion metric tons in 2010 to 85.9 billion metric tons in 2017, a 17.4 per cent increase since 2010 and a 66.5 per cent increase from 2000. The world’s reliance on natural resources continued to accelerate in the past two decades.
Currently less that 25% of our waste is being recycled, with the remaining being buried or incinerated in landfills. This seems absurd when we could be reusing and/or recycling more than 70% of the waste we produce.

### How can technology help?
> Technology can enable buyers/manufacturers to make a more informed decision on the recycled materials they want to purchase and also at the same time, provide a space for Recycled Material suppliers and sell their Materials by sharing transparent information about the production process and carbon emission scores. 
> This will provide a medium for suppliers to responsibly produce and sell their materials at competitive prices and also provide market insights to buyers who are looking for sustainable options as part of responsible consumption 

### The idea
> Demand for recycled plastics from large brand owners and industrial buyers is increasing, driven by financial considerations, sustainability targets and customers’ desire for environmentally-friendly products. <br />
> Shakti is a B2B platform for buyers or manufacturers who can find recycled materials and for sellers, who can sell recycled materials at competitive prices.  Our application also provides insights and recommendations using Watson Discovery to buyers which aids them in their decision making. This platform will enable producers and consumers to build and buy products in a sustainable way for our society, by reducing waste and increasing the use of recycled materials. 

## Demo Video

[![Watch the video](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![image](https://camo.githubusercontent.com/2e38d2ec4d7db2226bdba6a60b8bb417b4b71f5d32e63dec82cabc2d5dc6aa93/68747470733a2f2f6477312e733831632e636f6d2f646576656c6f7065722d7374617469632d70616765732f63616c6c666f72636f64652f656e2f6765742d737461727465642f636c696d6174652d6368616e67652f677265656e2d636f6e73756d7074696f6e2f696d616765732f6366632d70726f64756374696f6e2d636f6e73756d7074696f6e2d6172636869746563747572652e706e67)

> 1.	The user interacts with a web application for the marketplace.
> 2.	The React app communicates with the back-end APIs.
> 3.	The Fastify back end handles data requested by the web app and exposes some public endpoints for material market data through a RESTful API.
> 4.	The back end queries Watson Discovery for updated information on materials.
> 5.	Watson Discovery manages a collection of recycled and non-recycled material information, such as average prices, carbon impact, and quality. Discovery enriches the data with natural language processing so that it can be more easily indexed.
> 6.	Discovery crawls public websites for updates on current material information.
> 7.	The back end stores and retrieves information on material that is provided by users in an IBM Cloudant NoSQL database.
> 8.	A Kubernetes cluster is used for a scalable, flexible, modern containerized environment.
> 9.	New Relic provides full stack observability and monitoring within the Kubernetes environment.

## Long Description

> Shakti is a B2B platform for buyers or manufacturers who can find recycled materials and for sellers, who can sell recycled materials at competitive prices. 
> 1.	Buyers can look for materials by comparing between different vendors on the basis of prices, quality or product, Carbon footprint and recycling method. Our application also provides insights and recommendations using Watson Discovery to buyers which aids them in their decision making
> 2.	Suppliers can list their materials and connect with Buyers/manufacturers at competitive prices.<br />

> This platform will enable producers and consumers to build and buy products in a sustainable way for our society, by reducing waste and increasing the use of recycled materials.

## Project Roadmap

![image](https://ibb.co/bH8vgsc)

## Getting Started 

Main components of development and testing: 

> 1.	[sample-react-app](./UI/) 
> 2.	[sample-angular-app](./API/)
> 3.	[Other-info](./shakti.ppt/)

## Built with

> 1.	React App : an open-source front-end JavaScript library for building user interfaces or UI components
> 2.	Watson Discovery : AI-powered intelligent search and text-​analytics platform
> 3.	Node.JS : JavaScript runtime built
> 4.	Cloudant : a scalable, distributed cloud database
> 5.	New Relic : cloud-based observability platform
> 6.	Kubernetes : an open-source container orchestration platform

## Authors

> * Joshi, Bhagyashree
> * Dey, Bapi
> * Vadhera, Puneet
> * Gupta, Ankit 
> * Ravi, Sandhya
> * Mani, Mahima 

