const image = "https://res.cloudinary.com/ddhxnuyyj/image/upload/v1728613810/Frame_42_ennr0u.png";

const getDate = new Date();
const date = getDate.getDate();
const month = getDate.getMonth() + 1; // Month is zero-based, so we add 1
const year = getDate.getFullYear();

export const blogs = [
  {
    id: 1,
    image: image, // Use the value, not an object
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`, // Concatenate date, month, and year
    Time: "2 mins",
  },
  {
    id: 2,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 3,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 4,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 5,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 6,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 7,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 8,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
  {
    id: 9,
    image: image,
    title: "Title goes here",
    bodyText: "The Jesus Talks Radio is a Christian radio station that broadcasts with the goal of bringing men to a deeper understanding of Christ Jesus and envisioning all mankind as being firmly",
    name: "Jonathan Mills",
    date: `${date} ${month} ${year}`,
    Time: "2 mins",
  },
];
