# Jester

**Jester** is a concept for a fully decentralized/federated Social Network.
This is a semi-functional mockup for the user interface, built using Angular.

Currently, the interface contains data structures for representation of:

+ Text Posts
+ Photo Posts
    + single image
    + carousel
    + grid layout
+ Video Posts (embed)
    + Youtube
    + Vimeo
    + Instagram
+ Audio Posts (embed)
    + Soundcloud
    + Bandcamp

All posts are currently hard-coded, but they are hard-coded as these datatypes,
rather than as pure HTML, with rendering mechanisms fully intact. This way,
modifyiing the application to actually dynamically fetch posts will be much
easier and won't require huge amounts of reworking. Fetching of users and posts
are handled through their own promise-based services, which make an easy entry 
point for dynamic data.
