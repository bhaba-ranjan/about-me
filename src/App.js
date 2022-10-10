import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Contact from './Components/Contact';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  // getResumeData(){
  //   $.ajax({
  //     url:'https://drive.google.com/file/d/1KaFwIG-zANgSbnsI08rhkqndBwM1XTdb/view',
  //     dataType:'json',
  //     cache: false,
  //     success: function(data){
  //       this.setState({resumeData: data});
  //     }.bind(this),
  //     error: function(xhr, status, err){
  //       console.log(err);
  //       alert(err);
  //     }
  //   });
  // }

  componentDidMount(){
    this.setState({resumeData: JSON.parse(JSON.stringify({
      "main": {
        "name": "Bhabaranjan Panigrahi",
        "occupation": "(Your Occupation Here)",
        "description": "Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer",
        "image": "profilepic.jpg",
        "bio": "I am a Computer Science graduate student Specializing in Machine Learning. Before starting my master's I was working as a Senior Software Developer. During this time, I worked closely with Data Science and Analytics teams. Being a tech geek, I got super fascinated after seeing the unparallel capabilities of ML/AI in action. During my time at the second company, I got an opportunity to work in a data ingestion project and collaborated directly with the Insight Management Team. This was the time I decided to make a career in ML and AI.",
        "bio2":"I am curretly seeking Internship opportunities in the field of Machine Leanring and AI. I want to work on challenging projects which will provide me a scope to Apply and Grow my skills at the same time.",
        "contactmessage": "Here is where you should write your message to readers to have them get in contact with you.",
        "email": "bhabaranjan.cs@gmail.com",
        "phone": "571-587-7120",
        "address": {
          "street": "9451 Lee Highway",
          "city": "Fairfax,",
          "state": "Virginia",
          "zip": "22031"
        },
        "social": [
          {
            "name": "github",
            "url": "https://github.com/bhaba-ranjan",
            "className": "fa fa-github"
          },
          {
            "name": "linkedin",
            "url": "https://www.linkedin.com/in/bhaba-ranjan/",
            "className": "fa fa-linkedin"
          },
                    
        ]
      },
      "resume": {
        "skillmessage": "Here you can create a short write-up of your skills to show off to employers",
        "education": [
          {
            "school": "George Mason University",
            "degree": "Masters of Science in Computer Science",
            "graduated": "Aug 2022 - Dec 2023",
            "description": ["1. Introduction to Artitifial Intelligence","adf","asdf"]
          },
          {
            "school": "School #1 Maybe College?",
            "degree": "What did you study 101",
            "graduated": "March 2003",
            "description": "Describe your experience at school, what you learned, what useful skills you have acquired etc."
          }
        ],
        "work": [
          {
            "company": "Awesome Design Studio",
            "title": "Senior UX God ",
            "years": "March 2010 - Present",
            "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
          },
          {
            "company": "Super Cool Studio",
            "title": "Junior bug fixer",
            "years": "March 2007 - February 2010",
            "description": "Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know."
          }
        ],
        "skills": [
          {
            "name": "Git",
            "level": "60%"
          },
          {
            "name": "Illustrator",
            "level": "55%"
          },
          {
            "name": "ReactJs",
            "level": "50%"
          },
          {
            "name": "CSS",
            "level": "90%"
          },
          {
            "name": "HTML5",
            "level": "80%"
          },
          {
            "name": "VueJs",
            "level": "50%"
          },
          {
            "name": "MongoDB",
            "level": "80%"
          }
        ]
      },
      "portfolio": {
        "projects": [
          {
            "title": "Canadian Wanderlust",
            "category": "My Travel Blog for my post-university travels",
            "image": "canadian-wanderlust.jpg",
            "url": "https://www.canadianwanderlust.com"
          },
          {
            "title": "Fury Fighting Gear",
            "category": "(offline now) A fighting gear company I started",
            "image": "fury-fighting-gear.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Original Thai Food",
            "category": "Website I built for a restaurant I like in Thailand",
            "image": "original-thai-food.jpg",
            "url": "http://www.timbakerdev.com/originalthaifood.github.io"
          },
          {
            "title": "Resume Website",
            "category": "A React based resume website template",
            "image": "resume-website.jpg",
            "url": "http://www.timbakerdev.com"
          },
          {
            "title": "Smirkspace",
            "category": "(MVP Only) A React and Meteor based chat University project.",
            "image": "smirkspace.jpg",
            "url": "http://www.smirkspace.com"
          }
        ]
      },
      "testimonials": {
        "testimonials": [
          {
            "text": "Here you should write some nice things that someone has said about you. No lies though, employers can tell when you are lying.",
            "user": "Kareem Abdul Jabbar"
          },
          {
            "text": "That Tim Baker must be one of the most brilliant developers I've ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time!",
            "user": "Steve Wozniak... impersonator"
          }
        ]
      }
    })
    )});
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
