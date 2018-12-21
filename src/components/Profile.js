import React, { Component } from 'react'
import Repo from './Repo'

class Profile extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

  render() {
      const { 
          avatar_url,
          followers,
          following,
          html_url,
          name,
          public_repos
      } = this.props

    return (
     <div className="container">
     {console.log('PROFILE',this.props)}
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <img src={avatar_url} alt="" className="card-img-top"/>
                    <ul className="list-group list-group-flush">
                       <li className="list-group-item">Nome<span className="badge">{name}</span></li>
                       <li className="list-group-item">Followers<span className="badge">{followers}</span></li>
                       <li className="list-group-item">Following<span className="badge">{following}</span></li>
                       <li className="list-group-item">Repositories<span className="badge">{public_repos}</span></li>
                    </ul>
                    <div className="card-body">
                        <a href={html_url} className="btn btn-warning btn-block">Ver perfil</a>
                    </div>
                </div>
            </div>
            <div className="col-md-8">
               {console.log('REPO',this.props.repo)}
                <div id="repos">
                   {this.props.repo && this.props.repo.map(item => {
                       return <Repo {...item}/>
                   })}
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default Profile