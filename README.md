# WiT Ace Event 2021

# Team Shakti
> Contents
> 1.	Short description
> 2.	Demo video
> 3.	The architecture
> 4.	Long Description
> 5.	Project Roadmap
> 6.	Getting started
> 7.	Built With
> 8.	Contributing
> 9.	Authors
> 10.	License
> 11.	Acknowledgement

## Short description

### What's the problem?
> The global material footprint rose, from 73.2 billion metric tons in 2010 to 85.9 billion metric tons in 2017, a 17.4 per cent increase since 2010 and a 66.5 per cent increase from 2000. The world’s reliance on natural resources continued to accelerate in the past two decades.
Currently less that 25% of our waste is being recycled, with the remaining being buried or incinerated in landfills. This seems absurd when we could be reusing and/or recycling more than 70% of the waste we produce.

### How can technology help?
> Technology can enable buyers/manufacturers to make a more informed decision on the recycled materials they want to purchase and also at the same time, provide a space for Recycled Material suppliers and sell their Materials by sharing transparent information about the production process and carbon emission scores. 
> This will provide a medium for suppliers to responsibly produce and sell their materials at competitive prices and also provide market insights to buyers who are looking for sustainable options as part of responsible consumption 

### The idea
> Demand for recycled plastics from large brand owners and industrial buyers is increasing, driven by financial considerations, sustainability targets and customers’ desire for environmentally-friendly products
Shakti is a B2B platform for buyers or manufacturers who can find recycled materials and for sellers, who can sell recycled materials at competitive prices. 
> --	Buyers can look for materials by comparing between different vendors on the basis of prices, quality or product, Carbon footprint and recycling method. 
> --	Our application also provides insights and recommendations using Watson Discovery to buyers which aids them in their decision making
> --	On the other hand, suppliers can list their materials and connect with Buyers/manufacturers at competitive prices
This platform will enable producers and consumers to build and buy products in a sustainable way for our society, by reducing waste and increasing the use of recycled materials. 

## Demo Video

[![Watch the video](https://github.com/Call-for-Code/Liquid-Prep/blob/master/images/readme/IBM-interview-video-image.png)](https://youtu.be/vOgCOoy_Bx0)

## The architecture

![image](https://dw1.s81c.com/developer-static-pages/callforcode/en/get-started/climate-change/green-consumption/images/cfc-production-consumption-architecture.png)

> 1.	The user interacts with a web application for the marketplace.
> 2.	The React app communicates with the back-end APIs.
> 3.	The Fastify back end handles data requested by the web app and exposes some public endpoints for material market data through a RESTful API.
> 4.	The back end queries Watson Discovery for updated information on materials.
> 5.	Watson Discovery manages a collection of recycled and non-recycled material information, such as average prices, carbon impact, and quality. Discovery enriches the data with natural language processing so that it can be more easily indexed.
> 6.	Discovery crawls public websites for updates on current material information.
> 7.	The back end stores and retrieves information on material that is provided by users in an IBM Cloudant NoSQL database.
> 8.	A Kubernetes cluster is used for a scalable, flexible, modern containerized environment.
> 9.	New Relic provides full stack observability and monitoring within the Kubernetes environment.

