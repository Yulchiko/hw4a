import {Navigate, Route, Routes} from "react-router-dom";

import {Layout, PoseDetails, PostComment, PostPage, UserDetails, UserPage, UserPosts} from "./Page";

function App() {

  return (
    <div className="App">
<Routes>
  <Route path="/" element={<Layout/>}>
    <Route index element={<Navigate to={'user'}/>}/>
    <Route path="users" element={<UserPage/>}>
      <Route path=":id" element={<UserDetails/>}>
        <Route path="posts" element={<UserPosts/>}/>
      </Route >
    </Route>
    <Route path="posts" element={<PostPage/>}>
      <Route path=":id" element={<PoseDetails/>}>
        <Route path="comments" element={<PostComment/>}/>
      </Route>
    </Route>
  </Route>
</Routes>
    </div>
  );
}

export default App;
