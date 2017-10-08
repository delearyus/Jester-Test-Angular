import { Post, TextPost, ImagePost, VideoPost } from './post';
import { USERS } from '../user/mock-users';

//export const POSTS: Post[] = [
    //{
        //id: 0,
        //source: USERS[0],
        //poster: USERS[1],
        //tags: ["w00t", "first", "post"],
        //content: {
            //title: "First Post!",
            //body: "OMG I can't believe this website has posts!",
        //}
    //},{
        //id: 1,
        //source: USERS[3],
        //poster: USERS[2],
        //tags: ["long"],
        //content: {
            //title: "Second Post!",
            //body: `here's some content that I am writing. It's a little bit
                   //long, so hopefully this will force a line wrap or something,
                   //I guess. here's some more test!!!!1!!`,
        //}
    //},{
        //id: 2,
        //title: null,
        //source: USERS[4],
        //poster: USERS[5],
        //tags: ["it has tags though!"],
        //content: {
            //body: "this post does not have a title. It is just text.",
        //}
    //}];

let tp1: TextPost = {
    title: "First Post!",
    body: "OMG I can't believe this website has posts!",
}

let tp2: TextPost = {
    title: "Second Post",
    body: `here's some content that I am writing. It's a little bit long,
            so hopefully this will force a line wrap or something, I guess.
            here's some more test!!!!1!!`
}

let tp3: TextPost = {
    title: null,
    body: "this post does not have a title. It is just text.",
}

let ip1: ImagePost = {
    title: null,
    body: "Just a cute lil' kitten",
    imageUrl: "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg"
}

let ip2: ImagePost = {
    title: null,
    body: "Several Cute Lil Kittens!",
  imageUrl: [
    "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
    "https://i.pinimg.com/736x/2e/18/ab/2e18ab3f71b73c6719b04c81625bb922--cat-cute-cute-pets.jpg",
    "https://i.pinimg.com/736x/05/91/fd/0591fdd8374b00d310d11d87c6150f88--excited-cat-beautiful-love.jpg"
  ]
}

let ip3: ImagePost = {
    title: "Cute Kittens!!!",
    body: "This one actually has a layout!",
  imageUrl: [
    ["https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
    "https://i.pinimg.com/736x/2e/18/ab/2e18ab3f71b73c6719b04c81625bb922--cat-cute-cute-pets.jpg"],
    ["https://i.pinimg.com/736x/05/91/fd/0591fdd8374b00d310d11d87c6150f88--excited-cat-beautiful-love.jpg"]
  ]
}


let post1: Post = {
    id: 0,
    source: USERS[0],
    poster: USERS[1],
    content: tp1,
    postType: "text",
    tags: ["w00t","first","post"]
}

let post2: Post = {
    id: 1,
    source: USERS[2],
    poster: USERS[3],
    content: tp2,
    postType: "text",
    tags: ["long"]
}

let post3: Post = {
    id: 2,
    source: USERS[4],
    poster: USERS[5],
    content: tp3,
    postType: "text",
    tags: ["it has tags though!"]
}

let post4: Post = {
    id: 3,
    source: USERS[6],
    poster: USERS[7],
    content: ip1,
    postType: "image",
    tags: ["cute","image","cat"]
}

let post5: Post = {
    id: 4,
    source: USERS[6],
    poster: USERS[7],
    content: ip2,
    postType: "image",
    tags: ["cute","image","cat"]
}

let post6: Post = {
    id: 3,
    source: USERS[6],
    poster: USERS[7],
    content: ip3,
    postType: "image",
    tags: ["cute","image","cat"]
}

let post7: Post = {
    id: 6,
    source: USERS[6],
    poster: USERS[7],
    postType: "video",
    tags: ["video"],
    content: {
        title: "Important Video",
        body: "This video is super important",
        videoStub: "ZP7K9SycELA",
        videoHost: "youtube"
    }
}

export const POSTS: Post[] = [post1,post2,post3,post4,post5,post6,post7,
    {
        id: 7,
        source: USERS[0],
        poster: USERS[0],
        postType: "video",
        tags: ["video","instagram"],
        content: {
            title: null,
            body: null,
            videoStub: 'BEVNwq4pYSA',
            videoHost: 'instagram'
        }
    },{
        id: 8,
        source: USERS[0],
        poster: USERS[5],
        postType: "image",
        tags: ["aesthetic"],
        content: {
            title: null,
            body: "Geometric Reflections\nBy Victoria Siemer",
            imageUrl: [
                "http://68.media.tumblr.com/00026f8a03734e7af81348b634343930/tumblr_nuhdx11VPs1raw451o1_540.jpg",
                "http://68.media.tumblr.com/473f8cf75aa2a527b87715fb8697c6ff/tumblr_nuhdx11VPs1raw451o2_1280.jpg",
                "http://68.media.tumblr.com/dc5a32518cc273b7791b34147473a312/tumblr_nuhdx11VPs1raw451o4_1280.jpg",
                "http://68.media.tumblr.com/c5b4da6f9427af067a986e101ea98243/tumblr_nuhdx11VPs1raw451o3_1280.jpg",
                "http://68.media.tumblr.com/a060250fa58dffc7aaea1169388887cd/tumblr_nuhdx11VPs1raw451o5_1280.jpg",
                "http://68.media.tumblr.com/793c1ddeea341e00e4f3b5ff3601d3de/tumblr_nuhdx11VPs1raw451o6_1280.jpg",
                "http://68.media.tumblr.com/2a419de78017bfaae1112099dcdd54f8/tumblr_nuhdx11VPs1raw451o7_1280.jpg",
                "http://68.media.tumblr.com/f227e8d7ab0bbe65f729436cad18f102/tumblr_nuhdx11VPs1raw451o10_1280.jpg",
                "http://68.media.tumblr.com/8d34b2cbe770e5820f3581c2a799d92f/tumblr_nuhdx11VPs1raw451o8_1280.jpg",
                "http://68.media.tumblr.com/1041ef53f2c699a16369c14a369042cc/tumblr_nuhdx11VPs1raw451o9_1280.jpg"
            ]
        }
    },{
        id: 9,
        source: USERS[0],
        poster: USERS[5],
        postType: "image",
        tags: ["aesthetic"],
        content: {
            title: null,
            body: "Geometric Reflections\nBy Victoria Siemer. The same post, but layed out as a matrix",
            imageUrl: [
                ["http://68.media.tumblr.com/00026f8a03734e7af81348b634343930/tumblr_nuhdx11VPs1raw451o1_540.jpg",
                "http://68.media.tumblr.com/473f8cf75aa2a527b87715fb8697c6ff/tumblr_nuhdx11VPs1raw451o2_1280.jpg",
                "http://68.media.tumblr.com/dc5a32518cc273b7791b34147473a312/tumblr_nuhdx11VPs1raw451o4_1280.jpg"],
                ["http://68.media.tumblr.com/c5b4da6f9427af067a986e101ea98243/tumblr_nuhdx11VPs1raw451o3_1280.jpg",
                "http://68.media.tumblr.com/a060250fa58dffc7aaea1169388887cd/tumblr_nuhdx11VPs1raw451o5_1280.jpg",
                "http://68.media.tumblr.com/793c1ddeea341e00e4f3b5ff3601d3de/tumblr_nuhdx11VPs1raw451o6_1280.jpg"],
                ["http://68.media.tumblr.com/2a419de78017bfaae1112099dcdd54f8/tumblr_nuhdx11VPs1raw451o7_1280.jpg",
                "http://68.media.tumblr.com/f227e8d7ab0bbe65f729436cad18f102/tumblr_nuhdx11VPs1raw451o10_1280.jpg",
                "http://68.media.tumblr.com/8d34b2cbe770e5820f3581c2a799d92f/tumblr_nuhdx11VPs1raw451o8_1280.jpg"],
                ["http://68.media.tumblr.com/1041ef53f2c699a16369c14a369042cc/tumblr_nuhdx11VPs1raw451o9_1280.jpg"]
            ]
        }
    }, {
      id: 10,
      source: USERS[3],
      poster: USERS[6],
      postType: "video",
      tags: ["nature","video"],
      content: {
        title: "Beyond Nature - Iceland",
        body: null,
        videoHost: "vimeo",
        videoStub: "75736121"
      }
    },{
        id: 11,
        source: USERS[0],
        poster: USERS[0],
        postType: "audio",
        tags: ["music"],
        content: {
            title: null,
            body: null,
            audioHost: "bandcamp",
            audioStub: { album: "1606899972", track: "923078007" }
        }
    }, {
        id: 12,
        source: USERS[1],
        poster: USERS[2],
        postType: "audio",
        tags: ["music"],
        content: {
            body: "The Submarines - 1940 (AmpLive Remix)",
            title: null,
            audioHost: "soundcloud",
            audioStub: { track: "99417789" }
        }
    }
];
