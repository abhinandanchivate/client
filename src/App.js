import './App.css';

import PostList from './components/layouts/PostList'

const postList=[
  {
    id:1,
    content : 'this world will be out of the pandemic soon',
    user:'abhi'
  },
  {
    id:2,
    content : 'hello from abhi',
    user:'advik'
  },
  {
    id:3,
    content : 'How r u',
    user:'abhi'
  },
  {
    id:4,
    content : 'this world will be out of the pandemic soon',
    user:'abhi'
  }
]

function App() {
  return (
    <div className="App">
     <PostList posts={postList}></PostList>
    </div>
  );
}

export default App;










{/* <Router>
<Header></Header>
<Route exact path="/" component={Landing}></Route>
<Route exact path="/login" component={Login}></Route>
<Route exact path="/register" component={Register}></Route>
<Route exact path="/sample" component={sample}></Route>
<Footer></Footer>
</Router> */}