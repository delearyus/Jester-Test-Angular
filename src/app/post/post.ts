import { User } from '../user/user';

export class TextPost {
    title: string;
    body: string;
}

export class ImagePost {
    title: string;
    imageUrl: string|string[]|string[][];
    body: string;
}

export class VideoPost {
    videoHost: string;
    videoStub: string;
    title: string;
    body: string;
}

export class AudioPost {
    audioHost: string;
    audioStub: { album: string, track: string };
    title: string;
    body: string;
}

export class Post {
    id: number;
    postType: string;
    source: User;
    poster: User;
    content: TextPost|ImagePost|VideoPost|AudioPost;
    tags: string[];
}
