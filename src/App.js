import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Header from "./pages/Header";
import Aside from "./pages/Aside";
import Content from "./pages/Content";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./context/AuthContext";

const App = () => {
  // Initialize Apollo Client
  const client = new ApolloClient({
    uri: "http://192.168.100.200:3001/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AuthContext.Provider>
          <Content />
        </AuthContext.Provider>
      </BrowserRouter>
    </ApolloProvider>
  );
};
/*
<Header />
        <Aside />
        <Content />
        <Footer />
        */

export default App;
