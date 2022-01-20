import React, {Component} from 'react';
import Header from './Common/Header';
import CreateJob from './components/CreateJob'
import ShowJobs from "./components/ShowJobs";
import SampleContext from './Context/SampleContext'
import axios from "axios";


class Main extends Component {
    state = {
        title: "مدیریت وظایف",
        titleNewJob: "اضافه کردن کار جدید",
        jobs: [],
        newJob: "",
        newColor: "",
        newDescription: "",
        modalShow: false
    }

    componentDidMount() {
        axios.get('api/showAllJobs')
            .then(response => {
                this.setState({jobs: response.data})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleSaveJobs = () => {
        if (this.state.newJob !== "" && this.state.newJob !== ' ' && this.state.newColor !== "") {
            const jobs = [...this.state.jobs];
            const newJob = {
                name: this.state.newJob,
                color: this.state.newColor,
                description: this.state.newDescription

            }
            jobs.push(newJob);
            this.setState({jobs, newJob: "", newColor: ""});

            axios.post('api/saveJobs', {
                name: this.state.newJob,
                color: this.state.newColor,
                description: this.state.newDescription
            })
        }

    }


    setJobName = (event) => {
        this.setState({newJob: event.target.value})
    }

    setJobColor = (event) => {
        this.setState({newColor: event.target.value});
    }

    setModalShow = () => {
        this.setState({modalShow: !this.state.modalShow});
    }

    setJobDescription = (event) => {
        this.setState({newDescription: event})
    }

    render() {

        return (
            <SampleContext.Provider
                value={{
                    state: this.state,
                    setJobName: this.setJobName,
                    setJobColor: this.setJobColor,
                    handleSaveJobs: this.handleSaveJobs,
                    setModalShow: this.setModalShow,
                    setJobDescription: this.setJobDescription,
                }}>
                <div className="rtl text-center container">
                    <Header/>
                    <CreateJob/>
                    <ShowJobs/>
                </div>
            </SampleContext.Provider>
        )
    }

}

export default Main;
