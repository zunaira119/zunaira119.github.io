import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import ContactUs from './components/Contact';
import Footer from './components/Footer';
import resumeData from './components/ResumeData';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header resumeData={resumeData}/>
                <About resumeData={resumeData}/>
                <Resume resumeData={resumeData}/>
                <Portfolio resumeData={resumeData}/>
                <ContactUs resumeData={resumeData}/>
                <Footer resumeData={resumeData}/>
            </div>
        );
    }
}

export default App;
