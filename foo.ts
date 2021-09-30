interface IGetStories {
  limit: number;
  page: number;
  userId: string;
}

interface IStory {
  originId: string;
  createdBy: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  content: {
    images?: string[];
    text: string;
    video?: {
      url: string;
      cover: string;
    };
  };
  comments: {
    userId: string;
    content: string; // TODO
    createdAt: string;
    updatedAt: string;
  }[];
}

// 1. General Requirement
//     1. Like Facebook home page, stories appear based on subscription
//     2. Users can share the story
//     3. Users can post a story and attach comments, links, images, and videos
// 2. Specific Requirement
//     1. The feature should support multiple devices
//     2. The feature should be accessible for disabilities
