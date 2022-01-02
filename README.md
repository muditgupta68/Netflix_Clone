
#  Netflix India Clone

Company named netflix for streaming movies and tv shows/series miniature clone using ReactJS library



## ⚙️ Features

- Responsive Design
- Live previews
- Trailers pop-ups
- Cross platform web-application


## 🔧 Tech Stack

**Client:** HTML/CSS, ReactJS

**API:** [TMDB](https://www.themoviedb.org/) API

**Server:** Google Firebase



## 🎓 Lessons Learned

- I have learned quite about the workflow of ReactJS with Google Firebase Deployment as creating clone demands quality of knowledge to access the data.
- I also got opportunity to explore Context API concept which I believe is very much essential for every developer. 


## 📍 API Reference

#### Get top-rated movie items

```http
  GET `/movie/top_rated?api_key=${API_KEY}&language=en-US`
```
#### Get trending movie items

```http
  GET `/trending/all/week?api_key=${API_KEY}`
```
#### Get Popular movie items

```http
  GET `/movie/popular?api_key=${API_KEY}&language=en-US`
```
### For all the constraints will remain same which is :
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. (Your API key) |

For more visit [TMDB DOCS](https://developers.themoviedb.org/3)



## 📕 Documentation Ref

[ReactJS](https://linktodocumentation) : Javascript Library for SPA web applications.

[TMDB](https://linktodocumentation) : docs for accessing the URL's of respective data.


## 💻 Demo

[netflixCloneLink](https://netflixclone-c11f9.web.app/)


## 📍 Run Locally

Clone the project

```bash
  git clone https://github.com/muditgupta68/Netflix_Clone.git
```

Install node_module dependencies

```bash
  npm install
```

Start the server
```bash
  npm run start
```

Visit [Local Host](http://localhost/)


## 📍 Screenshots

### Trailer Screen
![trailer screen](https://github.com/muditgupta68/Netflix_Clone/blob/images/src/trailerImage.png?raw=false)

## 📍 Deployment

The project is deployed on Firebase

So,

The steps involved as follows:

- login the firebase database with your respective credentials
```bash
  firebase login

```
- Inititalising and building up the project in build folder for efficiency 

```bash
  firebase init
  npm run build
```
- Deploying the files into the database
```bash
  firebase deploy
```
## 🛠 Optimizations

- We can add up AI/ML concept models to enrich the web app with recommendation features of movies & TV-shows to the user.

## 👨‍💻 Feedback

If you have any feedback, please reach out to us at muditgupta1086@gmail.com

