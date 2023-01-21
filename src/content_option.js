const logotext = "ET";
const meta = {
  title: "Egbe Timmy",
  description: "I’m Egbe Timmy data scientist _ Python devloper",
};

const introdata = {
  title: "I’m Egbe Timmy",
  animated: {
    first: "Geophysicist",
    second: "Data Analyst",
    third: "Python Developer",
  },
  description: "In no particular order",
  your_img_url: "https://res.cloudinary.com/dypv9yccn/image/upload/v1669366649/portfolio/pic1_i9stex.jpg",
  img2: "https://res.cloudinary.com/dypv9yccn/image/upload/v1669366649/portfolio/pic2_pxyksl.jpg",
  img3: "https://res.cloudinary.com/dypv9yccn/image/upload/v1669366648/portfolio/ET_whijfz.png",
};

const dataabout = {
  title: "A bit about myself",
  aboutme: "Professional data analyst with more than 2 years of experience gathering, organizing, analyzing, and distributing various kinds of statistical data. Active presenter and assured communicator with the capacity to disseminate knowledge in a way that is useful to end users. creative in coming up with fixes and deciding on changes to ensure the best possible use of organizational data.",
};
const workexperience = [
  {
    role: "Data Analyst",
    location: "Warri, Nigeria",
    company: "FriendZone.",
    timeline: { "from": "August 2021", "to": "Present" },
    summary: "• I providing technical expertise in data storage structures, data mining, and data cleansing; \n• Using statistical tools, I identify, analyze, and interpret patterns and trends in complex data. \n• sets that could be helpful for the diagnosis and prediction; \n• I work with programmers and management heads to identify process improvements, opportunities, propose system modifications, and devise data governance strategies; \n• I prepare final analysis reports for the stakeholders to understand the data-analysis steps enabling them to take important decisions based on various facts and trends. \n• I implement visual elements that users see and interact with in a web application.",
  },
];

const skills = [{
  name: "Python",
  value: 90,
},

{
  name: "Flask",
  value: 85,
},
{
  name: "Excel",
  value: 80,
},
{
  name: "Javascript",
  value: 70,
},
{
  name: "React",
  value: 60,
},
{
  name: "SQL",
  value: 85,
},
];

const Education = [{
  degree: "Full-Stack Developer Nanodegree",
  school: "Udacity, Inc.",
  timeline: { "from": "Aug 2022", "to": "Nov 2022" },
  summary: "This nanodegree course extensively taught various technical skills needed to build database-backed APIs and web applications including:\n\n\t• SQL and Data Modelling for the Web\n\t• API Development and Documentation\n\t• Identity and Access Management\n\t• Server Deployment, Containerization and Testing",
},
{
  degree: "Google Data Analytics",
  school: "Coursera",
  timeline: { "from": "Aug 2022", "to": "Oct 2022" },
  summary: "Designed for learners with little to no Data Analytics experience:\n\t•Data Analysis with R.\n\t•Analyze Data using spreadsheets & SQL.\n\t•Apply SQL functions for cleaning and transforming data",
},
{
  degree: "AWS Machine Learning Foundations",
  school: "Udacity, Inc.",
  timeline: { "from": "Jun 2022", "to": "Nov 2022" },
  summary: "This nanodegree course  teaches developers of all skill levels machine learning concepts for pursuing a career in ML and provides extensive experience using AWS:\n\n\t• Basic understanding of the machine learning workflow \n\n\t• Basic understanding of linear regression, logistic regression, neural network \n\n\t• Basic understanding of model training and testing processes \n\n\t• Basic knowledge of accuracy, precision, recall, and mean square error (MSE) \n\n\t• SQL and Data Modelling for the Web",
},
{
  degree: "BSc. in Geophysics",
  school: "Federal University of Petroleum Resources, Effurun, Nigeria.",
  timeline: { "from": "Mar 2014", "to": "Apr 2018" },
  summary: "• Graduated with Second Class Honours",
},
];

const dataportfolio = [{
  id: 1,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1669622525/portfolio/1_ZtO60QvYVzN3rU0VuSSU1g_af9twi.jpg",
  description: "Data cleaning with Python",
  link: "https://link.medium.com/zLln2XkwNub",
  category: 'data_analysis',
},
{
  id: 2,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/v1669623868/portfolio/Fyuur_hgpsma.jpg",
  description: "Fyuur",
  link: "https://github.com/Egbetimmy/Fyuur-musical-app",
  category: 'web_development',
},
{
  id: 3,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673118654/portfolio/Coffee-shop_zus7fx.jpg",
  description: "Coffee Shop",
  link: "https://github.com/Egbetimmy/Coffee-Shop",
  category: 'web_development',
},
{
  id: 4,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673118624/portfolio/Trivia-Scrabble-Tiles-1000x600_oe6ntr.jpg",
  description: "Trivia API",
  link: "https://github.com/Egbetimmy/Trivia-Api",
  category: "web_development",
},
{
  id: 5,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673118952/portfolio/IMG_20200330_203529_064_rwbgeq.jpg",
  description: "Server Deployment and Containerization",
  link: "https://github.com/Egbetimmy/cd0157-Server-Deployment-and-Containerization",
  category: 'web_development',
},
{
  id: 6,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673118634/portfolio/Flower-Iris-Siberian-flag-Garden-Close-up_gtrh8k.webp",
  description: "Iris dataset",
  link: "https://github.com/Egbetimmy/GRIP-Internship/blob/main/Unsupervised_learning.ipynb",
  category: 'data_science',
},
{
  id: 7,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673119743/portfolio/web_scrapping_ikbfyf.png",
  description: "Web Scraping",
  link: "https://github.com/Egbetimmy/Web-Scraping",
  category: 'data_analysis',
},
{
  id: 8,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673119741/portfolio/tic_tac_toe_k04qvq.png",
  description: "Tic Tac Toe",
  link: "https://github.com/Egbetimmy/Tic-Tac-Toe",
  category: 'javascript',
},
{
  id: 9,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673119736/portfolio/todo_r5i9mo.jpg",
  description: "Todo App",
  link: "https://github.com/Egbetimmy/Todo-App",
  category: 'javascript',
},
{
  id: 10,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673119742/portfolio/calculatorillustration_ykhewi.jpg",
  description: "Calculator",
  link: "https://github.com/Egbetimmy/Calculator",
  category: 'javascript',
},
{
  id: 11,
  img: "https://picsum.photos/400/300/?grayscale",
  description: "Customer Analysis",
  link: "https://public.tableau.com/app/profile/egbe.timmy/viz/CustomerAnalysis_16675062924670/Dashboard1#1",
  category: 'data_analysis',
},
{
  id: 12,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673119736/portfolio/Deep-Learning_myxyzz.jpg",
  description: "Digit Recognition",
  link: "https://github.com/Egbetimmy/data-science/blob/master/1_digits_recognition/digits_recognition_neural_network.ipynb",
  category: 'data_science',
},
{
  id: 13,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1673638210/portfolio/oil_spill_pe7fhh.webp",
  description: "Oil Spillage",
  link: "https://medium.com/@egbetiimmy/exploratory-data-analysis-of-niger-delta-spill-data-673524a57955",
  category: 'data_analysis',
},
{
  id: 14,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1674333623/portfolio/download_w8fqgl.jpg",
  description: "Facial Recognition",
  link: "https://medium.com/@egbetiimmy/exploratory-data-analysis-of-niger-delta-spill-data-673524a57955",
  category: 'data_science',
},
{
  id: 15,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1674333624/portfolio/0x0_ptkjxq.jpg",
  description: "Fake News Detector",
  link: "https://github.com/Egbetimmy/Fake-News",
  category: 'data_science',
},
{
  id: 16,
  img: "https://res.cloudinary.com/dypv9yccn/image/upload/e_grayscale/v1674333676/portfolio/house-price-497112-KhCJQICS_afssha.jpg",
  description: "House Price Prediction",
  link: "https://github.com/Egbetimmy/Fake-News",
  category: 'data_science',
},
];



const contactConfig = {
  YOUR_EMAIL: "timmytimeyin@gmail.com",
  YOUR_FONE: "(234)80-729-67944",
  description: "I’m always interested in hearing about new projects and opportunities.",
  // creat an emailjs.com account 
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_p087iht",
  YOUR_TEMPLATE_ID: "template_7pow8qb",
  YOUR_USER_ID: "7DvRVF3_jGZRyJ-mD",
};

const socialprofils = {
  github: "https://github.com/Egbetimmy",
  linkedin: "https://www.linkedin.com/in/egbe-timmy-867672171/",
  twitter: "https://twitter.com/TimmyEgbe",
};
export {
  meta,
  dataabout,
  dataportfolio,
  workexperience,
  skills,
  Education,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
