import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import Header from "./components/Header";
import Posts from "./components/Posts";
import "./styles.scss";

class App extends Component {
  state = {
    postTitle: "",
    postDescribe: "",
    posts: [
      {
        key: 0,
        name: "nPost1",
        title: "Post 1",
        imagem:
          "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
        describe: "descrição teste 001",
        date: "2019-05-24 19:22:00"
      },
      {
        key: 1,
        name: "nPost2",
        title: "Post 2",
        imagem:
          "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
        describe: "descrição teste 002",
        date: "2019-05-23 19:22:00"
      },
      {
        key: 2,
        name: "nPost3",
        title: "Post 3",
        imagem:
          "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
        describe: "descrição teste 003",
        date: "2019-05-22 19:22:00"
      },
      {
        key: 3,
        name: "nPost4",
        title: "Post 4",
        imagem:
          "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
        describe: "descrição teste 004",
        date: "2019-05-21 19:22:00"
      }
    ]
  };

  handlerAddPost = () => {
    let st = this.state;
    let newDt = new Date();
    let [time] = newDt.toTimeString().split(" ");
    let objPost = {
      key: st.posts.length + 2,
      name: `n${st.posts.length + 1}`,
      title: st.postTitle,
      imagem:
        "https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png",
      describe: st.postDescribe,
      date: newDt.toLocaleDateString() + " " + time
    };
    console.log(objPost);
    st.posts.unshift(objPost);
    st.postTitle = "";
    st.postDescribe = "";
    this.setState(st);
  };

  render() {
    return (
      <Fragment>
        <Header titleApp="Desafio 01 - ReactJS" />
        <div align="center" className="mainCont">
          <div className="inputContainer">
            <div>
              <input
                placeholder="Title"
                type="text"
                value={this.state.postTitle}
                onChange={e => {
                  this.setState({ postTitle: e.target.value.toUpperCase() });
                }}
              />
            </div>
            <div>
              <input
                placeholder="Describe"
                value={this.state.postDescribe}
                onChange={e => {
                  this.setState({ postDescribe: e.target.value });
                  e.preventDefault();
                }}
              />
            </div>
            <div>
              <button type="button" onClick={this.handlerAddPost}>
                Adicionar Novo Post
              </button>
            </div>
          </div>
        </div>
        <Posts posts={this.state.posts} />
      </Fragment>
    );
  }
}
render(<App />, document.getElementById("app"));
