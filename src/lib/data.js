const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jonae" },
];

const post = [
  {
    id: 1,
    title: "Post 1",
    body: "........",
    userId: 1,
    img: "https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-stad-byggnader-urban-stader.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    createdAt: "2024-01-01",
  },
  {
    id: 2,
    title: "Post 2",
    body: "........",
    userId: 1,
    img: "https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-stad-byggnader-urban-stader.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    createdAt: "2024-01-01",
  },
  {
    id: 3,
    title: "Post 3",
    body: "........",
    userId: 2,
    img: "https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-stad-byggnader-urban-stader.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    createdAt: "2024-01-01",
  },
  {
    id: 4,
    title: "Post 4",
    body: "........",
    userId: 2,
    img: "https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-stad-byggnader-urban-stader.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    createdAt: "2024-01-01",
  },
];

export const getPosts = () => {
  return post;
};

export const getPost = (id) => {
  console.log("id", id);
  return post.find((post) => post.id == id);
};
