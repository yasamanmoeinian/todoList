import React, {createContext} from 'react';

const SampleContext = createContext({
    state: {},
    setJobName: () => {
    },
    setJobColor: () => {
    },
    handleSaveJobs: () => {
    },
    setModalShow: () => {
    },
    setJobDescription: () => {
    }
});
export default SampleContext;
