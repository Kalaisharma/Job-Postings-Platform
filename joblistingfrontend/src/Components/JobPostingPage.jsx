import JobListings from "./JobListings";
import SearchFilters from "./SearchFiltersNavBar";
import CreateJobModal from "./CreateJobModal";
import {useContext} from "react";
import {ModalContext} from "../App";
const JobPostingsPage = () => {
    const{isModalOpen, setIsModalOpen} = useContext(ModalContext);
    return (
        <>
            <SearchFilters></SearchFilters>
            <JobListings></JobListings>
            {isModalOpen && <CreateJobModal></CreateJobModal>}
        </>
    );
};
export default JobPostingsPage;