import React, { Component,Fragment } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      user:"",
      repo:""
    }
  }

getUser = async values => {
     
      if(values.keyCode === 13){
          const user = values.target.value
          const url = `https://api.github.com/users`;
          const clientId = `17d5208e8e1e26e998ae`
          const clientSecret = `1ab37c14430349fc03dae06804f2ab1e7c052391`

          const http = `${url}/${user}?client_id=${clientId}&client_ecret=${clientSecret}`
          const http2 =`${url}/${user}/repos?per_page=5&sort:created_asc&client_id=${clientId}&client_secret=${clientSecret}`
          const repoUser = (typeof user == 'string' && user.length) 
          ? await (await fetch(http)).json()
          :"O user passado tem ser uma string";
          // console.log('getUser',repoUser)
          const reposResponse = await (await fetch(http2)).json();

          this.setState({
            user:repoUser,
            repo:reposResponse
          })
      }
}

  render() {
    return (
          <Fragment>
              <nav class="navbar navbar-dark bg-warning">
                  <div class="container">
                      <a href="null" class="navbar-brand">GitHub-find</a>
                  </div>
              </nav>
              <div class="container" style={{margin:"20px auto"}}>
                {/* {console.log(this.state)} */}
                  <div class="card card-body" style={{margin:"20px auto"}}>
                      <h1>Pesquisar Usuarios</h1>
                      <p class="lead">Digite o nome da pesquisa</p>
                      <input onKeyDown={this.getUser} type="text" class="form-control" id="search"/>
                  </div>
                  <div id="profile">
                    {this.state.user && <Profile {...this.state.user} repo={[...this.state.repo]}/>}
                  </div>
              </div>
          </Fragment>
    );
  }
}

export default App;
