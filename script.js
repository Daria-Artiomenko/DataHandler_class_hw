class DataHandler {
    constructor() {
      this.posts = new Map();
    }
  
    async fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.forEach(post => this.posts.set(post.id, post));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
  
    listPosts() {
      return [...this.posts.values()].sort((a, b) => a.title.localeCompare(b.title));
    }
  
    getPost(id) {
      return this.posts.get(id) || null;
    }
  
    clearPosts() {
      this.posts.clear();
    }
}

const dataHandler = new DataHandler();


dataHandler.fetchPosts().then(() => {

  const sortedPosts = dataHandler.listPosts();
  console.log('Sorted Posts:', sortedPosts);

  const post = dataHandler.getPost(12);
  console.log('Post with ID 12:', post);

  dataHandler.clearPosts();
});