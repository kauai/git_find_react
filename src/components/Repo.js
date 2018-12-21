import React, { Component } from 'react'

export default class Repo extends Component {

    render() {
    const { 
        name,
        html_url,
        stargazers_count, 
        watchers_count,
        forks_count,
    } = this.props

    return (
     <div className="card card-body-mb-2" style={{marginBottom:"10px"}}>
        <div className="row" style={{padding:"10px"}}>
            <div className="col-md-6">
                <a href={html_url}>Nome: {name}</a>
                <div className="col-md-6">
                    <span className="badge badge-primary">Stars: {stargazers_count}</span><br/>
                    <span className="badge badge-success">Watch: {watchers_count}</span><br/>
                    <span className="badge badge-info">Forks: {forks_count}</span>
                </div>
            </div>
            </div>
      </div>
    )
  }
}
