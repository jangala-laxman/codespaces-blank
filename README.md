FlytBase

Creating a basic CRUD API for a big corporation that wants to survey/map the area of its campus/sites using drones. They can have multiple campuses in-country or internationally. We need to design a system that satisfies the following 
requirements:

● Users can have multiple drones in his/her account.
● Each drone will be assigned to a particular campus/site.
● Users can create missions which are geolocations that a drone follows in order to survey/map sites. Each mission will be assigned to a site.
● Users can change drones from one campus/site to another. But missions cannot be changed from one campus/site to another.
● Users can run missions only on drones that are assigned to the site where the mission belongs.
● Missions can be categorized into multiple types (path, grid/survey, corridor).
● Users can use these categories to filter missions according to his/her needs.

I used Nodejs, Mongoose and required NPM libraries for building this API. 

For the given case, created a server that runs on port 4000 followed a MVC structure to create API ignoring views.

From the provided scenario, Each user can have any number of drones and each drone should be allocated to site.
Each site can have any number of missions assigned to it.

For accessing any information need to provide the id of specific document. 

for example, consider a post route of adding drone under a user and site. 
    
    "/:userId/:siteId/addDrone" - 
    userId and siteId params should be given from the mongoDB. 
    Add the relevant details like, drone_type, make_name, name in the body (raw - json).
    On clicking POST, this data is pushed to the DB. 

