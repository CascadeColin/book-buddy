import { test } from "./style";

import React, { Profiler } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
//import myBooks from './pages/myBooks';
import MyBooks from "./pages/MyBooks";
import Profile from "./pages/Profile";
import Navbar from "./components/Nav";
import HomePage from "./pages/HomePage";
import AddBooks from "./pages/AddBooks";
import { setContext } from "@apollo/client/link/context";


const httpLink = createHttpLink({
  uri: "/graphql",
});

// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/mybooks" element={<MyBooks />} />
            <Route path="/addbooks" element={<AddBooks />} />
            <Route path="/profile" element={<Profile />} />
            {/* <Route 
            path='*'
            element={<h1 className='display-2'>Wrong page!</h1>}
          /> */}
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

// function App() {
//   return (
//     <div>
//       <h1 className='text-3xl font-bold text-center'>This is a Tailwind test!</h1>
//     </div>
//   )
// }

export default App;
